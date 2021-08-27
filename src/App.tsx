import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Switch, Link, Fragment} from 'react-router-dom'
import {Module} from './modules/Module'
import {store} from "./store"
import {Provider} from "react-redux"
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
          <Module/>
      </div>
    </Provider>
  );
}

export default App;
