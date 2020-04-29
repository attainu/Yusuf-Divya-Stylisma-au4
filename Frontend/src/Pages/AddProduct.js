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

class AddProduct extends React.Component {
  state = {
    productimage: '',
  };

  handleProductNameChange = (event) => {
    this.props.dispatch({ type: 'productname', payload: event.target.value });
  };
  handleProductImageChange = (event) => {
    this.setState({
      productimage: event.target.files[0],
    });
  };
  handleProductRatingChange = (event) => {
    this.props.dispatch({ type: 'productrating', payload: event.target.value });
  };
  handleProductQuantityChange = (event) => {
    this.props.dispatch({
      type: 'productquantity',
      payload: event.target.value,
    });
  };
  handleProductPriceChange = (event) => {
    this.props.dispatch({ type: 'productprice', payload: event.target.value });
  };
  handleProductColorChange = (event) => {
    this.props.dispatch({ type: 'productcolor', payload: event.target.value });
  };
  handleCategoriesChange = (event) => {
    this.props.dispatch({ type: 'CATEGORIES', payload: event.target.value });
  };
  handleSizeChange = (event) => {
    this.props.dispatch({ type: 'SIZE', payload: event.target.value });
  };
  handleSectionChange = (event) => {
    this.props.dispatch({ type: 'SECTION', payload: event.target.value });
  };
  handleproductdetailsChange = (event) => {
    this.props.dispatch({
      type: 'productdetails',
      payload: event.target.value,
    });
  };

  validateAddProductDetails = () => {
    if (
      this.props.CATEGORIES !== '' &&
      this.props.SIZE !== '' &&
      this.props.SECTION !== '' &&
      this.props.productname !== '' &&
      this.state.productimage !== '' &&
      this.props.productprice !== '' &&
      this.props.productquantity !== '' &&
      this.props.productrating !== '' &&
      this.props.productcolor !== ''
    ) {
      return true;
    } else {
      return false;
    }
  };

  handleAddProductButton = async () => {
    const files = this.state.productimage;

    const data = new FormData();
    data.append('file', files);
    data.append('upload_preset', 'darwin');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/yuspat/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );

    const file = await res.json();
    console.log(file);

    let productdata = {
      productname: this.props.productname,
      productimage: file.secure_url,
      productrating: this.props.productrating,
      productcolor: this.props.productcolor,
      productquantity: this.props.productquantity,
      productprice: this.props.productprice,
      SECTION: this.props.SECTION,
      SIZE: this.props.SIZE,
      CATEGORIES: this.props.CATEGORIES,
    };

    // this.props.productdetails({ type: "productdetails", payload: productdata })
    
    
    // this.props.dispatch({
    //   type: "addProductDetails"
    // })
       
// handleProductImageUpload = (event) => {
//   // let image = event.target.files[0].name;
//   const files = event.target.files;
//   const data = new FormData()
//   data.append('file',files[0])
//   data.append('upload_preset','darwin')
//   axios
//     .post(
//       'https://api.cloudinary.com/v1_1/yuspat/image/upload',data)
//     .then((res) => {
//       console.log(res.data);
//     });
    
//   })

    this.props.dispatch({
      type: 'addProductDetails',
      payload: productdata,
    });
    // this.props.dispatch({
    //   type: 'addProductDetails',
    // });

    const response = await axios.post('http://localhost:5000/addproduct', productdata)
    console.log(response.data);


    console.log('pushedd...');

