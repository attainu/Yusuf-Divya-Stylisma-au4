/*eslint-disable*/

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Cart from './Pages/Cart';
import Kids from './Pages/Kids';
import AdminLogin from './Pages/AdminLogin';
import AddProduct from './Pages/AddProduct';
import Logout from './Pages/Logout';
import axios, { post } from 'axios';
import profile from './photos/profileIcon.png'
import cart from './photos/cartIcon.png'
import logo from './photos/logo.jpg'
import wish from './photos/wishIcon.png'

// import {StatusBar, Platform, View} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
          <a className='navbar-brand' href='/home'>
            
          </a>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
              <img src='https://res.cloudinary.com/yuspat/image/upload/v1586783090/logo_m5kf3b.jpg' alt='logo' style={{ width: '27px' }} />
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/men'>
                Men
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/women'>
                Women
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/kids'>
                Kids
              </a>
            </li>
            <li className="nav-item dropdown" >
              <a className="nav-link dropbtn" href="#">
                <img style={{width:"20px"}} className='profile' src={profile} alt="Profile" />
              </a>
              <span class="dropdown-content">
                <a href="/login">Login</a>
                <a href="/profile">Profile</a>
                <a href="/logout">Logout</a>
              </span>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/cart'>
                <img
                  style={{ width: '20px' }}
                  className='cart'
                  src={cart}
                  alt='Cart'
                />
              </a>
            </li>
            {/* <li className="nav-item" ><a className="nav-link" href="/"><img style={{width:"20px"}} className='wish' src={wish} alt="WishList" /></a></li> */}
          </ul>
        </nav>
        <br />
        <BrowserRouter>
          <Switch>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/signup' component={SignUp}></Route>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/men' component={Men}></Route>
            <Route exact path='/women' component={Women}></Route>
            <Route exact path='/kids' component={Kids}></Route>
            <Route exact path='/adminlogin' component={AdminLogin}></Route>
            <Route exact path='/addproduct' component={AddProduct}></Route>
            <Route exact path='/profile' component={Profile}></Route>
            <Route exact path='/cart' component={Cart}></Route>
            <Route exact path='/logout' component={Logout}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
