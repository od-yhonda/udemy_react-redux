import React from 'react';
// { PropTypes }は 'prop-types' を追加しないと使えない
import { PropTypes } from 'prop-types';

// const SearchForm = ({ place, onSubmit, onPlaceChange }) => (
//   <form className="search-form" onSubmit={() => onSubmit()}>
//     <input
//       className="place-input"
//       type="text"
//       size="30"
//       value={place}
//       onChange={e => onPlaceChange(e.target.value)}
//     />
//     <input className="submit-button" type="submit" value="検索" />
//   </form>
// );

const SearchForm = (props) => {
  const { place, onSubmit, onPlaceChange } = props;

  return (
    <form className="search-form" onSubmit={e => onSubmit(e)}>
      <input
        className="place-input"
        type="text"
        size="30"
        value={place}
        onChange={e => onPlaceChange(e)}
      />
      <input className="submit-button" type="submit" value="検索" />
    </form>
  );
};

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
