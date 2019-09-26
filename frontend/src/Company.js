import React, { PureComponent } from "react";
import JoblyApi from './JoblyApi'
import JobList from './JobList';

class Company extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      jobs: []
    }
  }

  async componentDidMount() {
    let { handle } = this.props.match.params;
    let { name, description, jobs } = await JoblyApi.getCompany(handle);
    this.setState({
      name,
      description,
      jobs
    });
  }

  render() {

    let { name, description, jobs } = this.state;

    return (
      <div className="container justify-content-center">
        <h1>{name}</h1>
        <h3>{description}</h3>
        <JobList currentToken={this.props.currentToken} jobs={jobs} />
      </div>
    );
  }
}

export default Company;