import React from 'react';
// { PropTypes }は 'prop-types' を追加しないと使えない
import { PropTypes } from 'prop-types';

const HotelRow = ({ hotel }) => (
  <tr>
    <td><img src={hotel.thumbUrl} alt={hotel.name} /></td>
    <td>
      <a target="_blank" rel="noopener noreferrer" href={hotel.url}>
        {hotel.name}
      </a>
    </td>
    <td>{hotel.price}</td>
    <td>{hotel.reviewAverage}</td>
    <td>{hotel.reviewCount}</td>
    <td>{hotel.distance}</td>
  </tr>
);

HotelRow.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    thumbUrl: PropTypes.string,
    price: PropTypes.string,
    reviewAverage: PropTypes.number,
    reviewCount: PropTypes.number,
    distance: PropTypes.number,
  }).isRequired,
};

export default HotelRow;
