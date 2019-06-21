import React from 'react';
// { PropTypes }は 'prop-types' を追加しないと使えない
import { PropTypes } from 'prop-types';

const HotelsClickableTh = (
  {
    label,
    sortKey,
    isSelected,
    onSort,
  },
) => (

  <th
    className="hotels-clickable-th"
    onClick={() => onSort(sortKey)}
  >
    {label}
    {isSelected ? '▲' : ''}
  </th>
);

HotelsClickableTh.propTypes = {
  label: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSort: PropTypes.func.isRequired,
};

HotelsClickableTh.defaultProps = {};

export default HotelsClickableTh;
