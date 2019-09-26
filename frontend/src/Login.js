import React, { PureComponent } from "react";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import JoblyApi from './JoblyApi';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      form: 'Login',
      errors: undefined
    }
    this.clickLogin = this.clickLogin.bind(this);
    this.clickSignUp = this.clickSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  componentDidMount() {
    if (this.props.currentToken) {
      this.props.setToken();
      this.props.history.push('/login');
    }
  }

  clickLogin() {
    this.setState({ form: 'Login' });
  }

  clickSignUp() {
    this.setState({ form: 'Register' });
  }

  async handleLogin(userData) {
    try {
      let token = await JoblyApi.login(userData);
      this.props.setToken(token);
      return "nice";
    } catch(e) {
      this.setState({ errors: e });
      this.props.history.push('/login');
    }
  }

  async handleRegister(userData) {
    try {
      let token = await JoblyApi.register(userData);
      this.props.setToken(token);
      return "sick";
    } catch (e) {
      this.setState({ errors: e });
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.clickLogin}>Login</button>
        <button onClick={this.clickSignUp}>Register</button>

        {this.state.form === 'Login' ?
          <LoginForm login={this.handleLogin} />
          :
          <RegisterForm register={this.handleRegister} />
        }

        <p>{this.state.errors}</p>
      </div>
    );
  }
}

export default Login;