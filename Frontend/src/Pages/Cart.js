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
import { Link, Redirect } from 'react-router-dom';

import Order from './Men';

class Cart extends React.Component {
  state = {
    currentItems: '',
    product: [],
    maxquantity: '',
  };

  async componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      console.log('yusuf');
      const response = await axios.get('http://localhost:5000/currentorders', {
        params: {
          user: user.id,
        },
      });

      const prod = this.state.product.concat(response.data.products);
      this.setState({
        product: prod,
      });
      console.log(this.state.product);

      return;
    }
  }

  // componentDidUpdate() {
  //     console.log('in update')
  //     if (this.state.currentItems != this.props.order) {
  //         this.setState({ currentItems: this.props.order })
  //     }

  // }

  handlePaymentModeChange = (event) => {
    this.props.dispatch({ type: 'payment', payload: event.target.value });
  };

  handleRemoveFromCart = async (id) => {
    // let currentOrder = this.props.order;
    // currentOrder.splice(index, 1);
    // this.props.dispatch({ type: 'add_to_cart', payload: currentOrder });
    const data = { id: id };
    const response = await axios.put(
      'http://localhost:5000/currentorders/:id',
      data
    );
    console.log(response.data.message);
    window.location.reload();
  };

  handlequantity = (quan, quanid) => {
    const products = [];
    this.state.product.map((prod) => {
      console.log(prod.id);
      if (quanid == prod.id) {
        prod.itemquantity = quan;
      }
      products.push(prod);
    });
    this.setState({
      prod: products,
    });
  };

  validateDetails = (totalAmount) => {
    if (totalAmount > 0) {
      return true;
    } else {
      return false;
    }
  };
  handleGenerateBill = async (totalAmount) => {
    let orderedItem = this.props.order
      .map(
        (x) =>
          'Item Name = ' +
          x.productname +
          ' : Item Quantity = ' +
          x.itemquantity
      )
      .join(',');
    console.log(orderedItem);

    // console.log('totalAmount', totalAmount)
    let bill = {
      items_ordered: orderedItem,
      total_price: totalAmount,
      payment_mode: this.props.paymentmode,
    };
    console.log(bill);

    // this.props.dispatch({
    //   type: 'createbill',
    //   payload: bill,
    // });
    const response = await axios.post('http://localhost:5000/bill', bill);
    console.log(response.data);

    // alert('Your items are checked out');
    this.props.dispatch({
      type: 'clear',
    });

    // axios.post("http://localhost:5000/", { bill: bill })
    //     .then(res => {
    //         console.log(res)
    //         alert("Your items are checked out")
    //         this.props.dispatch({
    //             type: "clear"
    //         })
    //     }
    //     )
  };

  render() {
    const user = localStorage.getItem("user")
    if (!user) {
      alert ("Please login first")
      return <Redirect to='/login' />;
    }
    console.log('payment>>>> ', this.props.paymentmode);
    // console.log(`Products >>> ${this.state.product}`);
    // console.log('this.props.order >>>>>>> ', this.props.order);
    // console.log('this.props.payment >>>>>>> ', this.props.paymentmode);
    let totalAmount = 0;
    return (
      <div>
        <center>
          <br />
          <br />
          <br />

          <div>
            <h1 className='welcome'>
              Welcome to Your Cart
              <br />
              <h5> We Believe in Quality Service</h5>
            </h1>
          </div>

          <br />

          {/* <Order /> */}

          <div className='cartdata'>
            <div className='bill'>
              <div className='cart'>
                <table class='table'>
                  <thead class='thead-dark'>
                    <tr>
                      <th scope='col'>Sno.</th>
                      <th scope='col'>Item</th>
                      <th scope='col'>Price</th>
                      <th scope='col'>Qty</th>
                      <th scope='col'>Remove from cart</th>
                    </tr>
                  </thead>
                  {/* <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table> */}

                  {/* <table>
                  <thead>
                    <th> Sno.</th>
                    <th> Item</th>
                    <th> Price</th>
                    <th> Qty</th>
                    <th> Remove from cart</th>
                  </thead> */}
                  <tbody>
                    {this.state.product
                      ? this.state.product.map((ele) => {
                          console.log('ELE >>', ele);
                          {
                            totalAmount =
                              totalAmount + ele.productprice * ele.itemquantity;
                          }
                          // for(var a = 1; a++)

                          return (
                            <tr key={ele.id}>
                              <th scope='row'>1</th>
                              <td>{ele.productname}</td>
                              <td>{ele.productprice}</td>
                              <td>
                                <input
                                  type='number'
                                  placeholder='quantity'
                                  onChange={(event) => {
                                    this.handlequantity(
                                      event.target.value,
                                      ele.id
                                    );
                                  }}
                                />
                              </td>
                              <td>
                                <button
                                  className='btn btn-danger'
                                  onClick={() =>
                                    this.handleRemoveFromCart(ele.id)
                                  }>
                                  Remove from Cart
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      : null}
                  </tbody>
                </table>
              </div>
              <h5 style={{ 'margin-left': '20px', 'margin-top': '20px' }}>
                {' '}
                Total Amount : ₹{totalAmount}
              </h5>

              <span className='payyy'>
                Payment Mode : &nbsp; &nbsp; &nbsp;
                <br />
                <label className='payy'>
                  <input
                    type='checkbox'
                    name='paymentmode'
                    value='Credit Card'
                    onChange={(event) => this.handlePaymentModeChange(event)}
                  />
                  Credit Card
                </label>
                <label className='payy'>
                  <input
                    type='checkbox'
                    name='paymentmode'
                    value='Cash On Delivery'
                    onChange={(event) => this.handlePaymentModeChange(event)}
                  />
                  Cash On Delivery
                </label>
              </span>
              <button
                style={{ 'margin-left': '20px' }}
                className='btn btn-success'
                onClick={() => this.handleGenerateBill(totalAmount)}
                disabled={!this.validateDetails(totalAmount)}>
                <Link to='/cart/checkout' style={{ color: 'white' }}>
                  Checkout
                </Link>
              </button>
            </div>
          </div>

          <div className='footer'> © 2020 Copyright: Stylisma.com</div>
        </center>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("state in cart", state.order)
  return {
    bill: state.bill,
    paymentmode: state.paymentmode,
    order: state.order,

    // bill: state.bill,
  };
};

export default connect(mapStateToProps)(Cart);
