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

  class Home extends React.Component {
    render() {
      return (

        <div>

          
          <center>
          <br />
          <br />

          <div>
          <h1 className='welcome'>Welcome to Stylisma
            <br />
            <h5> We Believe in Quality Service</h5>
          </h1>
          </div>

          <br />

          <div className='services'>

            <div className='childservice'>Easy Return</div>
            <div className='childservice'>Easy Replace</div>
            <div className='childservice'>Cash On Delivery</div>

          </div>


          <br />
          <br />


          <div className='tomen'><a href="/men"><img src={men} alt="men" /></a> </div>

          <br />
          <br />
          <br />
          <br />

          <div className='towomen'><a href="/women"><img src={women} alt="women" /></a> </div>
          <br />
          <br />
          <br />
          <br />

          <div className='tokids'><a href="/kids"><img src={kids} alt="kids" /></a> </div>

          <br />
          <br />
          <br />
          <br />
          <div className="footer"> © 2020 Copyright: Stylisma.com</div>

          </center>
          </div>

      );
    }
  }

  export default Home;