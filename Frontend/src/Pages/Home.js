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

          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="navbar-brand" href="/home">
            <img src="bird.jpg" alt="logo" style={{width:"20px"}} />
          </a>
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="/">Logo</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/men">Men</a></li>
              <li className="nav-item"><a className="nav-link" href="/women">Women</a></li>
              <li className="nav-item"><a className="nav-link" href="/kids">Kids</a></li>
              <li className="nav-item" ><a className="nav-link" href="/"><img style={{width:"20px"}} className='profile' src={profile} alt="Profile" /></a></li>
              <li className="nav-item" ><a className="nav-link" href="/"><img  style={{width:"20px"}} className='cart' src={cart} alt="Cart" /></a></li>
              {/* <li className="nav-item" ><a className="nav-link" href="/"><img style={{width:"20px"}} className='wish' src={wish} alt="WishList" /></a></li> */}
              
            </ul>
          </nav>
          <center>
          <br />

          <div>
          <h1 className='welcome'>Welcome to Stylisma</h1>
            <br />
            <h5> We Believe in Quality Service</h5>

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
          </div>

          </center>
        </div>
      );
    }
  }

  export default Home;