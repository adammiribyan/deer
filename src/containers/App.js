import React, { Component } from 'react';
import { connect } from 'react-redux';

import Notification from '../components/Notification';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    const { dispatch, session } = this.props;

    return (
      <div>
        <Header dispatch={dispatch} currentUser={session.currentUser} />
        <Notification content={session.errorMessage} />
        <Main dispatch={dispatch} isLoggedIn={!!session.currentUser} />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    session: state.session,
  };
}

export default connect(mapStateToProps)(App);
