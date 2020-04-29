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

    async componentDidMount() {
      let products = await axios.get('http://localhost:5000/getproduct/kids')
      .then(res => {
        // console.log(res);
        this.props.dispatch({ type: "products" , payload: res.data.data })
      })
   }
  handleItemCountChange(ele, index, event) {
    //console.log('in onchange')
    ele.itemquantity = event.target.value
    //console.log(ele)
    let currentproducts = this.props.products
    currentproducts[index] = ele;
    this.props.dispatch({
        type: "products", payload: currentproducts
    })

}

   handleAddToCart(item, index) {

    let currentOrder = this.props.order
    let order = currentOrder.find(order => order.id === item.id)

    if (order) {
        let itemIndex = currentOrder.indexOf(order)
        currentOrder[itemIndex] = item
    } else {
        currentOrder.push(item)
    }
    this.props.dispatch({ type: "add_to_cart", payload: currentOrder })

   }
    
    render() {
      console.log(this.props.products.length);
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
              {
                this.props.products? this.props.products.map((ele, index) => {

                  return (

              <div className='item'>
                  <img src={ele.productimage} className='pimg' alt='itemimage' />
                  <div className='card-body'>
                  <p className='card-text'>Rating : {ele.productrating}</p>
                  <p className='card-text'>Name : {ele.productname}</p>
                  <p className='card-text'>Size : {ele.size}</p>
                  <p className='card-text'>Price : ₹{ele.productprice}</p>
                  <p className='card-text'>Quanity : <input className='qn' type="number" min="0" onChange={(event) => this.handleItemCountChange(ele, index, event)}></input></p>
                  
                  <button class="btn btn-primary" onClick={() => this.handleAddToCart(ele, index)} disabled={ele.productquantity <= ele.itemquantity === 0}>Add To Cart</button>
                  </div>
                </div>

)
}) : null
}
                

              </div>

            </div>

            
          <div className="footer"> © 2020 Copyright: Stylisma.com</div>
           
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
        currentItems: state.currentItems
    }
}

export default connect (mapStateToProps) (Kids);