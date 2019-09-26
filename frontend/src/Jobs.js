import React, { PureComponent } from "react";
import JobList from './JobList';
import JoblyApi from './JoblyApi';
import SearchForm from './SearchForm';

class Jobs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }
    this.searchJobs = this.searchJobs.bind(this);
  }

  async componentDidMount() {
    let jobs = await JoblyApi.getAllJobs();
    this.setState({ jobs });
  }

  async searchJobs(query) {
    let jobs = await JoblyApi.getSearchedJobs(query);
    this.setState({ jobs });
  } 

  render() {
    return (
      <div className="container">
        <SearchForm search={this.searchJobs} />
        <JobList currentToken={this.props.currentToken} jobs={this.state.jobs} />
      </div>
    );
  }
}

export default Jobs;