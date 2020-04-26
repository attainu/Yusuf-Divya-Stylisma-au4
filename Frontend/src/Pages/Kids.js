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


  class Kids extends React.Component {
    render() {
      return (

        <div>

          <center>
          <br />
          <br />

            <div>
            <h1 className='welcome'>Welcome to Kid's Collection
              <br />
              <h5 className='welcome'> We Believe in Quality Service</h5>
              </h1>
            </div>
            
            <br />

           

            <div className='products'>

              {/* <div className='categories'>
                <h4>Boy's Categories</h4>
                <p>
                  <ol>
                    <li className='otherli'><a href='/women/jeans'>Jeans</a></li>
                    <li className='otherli'><a href='/women/jeans'>T-Shirts</a></li>
                    <li className='otherli'><a href='/women/jeans'>Night-Suits</a></li>
                    <li className='otherli'><a href='/women/jeans'>Shoes</a></li>
                    <li className='otherli'><a href='/women/jeans'>Western-Dresses</a></li>
                    <li className='otherli'><a href='/women/jeans'>Traditional-Dresses</a></li>
                  </ol>
                </p>
                <h4>Girl's Categories</h4>
                <p>
                  <ol>
                    <li className='otherli'><a href='/women/jeans'>Jeans</a></li>
                    <li className='otherli'><a href='/women/jeans'>Tops</a></li>
                    <li className='otherli'><a href='/women/jeans'>Night-Suits</a></li>
                    <li className='otherli'><a href='/women/jeans'>Shoes</a></li>
                    <li className='otherli'><a href='/women/jeans'>Western-Dresses</a></li>
                    <li className='otherli'><a href='/women/jeans'>Traditional-Dresses</a></li>
                  </ol>
                </p>
                <h4>Filters</h4>
                <p>
                  <ol>
                    <li className='otherli'><a href='/women/jeans'>Featured</a></li>
                    <li className='otherli'><a href='/women/jeans'>New</a></li>
                    <li className='otherli'><a href='/women/jeans'>High to Low Rating</a></li>
                  </ol>
                </p>
                <h4>Sort</h4>
                <p>
                  <ol>
                    <li className='otherli'><a href='/women/jeans'>High to Low Price</a></li>
                    <li className='otherli'><a href='/women/jeans'>Low to High Price</a></li>
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

  export default Kids;