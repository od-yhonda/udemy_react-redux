import React from 'react';
// { PropTypes }は 'prop-types' を追加しないと使えない
import { PropTypes } from 'prop-types';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const InnerMap = withGoogleMap(({ location, marker }) => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={location}
    center={location}
  >
    <Marker {...marker} />
  </GoogleMap>
));

const Map = ({ location }) => (
  <InnerMap
    containerElement={(<div className="map-container" />)}
    mapElement={(<div className="map" />)}
    location={{ location }}
    marker={{ position: location }}
  />
);

Map.propTypes = {
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Map;
