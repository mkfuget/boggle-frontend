import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Switch, Link} from 'react-router-dom'
import {Module} from './modules/Module'
import {SignUp} from './User/SignUp'
import {store} from "./store"
import {Provider} from "react-redux"
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
          <Switch>
            <Route path = "/signup">
              <SignUp/>
            </Route>
            <Route path = "/module">
              <Module/>
            </Route>

          </Switch>
      </div>
    </Provider>
  );
}

export default App;
