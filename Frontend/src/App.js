/*eslint-disable*/

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from './Pages/Kids';
import AdminLogin from './Pages/AdminLogin';
// import {StatusBar, Platform, View} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/signup' component={SignUp}></Route>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/men' component={Men}></Route>
            <Route exact path='/women' component={Women}></Route>
            <Route exact path='/kids' component={Kids}></Route>
            <Route exact path='/adminlogin' component={AdminLogin}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
