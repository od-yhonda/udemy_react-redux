import React, { Component } from 'react';
// { PropTypes }は 'prop-types' を追加しないと使えない
import { PropTypes } from 'prop-types';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '東京タワー',
    };
  }

  handlePlaceChange(place) {
    this.setState({ place });
  }

  handleSubmit(e) {
    const { onSubmit } = this.props;
    const { place } = this.state;
    e.preventDefault();
    onSubmit(place);
  }

  render() {
    const { place } = this.state;

    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input type="text" value={place} onChange={e => this.handlePlaceChange(e.target.value)} />
        <input type="submit" value="検索" />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;