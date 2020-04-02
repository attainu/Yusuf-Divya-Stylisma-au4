import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/signup' component={SignUp}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
