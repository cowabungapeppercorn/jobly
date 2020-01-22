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
            <Form.Group controlId="password">
              <Form.Label>password</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                placeholder="password"
                type="password"
                name="password"
                value={this.state.password}
              />
            </Form.Group>
            <Form.Group controlId="first_name">
              <Form.Label>first name</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                placeholder="first_name"
                type="text"
                name="first_name"
                value={this.state.first_name}
              />
            </Form.Group>
            <Form.Group controlId="last_name">
              <Form.Label>last name</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                placeholder="last_name"
                type="text"
                name="last_name"
                value={this.state.last_name}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>email</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                placeholder="email"
                type="text"
                name="email"
                value={this.state.email}
              />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
      // <form onSubmit={this.handleSubmit}>
      //   <div>
      //     <label htmlFor="username"></label>
      //     <input
      //       onChange={this.handleChange}
      //       placeholder="Username"
      //       type="text"
      //       name="username"
      //       id="username"
      //       value={this.state.username}
      //     />
      //   </div>
      //   <div>
      //     <label htmlFor="password"></label>
      //     <input
      //       onChange={this.handleChange}
      //       placeholder="Password"
      //       type="password"
      //       name="password"
      //       value={this.state.password}
      //     />
      //   </div>
      //   <div>
      //     <label htmlFor="first_name"></label>
      //     <input
      //       onChange={this.handleChange}
      //       placeholder="First Name"
      //       type="text"
      //       name="first_name"
      //       value={this.state.first_name}
      //     />
      //   </div>
      //   <div>
      //     <label htmlFor="last_name"></label>
      //     <input
      //       onChange={this.handleChange}
      //       placeholder="Last Name"
      //       type="text"
      //       name="last_name"
      //       value={this.state.last_name}
      //     />
      //   </div>
      //   <div>
      //     <label htmlFor="email"></label>
      //     <input
      //       onChange={this.handleChange}
      //       placeholder="email"
      //       type="text"
      //       name="email"
      //       value={this.state.email}
      //     />
      //   </div>
      //   <button>Register</button>
      // </form>
    );
  }
}

export default withRouter(RegisterForm);