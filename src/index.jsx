import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import App from './components/App';

// ReactDOM.render(<App />, document.querySelector('.container'));

import SearchPage from './components/SearchPage';
import reducer from './reducers';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
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
