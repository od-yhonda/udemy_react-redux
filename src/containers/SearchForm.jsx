import React from 'react';
import { connect } from 'react-redux';
// { PropTypes }は 'prop-types' を追加しないと使えない
import { PropTypes } from 'prop-types';

const mapStateToProps = state => ({
  place: state.place,
});

const mapDispatchToProps = dispatch => ({
  onPlaceChange: place => dispatch({ type: 'CHANGE_PLACE', place }),
});

const SearchForm = (props) => {
  const { place, onSubmit, onPlaceChange } = props;

  return (
    <form className="search-form" onSubmit={e => onSubmit(e)}>
      <input
        className="place-input"
        type="text"
        size="30"
        value={place}
        onChange={(e) => {
          e.preventDefault();
          onPlaceChange(e.target.value);
        }
      }
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

// export default SearchForm;

const ConnectedSearchForm = connect(mapStateToProps, mapDispatchToProps)(SearchForm);

export default ConnectedSearchForm;
