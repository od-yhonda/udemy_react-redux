import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import SearchPage from './components/SearchPage';
import reducer from './reducers';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <SearchPage
      // eslint-disable-next-line no-restricted-globals
      history={history}
      // eslint-disable-next-line no-restricted-globals
      location={location}
    />
  </Provider>,
  document.querySelector('.container'),
);
