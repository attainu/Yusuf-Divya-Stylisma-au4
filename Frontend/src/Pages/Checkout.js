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

// import Order from './Men'

class Checkout extends React.Component {
  // validatecheckoutDetails = () => {
  //   if (
  //     this.props.billname !== '' &&
  //     this.props.billaddress !== '' &&
  //     this.props.billemail !== '' &&
  //     this.props.billcity !== '' &&
  //     this.state.billstate !== '' &&
  //     this.props.billzip !== '' &&
  //     this.props.billcardname !== '' &&
  //     this.props.billcardnumber !== '' &&
  //     this.props.billcardexpmonth !== '' &&
  //     this.props.billcardexpyear !== '' &&
  //     this.props.billcardexpcvv !== '' &&
  //     this.props.billcardexpmonth !== ''
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  handlebillnameChange = (event) => {
    this.props.dispatch({ type: 'billname', payload: event.target.value });
  };

  handlebilladdressChange = (event) => {
    this.props.dispatch({ type: 'billaddress', payload: event.target.value });
  };

  handlebillemailChange = (event) => {
    this.props.dispatch({ type: 'billemail', payload: event.target.value });
  };

  handlebillcityChange = (event) => {
    this.props.dispatch({ type: 'billcity', payload: event.target.value });
  };

  handlebillstateChange = (event) => {
    this.props.dispatch({ type: 'billstate', payload: event.target.value });
  };

  handlebillzipChange = (event) => {
    this.props.dispatch({ type: 'billzip', payload: event.target.value });
  };

  handlebillcardnameChange = (event) => {
    this.props.dispatch({ type: 'billcardname', payload: event.target.value });
  };

  handlebillcardnumberChange = (event) => {
    this.props.dispatch({
      type: 'billcardnumber',
      payload: event.target.value,
    });
  };

  handlebillcardexpmonthChange = (event) => {
    this.props.dispatch({
      type: 'billcardexpmonth',
      payload: event.target.value,
    });
  };

  handlebillcardexpyearChange = (event) => {
    this.props.dispatch({
      type: 'billcardexpyear',
      payload: event.target.value,
    });
  };

  handlebillcardexpcvvChange = (event) => {
    this.props.dispatch({
      type: 'billcardexpcvv',
      payload: event.target.value,
    });
  };

  validatecheckoutaddressDetails = () => {
    if (
      this.props.billname !== '' &&
      this.props.billaddress !== '' &&
      this.props.billemail !== '' &&
      this.props.billcity !== '' &&
      this.props.billzip !== ''
    ) {
      return true;
    } else {
      return false;
    }
  };

  showBill = () => {
    alert(
      'Your items are checked out. Your Items Will be Delivered To you Within the 5 working days. ThankYou for shopping with us !!'
    );
  };

