import React, { Component } from 'react';

export default class SessionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <label for="session_email">Email</label>
          <input type="email" className="form-control" id="session_email" />
        </div>

        <div className="form-group">
          <label for="session_password">Password</label>
          <input type="password" className="form-control" id="session_password" />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    )
  }
}
