import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// import App from './components/App';

// ReactDOM.render(<App />, document.querySelector('.container'));

import SearchPage from './components/SearchPage';
import reducer from './reducers';

const store = createStore(reducer);

const render = () => {
  const state = store.getState();
  // eslint-disable-next-line no-console
  console.log(state);

  ReactDOM.render(
    <SearchPage
      // eslint-disable-next-line no-restricted-globals
      history={history}
      // eslint-disable-next-line no-restricted-globals
      location={location}
      place={state.place}
      onPlaceChange={place => store.dispatch({ type: 'CHANGE_PLACE', place })}
    />,
    document.querySelector('.container'),
  );
};

render();
store.subscribe(render);
