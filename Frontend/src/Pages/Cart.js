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

    handleRemoveFromCart = (index) => {
      let currentOrders = this.props.order;
      currentOrders.splice(index, 1)
      this.props.dispatch({ type: "add_to_cart", payload: currentOrders })
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

      let orderedItem = this.props.order.map(x => x.id + ':' + x.item_qty).join(',')
      // console.log('totalAmount', totalAmount)
      let bill = {
          items_ordered: orderedItem,
          total_price: totalAmount
      }

      axios.post("/order/create", { bill: bill })
          .then(res => {
              console.log(res)
              alert("Your bill is generated Successfully")
              this.props.dispatch({
                  type: "clear"
              })
          }
          )
  }

    render() {
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
                {/* <h3 style={{ "color": "blue", "margin-left": "20px" }}>Cart</h3> */}
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
                                    { totalAmount = totalAmount + (ele.item_price * ele.item_qty) }

                                    return (
                                        <tr key={index}>
                                            <td>{ele.item_name}</td>
                                            <td>{ele.item_price}</td>
                                            <td>{ele.item_price}</td>
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