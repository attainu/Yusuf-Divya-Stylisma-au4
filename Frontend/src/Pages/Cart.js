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

  class Cart extends React.Component {
    render() {
      return (

        <div>

          <center>
          <br />
          <br />
          <br />

          <div>
          <h1 className='welcome'>Welcome to Your Cart
            <br />
            <h5> We Believe in Quality Service</h5>
          </h1>
          </div>

          <br />

          <div className='cartdata'>
          </div>

           

            

            
          <div className="footer"> © 2020 Copyright: Stylisma.com</div>
           
          </center>
        </div>
      );
    }
  }

  export default Cart;