import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './overrideBootstrap.css';
import './App.css';
import Header from './containers/Header/Header';
import HomePage from './HomePage/HomePage';
import Footer from './components/Footer/Footer';
import Authentication from './Authentication/Authentication';
import DashboardPage from './DashboardPage/DashboardPage';
import MoveToTop from './containers/moveToTop/MoveToTop';
import {Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { cheackAuthState } from './store/actions/index';
import axios from './axios-base';
import Upload from './upload';
import axioss from 'axios';

const App = (props) => {

  useEffect(() => {
    props.cheackAuthState();
  }, [])

  return (
    <React.Fragment>
      {props.location.pathname.includes("dashboard") ? null : <Header/>}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/authentication" component={Authentication} />
        <Route path="/dashboard" component={DashboardPage} />
        <Redirect from="/" to="/" />
      </Switch>
      {props.location.pathname.includes("dashboard") ? null : <Footer/>}
      <MoveToTop />
      {/* <Upload /> */}
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    cheackAuthState: () => dispatch(cheackAuthState())
  }
};

export default connect(null, mapDispatchToProps)(withRouter(App));
