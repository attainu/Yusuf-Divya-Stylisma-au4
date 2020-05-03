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
// import profileuser from '../photos/profileIcon.png';

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

          
{/* <div className="card pro">
  <img src={profile} alt="user" style={{width:"100%"}} />
  <h1>Name : {name}</h1>
  <p class="title">Username : {username}</p>
  <p>Email : {email}</p>  
  <p>Mobile : {mobile}</p>
  <br />
  <br />
  <br />
</div> */}

<div class="card mb-3 yoo" style={{maxWidth: "50%"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={profile} style={{padding: "10%"}} class="card-img" alt="..." />
    </div>
    <div class="col-md-8  boo">
      <div class="card-body">
        {/* <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        <h1>Username : {username}</h1>
  <p class="title">Name : {name}</p>
  <p>Email : {email}</p>  
  <p>Mobile : {mobile}</p>
      </div>
    </div>
  </div>
</div>
<br />
<br />
<div className='orderrr'>
<div class="card border-dark mb-3" style={{maxWidth: "18rem" , marginRight: 
"5%"}}>
  <div class="card-header">Order Placed</div>
  <div class="card-body text-primary">
    {/* <h5 class="card-title">Primary card title</h5> */}
    <p class="card-text">item names and quatity</p>
    <p class="card-text">total amount</p>
  </div>
</div>


</div>

<br />
<br />


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
