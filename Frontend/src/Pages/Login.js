/*eslint-disable*/

import React from 'react';
import {Link} from "react-router-dom"
import { connect } from 'react-redux';

class Login extends React.Component {

  handleLoginEmailChange = (event) => {
      this.props.dispatch({ type: "loginemail", payload: event.target.value })
  }
  handleLoginPasswordChange = (event) => {
      this.props.dispatch({ type: "loginpassword", payload: event.target.value })
  }

  validatelogin = (loginemail,loginpassword) => {
      if (this.props.loginemail !== "" && this.props.loginpassword !== "" ) {
          return true
      }
      else {
          return false
      }

  }
  render() {

    console.log("login" , this.props)
    return (
      <div>
        <div className='container mt-5 offset-md-4'>
          <div className='card' style={{ width: '30rem' }}>
            <div className='card-body p-1'>
              <h4 className='display-4 ml-4'>Login to Stylisma</h4>
              <div className='form-group col-md-8 offset-md-2'>
                <br />
                <input
                  className='form-control'
                  type='email'
                  placeholder='Enter Your Email'
                  // id='useremail'
                  value={this.props.loginemail} 
                  onChange={(event) => this.handleLoginEmailChange(event)}
                />
              </div>
              <div className='form-group col-md-8 offset-md-2 mt-4'>
                <input
                  className='form-control'
                  type='password'
                  placeholder='Enter Password'
                  // id='password'
                  value={this.props.loginpassword} 
                  onChange={(event) => this.handleLoginPasswordChange(event)}
                />
              </div>
              <div>
                <button className='btn col-md-8 offset-md-2 mt-4' id='login'>
                  LOG IN
                </button>
              </div>
              <div className="auto mt-3 offset-md-3">
                <h6 className = "">New to Stylisma? <Link to = "/signup" className = "ml-1" style = {{color:"coral"}}>SignUp</Link></h6>
                
              <h6>Are You an Admin? <Link to = "/adminlogin" className = "ml-1" style = {{color:"coral"}}>AdminLogin</Link></h6>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer"> © 2020 Copyright: Stylisma.com</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps" , state)
    return {
        email: state.loginemail,
        password: state.loginpassword

    }
}

export default connect(mapStateToProps)(Login);
