import React, { Component } from 'react';

// import Greeting from './greeting';
import SearchForm from './SearchForm';
import GeoCodeResult from './GeoCodeResult';

class App extends Component {
  // static handlePlaceSubmit(place) {
  //   console.log(place);
  // }

  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePlaceSubmit(place) {
    console.log(place);
  }

  render() {
    const { state } = this.state;

    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm
          onSubmit={place => this.handlePlaceSubmit(place)}
        />
        <GeoCodeResult
          address={{ state }.address}
          lat={{ state }.lat}
          lng={{ state }.lng}
        />
      </div>
    );
  }
}

export default App;