    alert('Your product is added Successfully');
    this.props.dispatch({
      type: "clear"
    })

  };

  render() {
    // console.log("login" , this.props)

    return (
      <div>
        <center>
          <br />

          <div>
            <h1 className='welcome'>
              Happy Selling
              <br />
              <h5> We Believe in Quality Service</h5>
            </h1>
          </div>

          <div className='form'>
            <form
              className='addproductform'
              action=''
              encType='multipart/form-data'>
              <div className='row'>
                <div className='col'>
                  <input
                    type='text'
                    className='form-control is-valid'
                    name='productname'
                    id='productname'
                    minLength='1'
                    maxLength='30'
                    siz='30'
                    placeholder='Product Name'
                    value={this.props.productname}
                    onChange={(event) => this.handleProductNameChange(event)}
                    required
                  />
                  <div class='invalid-feedback'>Please give product name</div>
                  {/* <div class="valid-feedback">
        Looks good!
      </div> */}
                  </div>
                  <div className='col'>
                    <input
                      type='file'
                      className='form-control'
                      name='productimage'
                      id='productimage'
                      placeholder='Product Image'
                      onChange={(event) => this.handleProductImageChange(event)}
                      required
                    />
                  </div>
                  <div className='col'>
                    <input
                      type='number'
                      className='form-control'
                      name='productrating'
                      id='productrating'
                      minLength='1'
                      maxLength='1'
                      size='1'
                      placeholder='Product Rating'
                      value={this.props.productrating}
                      onChange={(event) =>
                        this.handleProductRatingChange(event)
                      }
                      required
                    />
                </div>
              </div>

                <br />
                <br />
                <div className='row'>
                  <div className='col'>
                    <input
                      type='text'
                      className='form-control'
                      name='productcolor'
                      id='productcolor'
                      minLength='1'
                      maxLength='30'
                      siz='30'
                      placeholder='Product Color'
                      value={this.props.productcolor}
                      onChange={(event) => this.handleProductColorChange(event)}
                      required
                    />
                  </div>
                  <div className='col'>
                    <input
                      type='number'
                      className='form-control'
                      name='productquantity'
                      id='productquantity'
                      minLength='1'
                      maxLength='100'
                      siz='100'
                      placeholder='Product Quantity available to sell'
                      value={this.props.productquantity}
                      onChange={(event) =>
                        this.handleProductQuantityChange(event)
                      }
                      required
                    />
                  </div>
                  <div className='col'>
                    <input
                      type='number'
                      className='form-control'
                      name='productprice'
                      id='productprice'
                      placeholder='Product Price'
                      value={this.props.productprice}
                      onChange={(event) => this.handleProductPriceChange(event)}
                      required
                    />
                  </div>
                <div className='col'>
                  <input
                    type='number'
                    className='form-control'
                    name='productquantity'
                    id='productquantity'
                    minLength='1'
                    maxLength='100'
                    siz='100'
                    placeholder='Product Quantity available to sell'
                    value={this.props.productquantity}
                    onChange={(event) =>
                      this.handleProductQuantityChange(event)
                    }
                    required
                  />
                </div>
                <div className='col'>
                  <input
                    type='number'
                    className='form-control'
                    name='productprice'
                    id='productprice'
                    placeholder='Product Price'
                    value={this.props.productprice}
                    onChange={(event) => this.handleProductPriceChange(event)}
                    required
                  />
                </div>
              </div>

              <br />
              <br />

              <div className='row'>
                <div className='col'>
                  <h3>CATEGORIES : </h3>
                  <input
                    type='radio'
                    id='Jeans'
                    name='CATEGORIES'
                    value='Jeans'
                    // value={this.props.productname}
                    onChange={(event) => this.handleCategoriesChange(event)}
                  />
                  <label for='Jeans'>Jeans</label>
                  <br />
                  <input
                    type='radio'
                    id='T-Shirts'
                    name='CATEGORIES'
                    value='T-Shirts'
                    // value={this.props.productname}
                    onChange={(event) => this.handleCategoriesChange(event)}
                  />
                  <label for='T-Shirts'>T-Shirts</label>
                  <br />
                  <input
                    type='radio'
                    id='Lowers'
                    name='CATEGORIES'
                    value='Lowers'
                    // value={this.props.productname}
                    onChange={(event) => this.handleCategoriesChange(event)}
                  />
                  <label for='Lowers'>Lowers</label>
                  <br />
                  <input
                    type='radio'
                    id='Hoddies'
                    name='CATEGORIES'
                    value='Hoddies'
                    // value={this.props.productname}
                    onChange={(event) => this.handleCategoriesChange(event)}
                  />
                  <label for='Hoddies'>Hoddies</label>
                  <br />
                  <input
                    type='radio'
                    id='Western-Dresses'
                    name='CATEGORIES'
                    value='Western-Dresses'
                    // value={this.props.productname}
                    onChange={(event) => this.handleCategoriesChange(event)}
                  />
                  <label for='Western-Dresses'>Western-Dresses</label>
                  <br />
                  <input
                    type='radio'
                    id='Tradional-Dresses'
                    name='CATEGORIES'
                    value='Tradional-Dresses'
                    // value={this.props.productname}
                    onChange={(event) => this.handleCategoriesChange(event)}
                  />
                  <label for='Tradional-Dresses'>Tradional-Dresses</label>
                  <br />
                  <input
                    type='radio'
                    id='Shoes'
                    name='CATEGORIES'
                    value='Shoes'
                    // value={this.props.productname}
                    onChange={(event) => this.handleCategoriesChange(event)}
                  />
                  <label for='Shoes'>Shoes</label>
                  <br />
                  <input
                    type='radio'
                    id='Tops'
                    name='CATEGORIES'
                    value='Tops'
                    // value={this.props.productname}
                    onChange={(event) => this.handleCategoriesChange(event)}
                  />
                  <label for='Tops'>Tops</label>
                  <br />
                  <input
                    type='radio'
                    id='Crop-Tops'
                    name='CATEGORIES'
                    value='Crop-Tops'
                    // value={this.props.productname}
                    onChange={(event) => this.handleCategoriesChange(event)}
                  />
                  <label for='Crop-Tops'>Crop-Tops</label>
                  <br />
                  <input
                    type='radio'
                    id='Sandals'
                    name='CATEGORIES'
                    value='Sandals'
                    // value={this.props.productname}
                    onChange={(event) => this.handleCategoriesChange(event)}
                  />
                  <label for='Sandals'>Sandals</label>
                  <br />
                  <input
                    type='radio'
                    id='Hand-Bags'
                    name='CATEGORIES'
                    value='Hand-Bags'
                    // value={this.props.productname}
                    onChange={(event) => this.handleCategoriesChange(event)}
                  />
                  <label for='Hand-Bags'>Hand-Bags</label>
                  <br />
                  <input
                    type='radio'
                    id='Jwellery'
                    name='CATEGORIES'
                    value='Jwellery'
                    // value={this.props.productname}
                    onChange={(event) => this.handleCategoriesChange(event)}
                  />
                  <label for='Jwellery'>Jwellery</label>
                  <br />
                  <input
                    type='radio'
                    id='Night-Suits'
                    name='CATEGORIES'
                    value='Night-Suits'
                    // value={this.props.productname}
                    onChange={(event) => this.handleCategoriesChange(event)}
                  />
                  <label for='Night-Suits'>Night-Suits</label>
                </div>

                <div className='col'>
                  <h3>SIZE : </h3>
                  <input
                    type='radio'
                    id='S'
                    name='SIZE'
                    value='S'
                    // value={this.props.productname}
                    onChange={(event) => this.handleSizeChange(event)}
                  />
                  <label for='S'>Small</label>
                  <br />
                  <input
                    type='radio'
                    id='M'
                    name='SIZE'
                    value='M'
                    // value={this.props.productname}
                    onChange={(event) => this.handleSizeChange(event)}
                  />
                  <label for='M'>Medium</label>
                  <br />
                  <input
                    type='radio'
                    id='L'
                    name='SIZE'
                    value='L'
                    // value={this.props.productname}
                    onChange={(event) => this.handleSizeChange(event)}
                  />
                  <label for='L'>Large</label>
                  <br />
                  <input
                    type='radio'
                    id='XL'
                    name='SIZE'
                    value='XL'
                    // value={this.props.productname}
                    onChange={(event) => this.handleSizeChange(event)}
                  />
                  <label for='XL'>Extra Large</label>
                  <br />
                  <input
                    type='radio'
                    id='XXL'
                    name='SIZE'
                    value='XXL'
                    // value={this.props.productname}
                    onChange={(event) => this.handleSizeChange(event)}
                  />
                  <label for='XXL'>Double Extra Large</label>
                </div>

                <div className='col'>
                  <h3>SECTION : </h3>
                  <input
                    type='radio'
                    id='men'
                    name='SECTION'
                    value='men'
                    // value={this.props.productname}
                    onChange={(event) => this.handleSectionChange(event)}
                  />
                  <label for='men'>Men</label>
                  <br />
                  <input
                    type='radio'
                    id='women'
                    name='SECTION'
                    value='women'
                    // value={this.props.productname}
                    onChange={(event) => this.handleSectionChange(event)}
                  />
                  <label for='women'>Women</label>
                  <br />
                  <input
                    type='radio'
                    id='kids'
                    name='SECTION'
                    value='kids'
                    // value={this.props.productname}
                    onChange={(event) => this.handleSectionChange(event)}
                  />
                  <label for='kids'>Kids</label>
                </div>

                <div className='col'>
                  <button
                    id='addproduct'
                    className='btn btn-success'
                    value='upload'
                    type='button'
                    onClick={() => {
                      this.handleAddProductButton();
                    }}
                    // onClick={() => {
                    //   this.validateAddProductDetails();
                    // }}
                    disabled={!this.validateAddProductDetails()}>
                    ADD PRODUCT
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className='footer'> © 2020 Copyright: Stylisma.com</div>
        </center>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productname: state.productname,
    productimage: state.productimage,
    productrating: state.productrating,
    productquantity: state.productquantity,
    productprice: state.productprice,
    productcolor: state.productcolor,
    CATEGORIES: state.CATEGORIES,
    SIZE: state.SIZE,
    SECTION: state.SECTION,
    productdetails: state.productdetails,
  };
};

export default connect(mapStateToProps)(AddProduct);
