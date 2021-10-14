import React from 'react';
import './App.css';
import './cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {Module} from './modules/Module'
import SignUp from './user/SignUp'
import {store} from "./store"
import {Provider} from "react-redux"
import { Navbar } from './navbar/Navbar';
import {ModulesList} from './modules/ModulesList';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'
import {withAuthenticator } from '@aws-amplify/ui-react'
import { LessonsList } from './lessons/LessonsList';
import Lesson from './lessons/Lesson';
import { LessonParser } from './lessons/LessonParser';

Amplify.configure(awsconfig);

function App() {
  return (
    <Provider store = {store}>

      <div className="App">
          <Navbar/>
            <div id = "contentwrapper">
            <Router>
              <Switch>
                <Route exact path = "/" component = {ModulesList}></Route>
                <Route path = "/signup" component = {SignUp}></Route>
                <Route exact path = "/modules" component = {ModulesList}></Route>
                <Route path = "/modules/:moduleName" component = {Module}></Route>
                <Route exact path = "/lessons" component = {LessonsList}></Route>
                <Route path = "/lessons/:lessonName" component = {Lesson}></Route>
                <Route path = "/lessonparser" component = {LessonParser}></Route>

              </Switch>
            </Router>
          </div>
        </div>

    </Provider>
  );
}

export default App;
