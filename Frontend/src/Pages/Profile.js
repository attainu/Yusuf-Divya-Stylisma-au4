/*eslint-disable*/

import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../App.css';
import men from '../photos/menCollection.jpg'
import women from '../photos/womenCollection.jpg'
import kids from '../photos/kidsCollection.jpg'
import profile from '../photos/profileIcon.png'
import cart from '../photos/cartIcon.png'
import wish from '../photos/wishIcon.png'

import axios, { post } from 'axios';

  class Profile extends React.Component {
    render() {
      return (

        <div>

          <center>
          <br />
          <br />
          <br />

          <div>
          <h1 className='welcome'>Welcome to Your Profile
            <br />
            <h5> We Believe in Quality Service</h5>
          </h1>
          </div>

          <br />

          <div className='profiledata'>

              <div class="form-group row">
                <label for="staticusername" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-3 pd">
                  <span>fughriufgbh fjvbdhfbg</span>
                </div>
              </div>

              <div class="form-group row">
                <label for="staticuseremail" class="col-sm-2">Username</label>
                <div class="col-sm-3">
                  <span>fughriufgbh fjvbdhfbg</span>
                </div>
              </div>

              <div class="form-group row">
                <label for="staticuseremail" class="col-sm-2">Email</label>
                <div class="col-sm-3">
                  <span>fughriufgbh fjvbdhfbg</span>
                </div>
              </div>

              <div class="form-group row">
                <label for="staticusername" class="col-sm-2">Mobile Number</label>
                <div class="col-sm-3">
                  <span>fughriufgbh fjvbdhfbg</span>
                </div>
              </div>

          </div>

           

            

            
          <div className="footer"> © 2020 Copyright: Stylisma.com</div>
           
          </center>
        </div>
      );
    }
  }

  export default Profile;