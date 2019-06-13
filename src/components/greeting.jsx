import React from 'react';
// { PropTypes }は 'prop-types' を追加しないと使えない
import { PropTypes } from 'prop-types';

function Greeting(props) {
  const { name } = props;

  return (
    <div>
    Hi
      {name}
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
