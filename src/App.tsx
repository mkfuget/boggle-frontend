import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {Module} from './modules/Module'
import SignUp from './user/SignUp'
import {store} from "./store"
import {Provider} from "react-redux"
import { Navbar } from './navbar/Navbar';
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
      <Navbar/>
        <div id = "contentwrapper">
        <Router>
          <Route path = "/signup" component = {SignUp}></Route>
          <Route path = "/modules" component = {Module}></Route>
        </Router>
      </div>
      </div>
    </Provider>
  );
}

export default App;
