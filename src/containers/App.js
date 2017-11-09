import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;

    return (
      <div>
        <Header
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />

        <Main />

        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
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
