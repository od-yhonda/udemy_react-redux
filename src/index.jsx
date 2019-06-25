import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// import App from './components/App';

// ReactDOM.render(<App />, document.querySelector('.container'));

import SearchPage from './components/SearchPage';
import reducer from './reducers';

ReactDOM.render(
  <SearchPage
    // eslint-disable-next-line no-restricted-globals
    history={history}
    // eslint-disable-next-line no-restricted-globals
    location={location}
    store={createStore(reducer)}
  />,
  document.querySelector('.container'),
);
