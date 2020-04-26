/*eslint-disable*/

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import './../App';
import {connect} from "react-redux";

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    loggedIn: false,
    showError: false,
    showNullError: false,
    admin:false
  };

  HandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  HandleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if(username === "admin" && password === "admin") {
      this.setState({
        admin:true
      })
    }
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });
      localStorage.setItem('JWT', response.data.token);
      this.setState({
        loggedIn: true,
        showError: false,
        showNullError: false,
      });
    } catch (error) {
      console.error(error.response.data);
      if (
        error.response.data === 'Incorrect username' ||
        error.response.data === 'passwords do not match'
      ) {
        this.setState({
          showError: true,
          showNullError: false,
        });
      }
    }
  };

  render() {
    const {
      username,
      password,
      showError,
      loggedIn,
      showNullError,
    } = this.state;
    if(this.state.admin) {
      return <Redirect to ="/addproduct" />
    }
    if (!loggedIn) {
      return (
        <div>
          <div className='container mt-5'>
            <div className='card offset-md-3' style={{ width: '30rem' }}>
              <div className='card-body p-1'>
                <h4 className='display-4 ml-4'>Login to Stylisma</h4>
                <form onSubmit={this.HandleSubmit}>
                  <div className='form-group col-md-8 offset-md-2'>
                    <br />
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Username'
                      id='username'
                      required
                      name='username'
                      onChange={this.HandleChange}
                    />
                  </div>
                  <div className='form-group col-md-8 offset-md-2 mt-4'>
                    <input
                      className='form-control'
                      type='password'
                      placeholder='Password'
                      id='password'
                      required
                      name='password'
                      onChange={this.HandleChange}
                    />
                  </div>
                  <div>
                    <button
                      className='btn col-md-8 offset-md-2 mt-4'
                      id='login'>
                      LOG IN
                    </button>
                  </div>
                  <div className='auto mt-3 offset-md-3'>
                    <h6 className=''>
                      New to Stylisma?{' '}
                      <Link
                        to='/signup'
                        className='ml-1'
                        style={{ color: 'coral' }}>
                        SignUp
                      </Link>
                    </h6>

                    <h6>
                      Are You an Admin?{' '}
                      <Link
                        to='/adminlogin'
                        className='ml-1'
                        style={{ color: 'coral' }}>
                        AdminLogin
                      </Link>
                    </h6>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className='footer'> © 2020 Copyright: Stylisma.com</div>
        </div>
      );
    }

    return <Redirect to='/' />;
  }
}



export default connect()(Login);
