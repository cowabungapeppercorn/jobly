import React, { Component } from "react";
import { withRouter } from "react-router";
import { Form, Button, Col, Row } from "react-bootstrap";


class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let registered = this.props.register(this.state)
    this.setState({username: "", password: "", first_name: "", last_name: "", email: ""});
    if (registered) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <Row>
        <Col lg={{ span: 6, offset: 3 }}>
          <Form onSubmit={this.handleSubmit} className="text-left">
            <Form.Group controlId="username">
              <Form.Label>username</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="text"
                name="username"
                value={this.state.username}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>password</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="password"
                name="password"
                value={this.state.password}
              />
            </Form.Group>
            <Form.Group controlId="first_name">
              <Form.Label>first name</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="text"
                name="first_name"
                value={this.state.first_name}
              />
            </Form.Group>
            <Form.Group controlId="last_name">
              <Form.Label>last name</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="text"
                name="last_name"
                value={this.state.last_name}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>email</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="text"
                name="email"
                value={this.state.email}
              />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default withRouter(RegisterForm);