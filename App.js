import React from 'react';
import Container from './components/Container';
import reducer from './redux/reducers';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

const App = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
