import React, { Component } from 'react';

// import Greeting from './greeting';
import SearchForm from './SearchForm';

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
    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
      </div>
    );
  }
}

export default App;
