import React, { Component } from 'react';
import { connect } from 'react-redux';
// { PropTypes }は 'prop-types' を追加しないと使えない
import { PropTypes } from 'prop-types';

import SearchForm from '../containers/SearchForm';
import GeoCodeResult from './GeoCodeResult';
import Map from './Map';
import HotelsTable from './HotelsTable';
import { startSearch } from '../actions';

class SearchPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(startSearch());
  }

  render() {
    const { geocodeResult, history } = this.props;
    // eslint-disable-next-line no-console
    console.log('geocodeResult', geocodeResult);

    return (
      <div className="search-page">
        <h1 className="app-title">ホテル検索</h1>
        <SearchForm history={history} />
        <div className="result-area">
          <Map location={geocodeResult.location} />
          <div className="result-right">
            <GeoCodeResult
              address={geocodeResult.address}
              location={geocodeResult.location}
            />
            <h2>ホテル検索結果</h2>
            <HotelsTable />
          </div>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.shape({ search: PropTypes.string }).isRequired,
  geocodeResult: PropTypes.shape({
    address: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  geocodeResult: state.geocodeResult,
});

export default connect(mapStateToProps)(SearchPage);
