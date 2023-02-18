import React, { createContext, useReducer, useEffect,useContext, useState } from "react";

import Cement from "../src/Components/Landing/Body/Categories/SubCategories/Hardware";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderTrack from "./Components/OrderTrack/OrderTrack";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Landing/Navbar/Navbar";
import Product from "./Components/Product/Product";
import Login from "./Components/Landing/Login/Login";
import RegisterOption from "./Components/Landing/Login/RegisterOption";
import RegisterIndividual from "./Components/Landing/Login/RegisterIndividual";
import RegisterInstitutional from "./Components/Landing/Login/RegisterInstitutional";
// import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Landing/Footer/Footer";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import FAQ from "./Components/FAQ/Faq";
import Term from "./Components/Term/Term";
import FaqBussiness from "./Components/FAQ/FaqAccount";
import FaqDelivery from "./Components/FAQ/FaqDelivery";
import FaqFroud from "./Components/FAQ/Faqprivacy";
import FaqQuotation from "./Components/FAQ/FaqReturns";
import FaqOthers from "./Components/FAQ/FaqOthers";
import CategoriesLanding from "./Components/Landing/Body/Categories/CategoriesLanding";

import ContextCart from "./Components/Cart/ContextCart";
import { reducer } from "./Components/Cart/reducer";
import { products } from "./Components/Cart/products";
import Request from "./Components/Request/Request";
import Profile from "./Components/Profile/Profile";
import Summery from "./Components/PaymentSummery/Summery"
import Checkout from "./Components/Cart/Checkout";
import Checkout_po from "./Components/Cart/Checkout_po";
import DetailBlog from "./Components/Blog/DetailBlog";
import ForgotPassword from "./Components/Landing/Login/ForgotPassword";
import Review from "./Components/Landing/Body/Review";
import Orders from "./Components/orders/Orders";
import Payments from "./Components/Payments/Payments";
import Enquiry from "./Components/Enquiry/Enquiry";
import Wishlist from "./Components/wishlist/Wishlist";
import Faq from "./Components/FAQ/Faq";
import RequestQuotation from "./Components/Request/RequestQuotation";
import Payumoney from "./Components/payu/payumoney";
import Response from "./Components/payu/response";
import AdminRequest from "./Components/Request/AdminRequest";
import LoginwithOtp from "./Components/Landing/Login/LoginwithOtp";
import FaqAccount from "./Components/FAQ/FaqAccount";
import FaqPayments from "./Components/FAQ/FaqPayment";
import FaqCustomisations from "./Components/FAQ/FaqCustomisations";
import Faqprivacy from "./Components/FAQ/Faqprivacy";
import FaqReturns from "./Components/FAQ/FaqReturns";
import SearchResult from "./Components/SearchResult";
import success from "./Components/payu/success";
import Success from "./Components/payu/success";
import Failure from "./Components/payu/Failure";
import Order_sum from "./Components/orders/Order_sum";
import Order_sum_i from "./Components/orders/Order_sum_i";
import FirstLook from "./Components/LandingNow/FirstLook"; 


export const CartContext = createContext();
const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

function App(props) {
  // const [totalItem] = useContext(products);
  const [state, dispatch] = useReducer(reducer, initialState);
 

  // to delete the indv. elements from an Item Cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // clear the cart
  // const clearCart = () => {
  //   return dispatch({ type: "CLEAR_CART" });
  // };

  // increment the item
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // decrement the item
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  // we will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log("Awesome");
  }, [state.item]);
  const showNavbar = window.location.pathname !== '/';
  const showFooter = window.location.pathname !== '/';

  return (
    <div className="App">
     
      <Router forceRefresh={true}>
        <div>
        {showNavbar && <Navbar />}

          <Switch>
            <Route  onClick={() => {window.location.reload()}} path="/track-order">
              <OrderTrack />
            </Route>
            <Route path="/" render={() => <FirstLook />} />
            <Route  onClick={() => {window.location.reload()}} path="/catogoriesLanding/:name">
              <CategoriesLanding />
            </Route>
            
            <Route  onClick={() => {window.location.reload()}} path={"/product/:id"}>
              <Product />
            </Route>
            <Route  onClick={() => {window.location.reload()}} path={"/Order_sum_i/:id"}>
              <Order_sum_i />
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/cart">
            <ContextCart />
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/Order_sum">
            <Order_sum />
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/login">
              <Login />
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/loginwithotp">
              <LoginwithOtp/>
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/forgot-password">
              <ForgotPassword/>
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/registerOption">
              <RegisterOption />
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/registerIndividual">
              <RegisterIndividual />
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/registerInstitutional">
              <RegisterInstitutional />
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/blog">
              <Blog />
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/review">
              <Review/>
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/orders">
              <Orders/>
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/payments">
              <Payments/>
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/enquiry">
              <Enquiry/>
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/requests">
              <Request/>
            </Route> 
            <Route  onClick={() => {window.location.reload()}} path="/wishlist">
              <Wishlist/>
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/requestQuotation">
              <RequestQuotation/>
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/Cement">
            <Cement  />
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/payu">
              <Payumoney/>
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/payuresponse">
              <Response/>
            </Route>
            <Route path="/search-result/:slug" component={SearchResult} />
            <Route path="/detail-blog/:slug" component={DetailBlog} />
            <Route  onClick={() => {window.location.reload()}} path="/about">
              <About />
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/contact">
              <Contact />
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/success">
              <Success/>
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/failed">
              <Failure/>
            </Route>

            {/* all faq links are starts from here */}

            <Route  onClick={() => {window.location.reload()}} path="/faq">
              <FAQ />
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/faqAccount">
              <FaqAccount />
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/faqDelivery">
              <FaqDelivery />
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/faqPaymentsandRefunds">
              <FaqPayments/>
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/faqCustom">
              <FaqCustomisations/>
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/faqprivacy">
              <Faqprivacy/>
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/faqreturns">
              <FaqReturns/>
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/faqOthers">
              <FaqOthers />
            </Route>

            {/* faq links ends here */}
            <Route  onClick={() => {window.location.reload()}} path="/term">
              <Term />
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/request">
              <Request />
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/profile">
              <Profile/>
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/adminrequest">
              <AdminRequest/>
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/summery">
              <Summery />
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/checkout">
              <Checkout/>
            </Route>
            <Route  onClick={() => {window.location.reload()}} path="/checkout_po">
              <Checkout_po/>
            </Route>
            
            <Route  onClick={() => {window.location.reload()}} path="/landing">
              <Landing />
            </Route>
          </Switch>
          {showFooter && <Footer />}

        </div>
      </Router>
     
    </div>
    
  );
}

export default App;
