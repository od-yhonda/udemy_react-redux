import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
// { PropTypes }は 'prop-types' を追加しないと使えない
import { PropTypes } from 'prop-types';
import queryString from 'query-string';

// import Greeting from './greeting';
import SearchForm from '../containers/SearchForm';
import GeoCodeResult from './GeoCodeResult';
import Map from './Map';
// import HotelsTable from './HotelsTable';

const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey]);

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // place: this.getPlaceParam() || '東京タワー',
      // location: {
      //   lat: 35.6585805,
      //   lng: 139.7454329,
      // },
      sortKey: 'price',
    };
  }

  componentDidMount() {
    // const { store } = this.props;

    // this.unsubscribe = store.subscribe(() => {
    //   this.forceUpdate();
    // });
    // const place = this.getPlaceParam();

    // if (place) {
    //   this.startSearch();
    // }
  }

  componentWillUnmount() {
    // this.unsubscribe();
  }

  getPlaceParam() {
    const { location } = this.props;
    const params = queryString.parse(location.search);
    const { place } = params;

    if (place && place.length > 0) {
      return place;
    }
    return null;
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

  // handlePlaceSubmit(e) {
  //   e.preventDefault();
  //   const { history } = this.props;
  //   const { place } = this.state;
  //   history.push(`/?place=${place}`);

  //   this.startSearch();
  // }

  // handlePlaceChange(e) {
  //   const { onPlaceChange } = this.props;
  //   e.preventDefault();
  //   onPlaceChange(e.target.value);
  //   // this.setState({ place });
  // }

  handleSortKeyChange(hotels, sortKey) {
    this.setState({ sortKey, hotels: sortedHotels(hotels, sortKey) });
  }

  render() {
    // eslint-disable-next-line no-console
    console.log(this.props);
    // eslint-disable-next-line no-console
    console.log(this.state);

    // const {
    //   address,
    //   location,
    //   hotels,
    //   sortKey,
    //   place,
    // } = this.state;

    const { geocodeResult } = this.props;
    // eslint-disable-next-line no-console
    console.log(geocodeResult);

    return (
      <div className="search-page">
        <h1 className="app-title">ホテル検索</h1>
        <SearchForm />
        <div className="result-area">
          <Map location={geocodeResult.location} />
          <div className="result-right">
            <GeoCodeResult
              address={geocodeResult.address}
              location={geocodeResult.location}
            />
            {/* <h2>ホテル検索結果</h2>
            <HotelsTable
              hotels={hotels}
              sortKey={sortKey}
              onSort={key => this.handleSortKeyChange(hotels, key)}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  // history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.shape({ search: PropTypes.string }).isRequired,
  geocodeResult: PropTypes.shape({
    address: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  geocodeResult: state.geocodeResult,
});

// const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps)(SearchPage);
