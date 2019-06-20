import React from 'react';
// { PropTypes }は 'prop-types' を追加しないと使えない
import { PropTypes } from 'prop-types';

const GeoCodeResult = ({ address, location }) => (
  <ul className="geoCode-result">
    <li>
        住所：
      {address}
    </li>
    <li>
        緯度：
      {location.lat}
    </li>
    <li>
        経度：
      {location.lng}
    </li>
  </ul>
);

GeoCodeResult.propTypes = {
  address: PropTypes.string,
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};

GeoCodeResult.defaultProps = {
  address: '',
};

export default GeoCodeResult;
