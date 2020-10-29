import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import Dashboard from '../src/Dashboard/Dashboard';
import ManageOwners from '../src/ManageOwners/ManageOwners';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Redirect exact from='/' to='/dashboard' />
          <Route exact path='/dashboard' component={ Dashboard }/>
          <Route exact path='/manageOwners' component={ ManageOwners }/>
        </Router>
        <p>Starting from scratch :(</p>
      </div>
    );
  }
}

export default connect()( App );