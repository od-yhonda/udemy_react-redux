import React from 'react';
import { connect } from 'react-redux';
// { PropTypes }は 'prop-types' を追加しないと使えない
import { PropTypes } from 'prop-types';

import { geocode } from '../domain/Geocoder';
// import { searchHotelByLocation } from '../domain/HotelRepository';

const SearchForm = (props) => {
  const { place, onSubmit, onPlaceChange } = props;

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(place);
      }}
    >
      <input
        className="place-input"
        type="text"
        size="30"
        value={place}
        onChange={(e) => {
          e.preventDefault();
          onPlaceChange(e.target.value);
        }
      }
      />
      <input className="submit-button" type="submit" value="検索" />
    </form>
  );
};

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  place: state.place,
});

const mapDispatchToProps = dispatch => ({
  onPlaceChange: place => dispatch({ type: 'CHANGE_PLACE', place }),
  onSubmit: (place) => {
    geocode(place)
      .then(({ status, address, location }) => {
        switch (status) {
          case 'OK': {
            dispatch({ type: 'GEOCODE_FETCHED', address, location });
            // this.setState({ address, location });
            // return searchHotelByLocation(location);
            break;
          }
          case 'ZERO_RESULTS': {
            // this.setErrorMessage('結果が見つかりませんでした。');
            break;
          }
          default: {
            // this.setErrorMessage('エラーが発生しました。');
          }
        }
        // return [];
      });
      // .then((hotels) => {
      //   const { sortKey } = this.state;
      //   this.setState({ hotels: sortedHotels(hotels, sortKey) });
      // })
      // .catch((reason) => {
      //   // eslint-disable-next-line no-console
      //   console.log(reason);
      //   this.setErrorMessage('通信に失敗しました。');
      // });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
