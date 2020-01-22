import React, { Component } from "react";
import { withRouter } from "react-router";
import { Form, Button, Col } from "react-bootstrap";

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
    if (loggedIn) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <Col lg={{ span: 6, offset: 3 }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label>username</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              placeholder="username"
              type="text"
              name="username"
              value={this.state.username}
            />
          </Form.Group>
          <Form.Group controlId="username">
            <Form.Label>password</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              placeholder="password"
              type="password"
              name="password"
              value={this.state.password}
            />
          </Form.Group>
          <Button variant="primary" type="submit">Login</Button>
        </Form>
      </Col>
    );
  }
}

export default withRouter(LoginForm);