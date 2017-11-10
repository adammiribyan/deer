import React, { Component } from 'react';
import { login } from '../actions/sessionActions.js'

export default class SessionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(login(this.state));
  }

  render() {
    return(
      <div className="login-form">
        <h3 className="login-form__heading">Hey there!</h3>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="session_email">Email</label>
            <input type="email" className="form-control" id="session_email" autoFocus="true"
              onChange={(event) => this.setState({ email: event.target.value })} />
          </div>

          <div className="form-group">
            <label htmlFor="session_password">Password</label>
            <input type="password" className="form-control" id="session_password"
              onChange={(event) => this.setState({ password: event.target.value })} />
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }
}
