import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {Module} from './modules/Module'
import SignUp from './user/SignUp'
import {store} from "./store"
import {Provider} from "react-redux"
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
      <Router>
        <Route path = "/signup" component = {SignUp}></Route>
        <Route path = "/module" component = {Module}></Route>
      </Router>
      </div>
    </Provider>
  );
}

export default App;
