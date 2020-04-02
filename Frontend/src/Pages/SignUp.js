import React from 'react';
import '../App.css';

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <div className='container mt-5 col-md-4 offset-md-3'>
          <div className='card ml-5' style={{ width: '34rem' }}>
            <div className='card-body'>
              <h4 className='display-4 ml-3'>Signup with Stylisma</h4>
              <div className='form-group col-md-8 offset-md-2 mt-3'>
                <br />
                <input
                  className='form-control'
                  type='text'
                  placeholder='Name'
                  id='username'
                  required
                />
              </div>
              <div className='form-group col-md-8 offset-md-2 mt-4'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Mobile Number'
                  id='number'
                  required
                />
              </div>
              <div className='form-group mt-4 col-md-8 offset-md-2'>
                <input
                  className='form-control'
                  type='email'
                  placeholder='Your Email Address'
                  id='useremail'
                  required
                />
              </div>
              <div className='form-group col-md-8 offset-md-2 mt-4'>
                <input
                  className='form-control'
                  type='password'
                  placeholder='Choose Password'
                  id='password'
                  required
                />
              </div>

              <div>
                <button className='btn col-md-8 offset-md-2 mt-4' id='signup'>
                  REGISTER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
