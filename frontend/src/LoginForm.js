import React, { Component } from "react";
import { withRouter } from "react-router";

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    let loggedIn = await this.props.login(this.state);
    this.setState({ username: "", password: "" });
    if(loggedIn) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username"></label>
          <input
            onChange={this.handleChange}
            placeholder="username"
            type="text"
            name="username"
            value={this.state.username}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            onChange={this.handleChange}
            placeholder="password"
            type="password"
            name="password"
            value={this.state.password}
          />
        </div>
        <button>Login</button>
      </form>
    );
  }
}

export default withRouter(LoginForm);