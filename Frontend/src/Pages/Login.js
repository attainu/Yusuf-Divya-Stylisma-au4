/*eslint-disable*/

import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import './../App';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  };

  HandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  loginHandler = e => {
    console.log(this.state)
    axios.post("http://localhost:3010/login",this.state,{
      headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin": "*",
      }
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div className='container mt-5'>
          <div className='card offset-md-3' style={{ width: '30rem' }}>
            <div className='card-body'>
              <h4 className='display-4 ml-4'>Login to Stylisma</h4>
              <div className='form-group col-md-8 offset-md-2'>
                <br />
                <input
                  className='form-control'
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={email}
                  id='useremail'
                  onChange={this.HandleChange}
                />
              </div>
              <div className='form-group col-md-8 offset-md-2 mt-4'>
                <input
                  className='form-control'
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={password}
                  id='password'
                  onChange={this.HandleChange}
                />
              </div>
              <div>
                <Link to='/home'>
                  <button className='btn col-md-8 offset-md-2 mt-4' id='login' onClick = {this.loginHandler}>
                    LOG IN
                  </button>
                </Link>
              </div>
              <div className='row mt-3 offset-md-3'>
                <h5 className=''>New to Stylisma?</h5>
                <Link to='/signup' className='ml-1' style={{ color: 'coral' }}>
                  SignUp
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='footer'> © 2020 Copyright: Stylisma.com</div>
      </div>
    );
  }
}

export default Login;
