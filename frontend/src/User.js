import React, { PureComponent } from "react";
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
      <div>
        <h3>Profile</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="Username">Username</label>
            <p>{this.username}</p>
          </div>

          <div>
            <label htmlFor="first_name">Edit First Name: </label>
            <input
              onChange={this.handleChange}
              placeholder="First Name"
              type="text"
              name="first_name"
              value={this.state.first_name}
            />
          </div>
          <div>
            <label htmlFor="last_name">Edit Last Name: </label>
            <input
              onChange={this.handleChange}
              placeholder="Last Name"
              type="text"
              name="last_name"
              value={this.state.last_name}
            />
          </div>
          <div>
            <label htmlFor="email">Edit Email: </label>
            <input
              onChange={this.handleChange}
              placeholder="email"
              type="text"
              name="email"
              value={this.state.email}
            />
          </div>
          <div>
            <label htmlFor="photo_url">Edit Photo: </label>
            <input
              onChange={this.handleChange}
              placeholder="Edit Photo URL"
              type="text"
              name="photo_url"
              value={this.state.photo_url}
            />
          </div>
          <div>
            <label htmlFor="password">Re-Enter Password: </label>
            <input
              onChange={this.handleChange}
              placeholder="Re-Enter Password"
              type="password"
              name="password"
              value={this.state.password}
            />
          </div>
          <button>Update Profile</button>
        </form>
      </div>
    );
  }
}

export default User;