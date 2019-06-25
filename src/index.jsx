import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import App from './components/App';

// ReactDOM.render(<App />, document.querySelector('.container'));

import SearchPage from './components/SearchPage';
import reducer from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <SearchPage
      // eslint-disable-next-line no-restricted-globals
      history={history}
      // eslint-disable-next-line no-restricted-globals
      location={location}
      store={createStore(reducer)}
    />
  </Provider>,
  document.querySelector('.container'),
);
