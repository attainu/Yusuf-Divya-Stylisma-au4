/*eslint-disable*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../App.css';
import men from '../photos/menCollection.jpg';
import women from '../photos/womenCollection.jpg';
import kids from '../photos/kidsCollection.jpg';
import profile from '../photos/profileIcon.png';
import cart from '../photos/cartIcon.png';
import wish from '../photos/wishIcon.png';
import profileuser from '../photos/profileuser.png';

import axios, { post } from 'axios';
import { Redirect } from 'react-router-dom';

class Profile extends React.Component {
  state = {
    name: '',
    username: '',
    email: '',
    mobile: '',
  };
  render() {
    var user = JSON.parse(localStorage.getItem('user'));
    if(user ==null || undefined) {
      return <Redirect to ="/login"/>
    }
    const {name,username, email, mobile} = user;
    console.log(name);
    return (
      <div>
        <center>
          <br />
          <br />
          <br />

          <div>
            <h1 className='welcome'>
              Welcome to Your Profile
              <br />
              <h5> We Believe in Quality Service</h5>
            </h1>
          </div>

          <br />

          
<div class="card">
  <img src={profileuser} alt="user" style={{width:"100%"}} />
  <h1>Name : {name}</h1>
  <p class="title">Username : {username}</p>
  <p>Email : {email}</p>  
  <p>Mobile : {mobile}</p>
  <br />
</div>

          <div className='footer'> © 2020 Copyright: Stylisma.com</div>
        </center>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  console.log(state.user);
  return { user: state.user };
};

export default connect(mapStatetoProps)(Profile);
