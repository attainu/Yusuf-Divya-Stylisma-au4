/*eslint-disable*/

import React from 'react';
import { Link } from 'react-router-dom';
import './../App';

class Login extends React.Component {
  render() {
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
                  placeholder='Email'
                  id='useremail'
                />
              </div>
              <div className='form-group col-md-8 offset-md-2 mt-4'>
                <input
                  className='form-control'
                  type='password'
                  placeholder='Password'
                  id='password'
                />
              </div>
              <div>
                <button className='btn col-md-8 offset-md-2 mt-4' id='login'>
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
            </div>
          </div>
        </div>

        <div className='footer'> © 2020 Copyright: Stylisma.com</div>
      </div>
    );
  }
}

export default Login;
