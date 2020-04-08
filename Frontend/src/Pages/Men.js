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
  class Men extends React.Component {
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
          <h1 className='welcome'>Welcome to Men's Collection
            <br />
            <h5> We Believe in Quality Service</h5>
          </h1>
          </div>
           
          <br />

            <div className='products'>

              {/* <div className='categories'>
                <h4>Categories</h4>
                <p>
                  <ol>
                    <li className='otherli'><a href='/men/jeans'>Jeans</a></li>
                    <li className='otherli'><a href='/men/jeans'>T-Shirts</a></li>
                    <li className='otherli'><a href='/men/jeans'>Lowers</a></li>
                    <li className='otherli'><a href='/men/jeans'>Hoodies</a></li>
                    <li className='otherli'><a href='/women/jeans'>Western-Dresses</a></li>
                    <li className='otherli'><a href='/women/jeans'>Traditional-Dresses</a></li>
                    <li className='otherli'><a href='/men/jeans'>Shoes</a></li>
                  </ol>
                </p>
                <h4>Filters</h4>
                <p>
                  <ol>
                    <li className='otherli'><a href='/men/jeans'>Featured</a></li>
                    <li className='otherli'><a href='/men/jeans'>New</a></li>
                    <li className='otherli'><a href='/men/jeans'>Size <a href='/men/size/s' className='size'>S</a><a href='/men/size/m' className='size'>M</a> <a href='/men/size/l' className='size'>L</a> <a href='/men/size/xl' className='size'>XL</a> <a href='/men/size/xxl' className='size'>XXL</a></a></li>
                    <li className='otherli'><a href='/men/jeans'>High to Low Rating</a></li>
                  </ol>
                </p>
                <h4>Sort</h4>
                <p>
                  <ol>
                    <li className='otherli'><a href='/men/jeans'>High to Low Price</a></li>
                    <li className='otherli'><a href='/men/jeans'>Low to High Price</a></li>
                  </ol>
                </p>
                
              </div> */}
              <div className='items'>
                

              <div className='item'>
                  <img src="" alt='itemimage' />
                  <div className='card-body'>
                  <p className='card-text'>Product Rating</p>
                  <p className='card-text'>Product Name</p>
                  <p className='card-text'>Product Size</p>
                  <p className='card-text'>Product Price</p>
                  <a href="#" class="btn btn-primary">Add To Cart</a>
                  </div>
                </div>

              </div>

            </div>

            
          <div className="footer"> © 2020 Copyright: Stylisma.com</div>
           
          </center>
        </div>
      );
    }
  }

  export default Men;