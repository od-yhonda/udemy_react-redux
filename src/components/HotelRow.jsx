import React from 'react';
// { PropTypes }は 'prop-types' を追加しないと使えない
import { PropTypes } from 'prop-types';

const HotelRow = ({ hotel }) => (
  <tr>
    <td>
      <a target="_blank" rel="noopener noreferrer" href={hotel.url}>
        {hotel.name}
      </a>
    </td>
  </tr>
);

HotelRow.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default HotelRow;
