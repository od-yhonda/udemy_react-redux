import Rakuten from '../lib/Rakuten';

const RAKUTEN_APP_ID = '';

// eslint-disable-next-line import/prefer-default-export
export const searchHotelByLocation = (location) => {
  const params = {
    applicationId: RAKUTEN_APP_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng,
  };
  return Rakuten.Travel.simpleHotelSearch(params)
    .then(response => response.data.hotels.map((info) => {
      const { hotelNo, hotelName, hotelInformationUrl } = info.hotel[0].hotelBasicInfo;
      return {
        id: hotelNo,
        name: hotelName,
        url: hotelInformationUrl,
      };
    }));
};
