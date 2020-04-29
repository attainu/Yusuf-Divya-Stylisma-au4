import { createStore } from 'redux';

// ---------------------------------------------------------------------------

// 1. Save all the channels at one place - Application State
let initialState = {
  loginemail: '',
  loginpassword: '',
  signupemail: '',
  signuppassword: '',
  adminemail: '',
  adminpassword: '',
  user: '',
  admin: [],
  productname: "",
  productimage: "",
  productrating: "",
  productquantity: "",
  productprice: "",
  productcolor: "",
  CATEGORIES: "",
  SIZE: "",
  SECTION: "",
  productdetails: [],
  products: "",
  order: [],
  currentItems: []
}


// 2. function - expose that function - to raise/trigger change requests - dispatch function - already present in redux
// dispatch(action)

// 3. function - make the necessary changes - reducer function
function appReducerFunction(state = initialState, action) {
  //console.log("redux state here", state)

  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
      case "loginemail":
          stateCopy.loginemail = action.payload
          return stateCopy;
      case "loginpassword":
          stateCopy.loginpassword = action.payload
          return stateCopy
      case "productname":
          stateCopy.productname = action.payload
          return stateCopy
      case "productimage":
          stateCopy.productimage = {file: action.payload}
          return stateCopy
      case "productquantity":
          stateCopy.productquantity = action.payload
          return stateCopy
      case "productrating":
          stateCopy.productrating = action.payload
          return stateCopy
      case "productcolor":
          stateCopy.productcolor = action.payload
          return stateCopy
      case "productprice":
          stateCopy.productprice = action.payload
          return stateCopy
      case "SECTION":
          stateCopy.SECTION = action.payload
          return stateCopy
      case "SIZE":
          stateCopy.SIZE = action.payload
          return stateCopy
      case "CATEGORIES":
          stateCopy.CATEGORIES = action.payload
          return stateCopy
      case "addProductDetails":
          stateCopy.productdetails.push(action.payload)
          return stateCopy
      case "products":
          stateCopy.products = action.payload
          return stateCopy
          case "product":
              stateCopy.products = JSON.parse(JSON.stringify(action.payload))
              return stateCopy
      case "add_to_cart":
          stateCopy.order = JSON.parse(JSON.stringify(action.payload))
            // stateCopy.order.push(stateCopy.currentOrder[action.payload])
          return stateCopy
      case "clear":
          stateCopy.productname = ""
          stateCopy.productimage = ""
          stateCopy.productprice = ""
          stateCopy.SECTION = ""
          stateCopy.productquantity = ""
          stateCopy.productcolor = ""
          stateCopy.SIZE = ""
          stateCopy.CATEGORIES = ""
          stateCopy.order = []
          stateCopy.currentItems = []
          return stateCopy
      default:
          return stateCopy
  }
}

// 4. Create a package - (state, dispatch) - store - there should be a way to create this store - already present in redux
const store = createStore(appReducerFunction);

// console.log("store " , store , store.getState());

export default store;
