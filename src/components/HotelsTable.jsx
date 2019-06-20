import React from 'react';
// { PropTypes }は 'prop-types' を追加しないと使えない
import { PropTypes } from 'prop-types';

import HotelRow from './HotelRow';

const HotelsTable = ({ hotels }) => (
  <table>
    <tbody>
      <tr><th>ホテル名</th></tr>
      {hotels.map(hotel => (<HotelRow key={hotel.id} hotel={hotel} />))}
    </tbody>
  </table>
);

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
};

HotelsTable.defaultProps = {
  hotels: [],
};

export default HotelsTable;
