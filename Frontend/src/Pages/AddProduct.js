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

  class AddProduct extends React.Component {
    render() {
      return (

        <div style={{justifyContent: "start"}}>
{/* ---------------------------------Navbar---------------------------------------- */}
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
              <li className="nav-item" ><a className="nav-link" href="/"><img style={{width:"20px"}} className='wish' src={wish} alt="WishList" /></a></li>
              
            </ul>
          </nav>

{/* ==============*==============*==============*=============*==============*===============*============= */}
          <center>
          <br />

          <div>
          <h1 className='welcome'>Happy Selling
            <br />
            <h5> We Believe in Quality Service</h5>
          </h1>

          <br />

          <div className='form'>
            <form className="addproductform" action="/addproduct" enctype="multipart/form-data" method="post">
              <div className='row'>
                <div className="col">
                  <input type="text" className="form-control" id="productname" placeholder="Product Name" required/>
                </div>
                <div className="col">
                  <input type="file" className="form-control" id="productimage" placeholder="Product Image" required/>
                </div>
                <div className="col">
                  <input type="number" className="form-control" id="productrating" placeholder="Product Rating" required/>
                </div>
              </div>

              <br />
              <br />
              <div className='row'>
                <div className="col">
                  <input type="text" className="form-control" id="productcolor" placeholder="Product Color" required/>
                </div>
                <div className="col">
                  <input type="number" className="form-control" id="productquantity" placeholder="Product Quantity available to sell" required/>
                </div>
                <div className="col">
                  <input type="number" className="form-control" id="productprice" placeholder="Product Price" required/>
                </div>
              </div>

              <br />
              <br />

              <div className='row'>

                <div className='col'>
                  <h3>CATEGRIES : </h3>
                  <input type="radio" id="Jeans" name="Jeans" value="Jeans" />
                  <label for="Jeans">Jeans</label>
                  <br />
                  <input type="radio" id="T-Shirts" name="T-Shirts" value="T-Shirts" />
                  <label for="T-Shirts">T-Shirts</label>
                  <br />
                  <input type="radio" id="Lowers" name="Lowers" value="Lowers" />
                  <label for="Lowers">Lowers</label>
                  <br />
                  <input type="radio" id="Hoddies" name="Hoddies" value="Hoddies" />
                  <label for="Hoddies">Hoddies</label>
                  <br />
                  <input type="radio" id="Western-Dresses" name="Western-Dresses" value="Western-Dresses" />
                  <label for="Western-Dresses">Western-Dresses</label>
                  <br />
                  <input type="radio" id="Tradional-Dresses" name="Tradional-Dresses" value="Tradional-Dresses" />
                  <label for="Tradional Dresses">Tradional-Dresses</label>
                  <br />
                  <input type="radio" id="Shoes" name="Shoes" value="Shoes" />
                  <label for="Shoes">Shoes</label>
                  <br />
                  <input type="radio" id="Tops" name="Tops" value="Tops" />
                  <label for="Tops">Tops</label>
                  <br />
                  <input type="radio" id="Crop-Tops" name="Crop-Tops" value="Crop-Tops" />
                  <label for="Crop-Tops">Crop-Tops</label>
                  <br />
                  <input type="radio" id="Sandals" name="Sandals" value="Sandals" />
                  <label for="Sandals">Sandals</label>
                  <br />
                  <input type="radio" id="Hand-Bags" name="Hand-Bags" value="Hand-Bags" />
                  <label for="Hand-Bags">Hand-Bags</label>
                  <br />
                  <input type="radio" id="Jwellery" name="Jwellery" value="Jwellery" />
                  <label for="Jwellery">Jwellery</label>
                  <br />
                  <input type="radio" id="Night-Suits" name="Night-Suits" value="Night-Suits" />
                  <label for="Night-Suits">Night-Suits</label>
                </div>

                
                <div className='col'>
                  <h3>SIZE : </h3>
                  <input type="radio" id="S" name="S" value="S" />
                  <label for="S">Small</label>
                  <br />
                  <input type="radio" id="M" name="M" value="M" />
                  <label for="M">Medium</label>
                  <br />
                  <input type="radio" id="L" name="L" value="L" />
                  <label for="L">Large</label>
                  <br />
                  <input type="radio" id="XL" name="XL" value="XL" />
                  <label for="XL">Extra Large</label>
                  <br />
                  <input type="radio" id="XXL" name="XXL" value="XXL" />
                  <label for="XXL">Double Extra Large</label>

                </div>

                
                <div className='col'>
                  <h3>SECTION : </h3>
                  <input type="radio" id="men" name="men" value="men" />
                  <label for="men">Men</label>
                  <br />
                  <input type="radio" id="women" name="women" value="women" />
                  <label for="women">Women</label>
                  <br />
                  <input type="radio" id="kids" name="kids" value="kids" />
                  <label for="kids">Kids</label>
                </div>

              </div>
              
            </form>
          </div>



          <div className="footer"> © 2020 Copyright: Stylisma.com</div>

          </div>
          </center>
        </div>
      );
    }
  }

  export default AddProduct;