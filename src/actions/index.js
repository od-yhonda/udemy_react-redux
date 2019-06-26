import { geocode } from '../domain/Geocoder';
// import { searchHotelByLocation } from '../domain/HotelRepository';

export const setPlace = place => (dispatch) => {
  dispatch({ type: 'CHANGE_PLACE', place });
};

export const startSearch = () => (dispatch, getState) => {
  geocode(getState().place)
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
      return [];
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
};