  render() {
    console.log(this.props.billemail);
    return (
      <div>
        <center>
          <br />
          <br />
          <br />

          {/* <div>
          <h1 className='welcome'>Welcome to Checkout 
            <br />
            <h5> We Believe in Quality Service</h5>
          </h1>
          </div> */}

          <br />

          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>

          <div class='row'>
            <div class='col-75'>
              <div class='container ccout'>
                <form>
                  <div class='row'>
                    <div class='col-50'>
                      <h3>Billing Address</h3>
                      <label for='fname'>
                        <i class='fa fa-user'></i> Full Name
                      </label>
                      <input
                        type='text'
                        id='fname'
                        name='fullname'
                        placeholder='Full Name'
                        value={this.props.billname}
                        onChange={(event) => this.handlebillnameChange(event)}
                        required
                      />
                      <label for='email'>
                        <i class='fa fa-envelope'></i> Email
                      </label>
                      <input
                        type='text'
                        id='email'
                        name='email'
                        placeholder='example@example.com'
                        value={this.props.billemail}
                        onChange={(event) => this.handlebillemailChange(event)}
                        required
                      />
                      <label for='adr'>
                        <i class='fa fa-address-card-o'></i> Address
                      </label>
                      <input
                        type='text'
                        id='adr'
                        name='address'
                        placeholder='address'
                        value={this.props.billaddress}
                        onChange={(event) =>
                          this.handlebilladdressChange(event)
                        }
                        required
                      />
                      <label for='city'>
                        <i class='fa fa-institution'></i> City
                      </label>
                      <input
                        type='text'
                        id='city'
                        name='city'
                        placeholder='city'
                        value={this.props.billcity}
                        onChange={(event) => this.handlebillcityChange(event)}
                        required
                      />

                      <div class='row'>
                        <div class='col-50'>
                          <label for='state'>State</label>
                          <input
                            type='text'
                            id='state'
                            name='state'
                            placeholder='state'
                            value={this.props.billstate}
                            onChange={(event) =>
                              this.handlebillstateChange(event)
                            }
                            required
                          />
                        </div>
                        <div class='col-50'>
                          <label for='zip'>Zip</label>
                          <input
                            type='text'
                            id='zip'
                            name='zip'
                            placeholder='zip'
                            value={this.props.billzip}
                            onChange={(event) =>
                              this.handlebillzipChange(event)
                            }
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div class='col-50'>
                      <h3>Payment</h3>
                      <label for='fname'>Accepted Cards</label>
                      <div class='icon-container'>
                        <i class='fa fa-cc-visa' style={{ color: 'navy' }}></i>
                        <i class='fa fa-cc-amex' style={{ color: 'blue' }}></i>
                        <i
                          class='fa fa-cc-mastercard'
                          style={{ color: 'red' }}></i>
                        <i
                          class='fa fa-cc-discover'
                          style={{ color: 'orange' }}></i>
                      </div>
                      <label for='cname'>Name on Card</label>
                      <input
                        type='text'
                        id='cname'
                        name='cardname'
                        placeholder='Card name'
                        value={this.props.billcardname}
                        onChange={(event) =>
                          this.handlebillcardnameChange(event)
                        }
                        required
                      />
                      <label for='ccnum'>Credit card number</label>
                      <input
                        type='text'
                        id='ccnum'
                        name='cardnumber'
                        placeholder='1111-2222-3333-4444'
                        value={this.props.billcardnumber}
                        onChange={(event) =>
                          this.handlebillcardnumberChange(event)
                        }
                        required
                      />
                      <label for='expmonth'>Exp Month</label>
                      <input
                        type='text'
                        id='expmonth'
                        name='expmonth'
                        placeholder='September'
                        value={this.props.billcardexpmonth}
                        onChange={(event) =>
                          this.handlebillcardexpmonthChange(event)
                        }
                        required
                      />
                      <div class='row'>
                        <div class='col-50'>
                          <label for='expyear'>Exp Year</label>
                          <input
                            type='text'
                            id='expyear'
                            name='expyear'
                            placeholder='2018'
                            value={this.props.billcardexpyear}
                            onChange={(event) =>
                              this.handlebillcardexpyearChange(event)
                            }
                            required
                          />
                        </div>
                        <div class='col-50'>
                          <label for='cvv'>CVV</label>
                          <input
                            type='text'
                            id='cvv'
                            name='cvv'
                            placeholder='352'
                            value={this.props.billcardexpcvv}
                            onChange={(event) =>
                              this.handlebillcardexpcvvChange(event)
                            }
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <label>
                    <input type='checkbox' checked='checked' name='sameadr' />{' '}
                    Shipping address same as billing
                  </label>
                  <button
                    class='btn btn-success'
                    disabled={!this.validatecheckoutaddressDetails()}
                    onClick={() => {
                      this.showBill();
                    }}>
                    {/* <button class="btn btn-success" disabled={!this.validatecheckoutaddressDetails()} > */}
                    {/* <button class="btn btn-success" > */}
                    <Link to='/' style={{ color: 'white' }}>
                      Continue to Checkout
                    </Link>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className='footer'> © 2020 Copyright: Stylisma.com</div>
        </center>
      </div>
    );
    // return   <Redirect to='/' />;
  }
}

const mapStateToProps = (state) => {
  // console.log("state in cart", state.order)
  return {
    paymentmode: state.paymentmode,
    order: state.order,
    // bill: state.bill,
    billname: state.billname,
    billaddress: state.billaddress,
    billemail: state.billemail,
    billcity: state.billcity,
    billstate: state.billstate,
    billzip: state.billzip,
    billcardname: state.billcardname,
    billcardnumber: state.billcardnumber,
    billcardexpmonth: state.billcardexpmonth,
    billcardexpyear: state.billcardexpyear,
    billcardexpcvv: state.billcardexpcvv,
  };
};

export default connect(mapStateToProps)(Checkout);
// export default Checkout;
