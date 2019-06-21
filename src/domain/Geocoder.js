import axios from 'axios';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';
const GOOGLE_MAP_API_KEY = '';

export const geocode = place => axios
  .get(GEOCODE_ENDPOINT, { params: { address: place, key: GOOGLE_MAP_API_KEY } })
  .then((response) => {
    const { data } = response;
    const { status } = data;
    const [result] = data.results;

    if (typeof result === 'undefined') {
      return status;
    }

    const address = result.formatted_address;
    const { location } = result.geometry;

    return { status, address, location };
  });

export const reverseGeocode = () => null;
