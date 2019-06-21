// import geolib from 'geolib'; だと「geolib」で読み込んでくれない。
// import { getDistance } from 'geolib'; か 「geolib」で使いたいなら下記のimport
// 詳しくはhttps://github.com/manuelbieh/geolib
import * as geolib from 'geolib';

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
      const {
        hotelNo,
        hotelName,
        hotelInformationUrl,
        hotelThumbnailUrl,
        hotelMinCharge,
        reviewAverage,
        reviewCount,
        latitude,
        longitude,
      } = info.hotel[0].hotelBasicInfo;

      const distance = geolib.getDistance(
        { latitude: location.lat, longitude: location.lng },
        { latitude, longitude },
      );

      return {
        id: hotelNo,
        name: hotelName,
        url: hotelInformationUrl,
        thumbUrl: hotelThumbnailUrl,
        price: hotelMinCharge,
        reviewAverage,
        reviewCount,
        distance,
      };
    }));
};
