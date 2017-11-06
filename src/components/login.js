import React from 'react';
import $ from 'jquery';
// import axios from 'axios';

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
      url: 'http://localhost:3002/auth/sign_in',
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
      <div>
        <h2>Sign in</h2>
        <form onSubmit={this.handleLogin}>
          <input type="text" value={this.state.email} onChange={event => this.emailChange(event)} />
          <input
            type="password"
            value={this.state.password}
            onChange={event => this.passwordChange(event)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
