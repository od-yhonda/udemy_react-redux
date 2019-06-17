import React from 'react';
// { PropTypes }は 'prop-types' を追加しないと使えない
import { PropTypes } from 'prop-types';

const GeoCodeResult = ({ address, lat, lng }) => (
  <ul className="geoCode-result">
    <li>
        住所：
      {address}
    </li>
    <li>
        緯度：
      {lat}
    </li>
    <li>
        経度：
      {lng}
    </li>
  </ul>
);

GeoCodeResult.propTypes = {
  address: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

GeoCodeResult.defaultProps = {
  address: '',
  lat: 0,
  lng: 0,
};

export default GeoCodeResult;
