import React from 'react';
import { connect } from 'react-redux';
// { PropTypes }は 'prop-types' を追加しないと使えない
import { PropTypes } from 'prop-types';

import { setSortKey } from '../actions';

const HotelsClickableTh = (props) => {
  const { label, sortKey, isSelected } = props;

  return (
    <th
      className="hotels-clickable-th"
      onClick={() => props.setSortKey(sortKey)}
    >
      {label}
      {isSelected ? '▲' : ''}
    </th>
  );
};

HotelsClickableTh.propTypes = {
  label: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  setSortKey: PropTypes.func.isRequired,
};

HotelsClickableTh.defaultProps = {};

export default connect(
  (state, ownProps) => ({
    isSelected: ownProps.sortKey === state.sortKey,
  }),
  { setSortKey },
)(HotelsClickableTh);
