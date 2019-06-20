import React, { Component } from 'react';

// import Greeting from './greeting';
import SearchForm from './SearchForm';
import GeoCodeResult from './GeoCodeResult';
import Map from './Map';
import { geocode } from '../domain/Geocoder';
import HotelsTable from './HotelsTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: 35.6585805,
        lng: 139.7454329,
      },
      hotels: [
        { id: 111, name: 'ホテルオークラ', url: 'https://google.com' },
        { id: 222, name: 'アパホテル', url: 'https://yahoo.co.jp' },
      ],
    };
  }

  setErrorMessage(message) {
    this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0,
      },
    });
  }

  handlePlaceSubmit(place) {
    geocode(place)
      .then(({ status, address, location }) => {
        switch (status) {
          case 'OK': {
            this.setState({ address, location });
            break;
          }
          case 'ZERO_RESULTS': {
            this.setErrorMessage('結果が見つかりませんでした。');
            break;
          }
          default: {
            this.setErrorMessage('エラーが発生しました。');
          }
        }
      }).catch((reason) => {
        // eslint-disable-next-line no-console
        console.log(reason);
        this.setErrorMessage('通信に失敗しました。');
      });
  }

  render() {
    const { address, location, hotels } = this.state;

    return (
      <div className="app">
        <h1 className="app-title">ホテル検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <div className="result-area">
          <Map location={location} />
          <div className="result-right">
            <GeoCodeResult address={address} location={location} />
            <h2>ホテル検索結果</h2>
            <HotelsTable hotels={hotels} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
