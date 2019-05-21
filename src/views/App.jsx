import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import '../App.scss';
import Routes from "../routes";
import store from "../redux/store";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
