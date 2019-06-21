import React, { Component } from 'react';
import _ from 'lodash';

// import Greeting from './greeting';
import SearchForm from './SearchForm';
import GeoCodeResult from './GeoCodeResult';
import Map from './Map';
import HotelsTable from './HotelsTable';

import { geocode } from '../domain/Geocoder';
import { searchHotelByLocation } from '../domain/HotelRepository';

const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey]);

class App extends Component {
  constructor(props) {
    // eslint-disable-next-line no-console
    console.log('call：constructor');
    super(props);
    this.state = {
      location: {
        lat: 35.6585805,
        lng: 139.7454329,
      },
      sortKey: 'price',
    };
  }

  componentWillMount() {
    // eslint-disable-next-line no-console
    console.log('call：componentWillMount');
  }

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('call：componentDidMount');
  }

  componentWillReceiveProps() {
    // eslint-disable-next-line no-console
    console.log('call：componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    // eslint-disable-next-line no-console
    console.log('call：shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    // eslint-disable-next-line no-console
    console.log('call：componentWillUpdate');
  }

  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.log('call：componentDidUpdate');
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-console
    console.log('call：componentWillUnmount');
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
            return searchHotelByLocation(location);
          }
          case 'ZERO_RESULTS': {
            this.setErrorMessage('結果が見つかりませんでした。');
            break;
          }
          default: {
            this.setErrorMessage('エラーが発生しました。');
          }
        }
        return [];
      })
      .then((hotels) => {
        const { sortKey } = this.state;
        this.setState({ hotels: sortedHotels(hotels, sortKey) });
      })
      .catch((reason) => {
        // eslint-disable-next-line no-console
        console.log(reason);
        this.setErrorMessage('通信に失敗しました。');
      });
  }

  handleSortKeyChange(hotels, sortKey) {
    this.setState({ sortKey, hotels: sortedHotels(hotels, sortKey) });
  }

  render() {
    // eslint-disable-next-line no-console
    console.log('call：render');

    const {
      address,
      location,
      hotels,
      sortKey,
    } = this.state;

    return (
      <div className="app">
        <h1 className="app-title">ホテル検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <div className="result-area">
          <Map location={location} />
          <div className="result-right">
            <GeoCodeResult address={address} location={location} />
            <h2>ホテル検索結果</h2>
            <HotelsTable
              hotels={hotels}
              sortKey={sortKey}
              onSort={key => this.handleSortKeyChange(hotels, key)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
