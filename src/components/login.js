import React from 'react';
import $ from 'jquery';
import { API_ROOT } from '../config/api-config';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  emailChange(event) {
    this.setState({ email: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleLogin(e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: `${API_ROOT}/auth/sign_in`,
      data: {
        email: this.state.email,
        password: this.state.password,
      },
    }).done((response, status, jqXHR) => {
      sessionStorage.setItem(
        'user',
        JSON.stringify({
          'access-token': jqXHR.getResponseHeader('access-token'),
          client: jqXHR.getResponseHeader('client'),
          uid: response.data.uid,
        }),
      );
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <div className="container text-center">
        <h2>Sign in</h2>
        <form onSubmit={this.handleLogin}>
          <div className="form-group col-md-4 col-md-offset-4">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={this.state.email}
              onChange={event => this.emailChange(event)}
            />
          </div>
          <div className="form-group col-md-4 col-md-offset-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={event => this.passwordChange(event)}
            />
          </div>
          <div className="form-group">
            <input className="btn btn-primary col-md-4 col-md-offset-4" type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
