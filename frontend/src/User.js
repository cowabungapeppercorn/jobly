import React, { PureComponent } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import JoblyApi from './JoblyApi';
import decode from 'jwt-decode'

class User extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      first_name: '',
      last_name: '',
      email: '',
      photo_url: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.username = ''
  }

  async componentDidMount() {
    if (this.props.currentToken) {
      let username = decode(this.props.currentToken).username
      let user = await JoblyApi.getUser(username);
      this.username = user.username
      this.setState({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        photo_url: user.photo_url
      });
    }
    else {
      this.props.history.push('/login');
    }
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    let update = await JoblyApi.updateUser(this.username, this.state)
    this.setState({
      password: '',
      first_name: update.first_name,
      last_name: update.last_name,
      email: update.email,
      photo_url: update.photo_url
    });
  }

  render() {
    return (
      <Row>
        <Col lg={{ span: 6, offset: 3 }}>
          <h3>edit your profile, {this.username}: </h3>
          <Form onSubmit={this.handleSubmit} className="text-left">
            <Form.Group controlId="first_name">
              <Form.Label>first name: </Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="text"
                name="first_name"
                value={this.state.first_name}
              />
            </Form.Group>
            <Form.Group controlId="last_name">
              <Form.Label>last name: </Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="text"
                name="last_name"
                value={this.state.last_name}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>email: </Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="text"
                name="email"
                value={this.state.email}
              />
            </Form.Group>
            <Form.Group controlId="photo_url">
              <Form.Label>photo url: </Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="text"
                name="photo_url"
                value={this.state.photo_url}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>password: </Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="password"
                name="password"
                value={this.state.password}
              />
            </Form.Group>
            <Button variant="primary" type="submit">Update</Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default User;