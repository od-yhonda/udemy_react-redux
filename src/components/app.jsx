import React, { Component } from 'react';
import axios from 'axios';

// import Greeting from './greeting';
import SearchForm from './SearchForm';
import GeoCodeResult from './GeoCodeResult';
import Map from './Map';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';
const GOOGLE_MAP_API_KEY = '';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setErrorMessage(message) {
    this.setState({
      address: message,
      lat: 0,
      lng: 0,
    });
  }

  handlePlaceSubmit(place) {
    axios.get(GEOCODE_ENDPOINT, { params: { address: place, key: GOOGLE_MAP_API_KEY } })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
        const { data } = response;
        const [result] = data.results;

        switch (data.status) {
          case 'OK': {
            const { location } = result.geometry;

            this.setState({
              address: result.formatted_address,
              lat: location.lat,
              lng: location.lng,
            });
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
    const { address, lat, lng } = this.state;

    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm
          onSubmit={place => this.handlePlaceSubmit(place)}
        />
        <GeoCodeResult
          address={address}
          lat={lat}
          lng={lng}
        />
        <Map lat={lat} lng={lng} />
      </div>
    );
  }
}

export default App;
