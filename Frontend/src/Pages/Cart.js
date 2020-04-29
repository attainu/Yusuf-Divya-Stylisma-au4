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

import Order from './Men'

  class Cart extends React.Component {

  //   async componentDidMount() {
  //     let orders = await axios.get('http://localhost:5000/order/all')
  //     .then(res => {
  //       // console.log(res);
  //       this.props.dispatch({ type: "add_to_cart", payload: currentOrder })
  //     })
  //  }
  
  state = {
    currentItems: []
}

componentDidUpdate() {
    console.log('in update')
    if (this.state.currentItems != this.props.order) {
        this.setState({ currentItems: this.props.order })
    }

}

    handleRemoveFromCart = (index) => {
      let currentOrder = this.props.order;
      currentOrder.splice(index, 1)
      this.props.dispatch({ type: "add_to_cart", payload: currentOrder })
  }

  validateDetails = (totalAmount) => {
      if ( totalAmount > 0) {
          return true
      }
      else {
          return false
      }

  }
  handleGenerateBill = (totalAmount) => {

      let orderedItem = this.props.order.map(x => x.id + ':' + x.itemquantity).join(',')
      // console.log('totalAmount', totalAmount)
      let bill = {
          items_ordered: orderedItem,
          total_price: totalAmount
      }

      axios.post("http://localhost:5000/bill/create", { bill: bill })
          .then(res => {
              console.log(res)
              alert("Your items are checked out")
              this.props.dispatch({
                  type: "clear"
              })
          }
          )
  }

    render() {
      
 console.log('this.props.order >>>>>>> ' , this.props.order)
      let totalAmount = 0
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
          <div className="bill">
                <div className="cart">
                    <table>
                        <thead>
                            <th> Item</th>
                            <th> Price</th>
                            <th> Qty</th>
                            <th> Remove from cart</th>
                        </thead>
                        <tbody>

                            {
                                this.props.order ? this.props.order.map((ele, index) => {
                                    { totalAmount = totalAmount + (ele.productprice * ele.itemquantity) }

                                    return (
                                        <tr key={index}>
                                            <td>{ele.productname}</td>
                                            <td>{ele.productprice}</td>
                                            <td>{ele.itemquantity}</td>
                                            <td><button className="btn btn-danger" onClick={() => this.handleRemoveFromCart(index)}>Remove from Cart</button></td>
                                        </tr>
                                    )
                                }) : null

                            }
                        </tbody>
                    </table>
                </div>
                <h5 style={{ "margin-left": "20px", "margin-top": "20px" }}>  Total Amount : ₹{totalAmount}</h5>
                <button style={{ "margin-left": "20px" }} className="btn btn-success" onClick={() => this.handleGenerateBill(totalAmount)} disabled={!this.validateDetails(totalAmount)}>Checkout</button>

            </div >
          </div>

           

            

            
          <div className="footer"> © 2020 Copyright: Stylisma.com</div>
           
          </center>
        </div>
      );
    }
  }

  
const mapStateToProps = (state) => {
  // console.log("state in cart", state.order)
  return {
      order: state.order,
  }
}

  export default connect(mapStateToProps)(Cart);