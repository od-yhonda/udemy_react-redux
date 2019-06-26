import { combineReducers } from 'redux';

const place = (state = '東京タワー', action) => {
  switch (action.type) {
    case 'CHANGE_PLACE':
      return action.place;

    default:
      return state;
  }
};

const geocodeResult = (
  state = {
    address: '',
    location: { lat: 35.6585805, lng: 139.7454329 },
  },
  action,
) => {
  // eslint-disable-next-line no-console
  console.log('action', action);

  switch (action.type) {
    case 'GEOCODE_FETCHED':
      return {
        address: action.address,
        location: action.location,
      };

    default:
      return state;
  }
};

export default combineReducers({ place, geocodeResult });
