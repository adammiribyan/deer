import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import Login from '../components/Login';
import Navigation from '../components/Navigation';

class App extends Component {
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;

    return (
      <div>
        <Navigation
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />

        <div className="container">
          Deer
        </div>
      </div>
    );
  }
}

App.propTypes = {
}

function mapStateToProps(state) {
  const { auth } = state;
  const { isAuthenticated, errorMessage } = auth;

  return {
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App);
