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

import axios, { post } from 'axios';

class Kids extends React.Component {
  async componentDidMount() {
    let products = await axios
      .get('http://localhost:5000/getproduct/kids')
      .then((res) => {
        // console.log(res);
        this.props.dispatch({ type: 'products', payload: res.data.data });
      });
  }
  handleItemCountChange(ele, index, event) {
    //console.log('in onchange')
    ele.itemquantity = event.target.value;
    //console.log(ele)
    let currentproducts = this.props.products;
    currentproducts[index] = ele;
    this.props.dispatch({
      type: 'products',
      payload: currentproducts,
    });
  }

  async handleAddToCart(ele) {
    const product = {
      categories: ele.categories,
      id: ele.id,
      productcolor: ele.productcolor,
      productimage: ele.productimage,
      productname: ele.productname,
      productprice: ele.productprice,
      productquantity: ele.productquantity,
      productrating: ele.productquantity,
      section: ele.section,
      size: ele.size,
    };
    const response = await axios.post(
      'http://localhost:5000/currentorders',
      product
    );
    console.log(response.data.message);
  }

  render() {
    console.log(this.props.products.length);
    return (
      <div>
        <center>
          <br />
          <br />

          <div>
            <h1 className='welcome'>
              Welcome to Kid's Collection
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
              {this.props.products
                ? this.props.products.map((ele, index) => {
                    return (
                      <div className='item'>
                        <img
                          src={ele.productimage}
                          className='pimg'
                          alt='itemimage'
                        />
                        <div className='card-body'>
                          <p className='card-text'>
                            Rating : {ele.productrating}
                          </p>
                          <p className='card-text'>Name : {ele.productname}</p>
                          <p className='card-text'>Size : {ele.size}</p>
                          <p className='card-text'>
                            Price : ₹{ele.productprice}
                          </p>
                          <button
                            class='btn btn-primary'
                            onClick={() => this.handleAddToCart(ele)}>
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>

          <div className='footer'> © 2020 Copyright: Stylisma.com</div>
        </center>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state, "in table")
  return {
    products: state.products,
    order: state.order,
    currentItems: state.currentItems,
  };
};

export default connect(mapStateToProps)(Kids);
