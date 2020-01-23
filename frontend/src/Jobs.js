import React, { PureComponent } from "react";
import JobList from './JobList';
import JoblyApi from './JoblyApi';
import SearchForm from './SearchForm';

class Jobs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      loading: false,
      currentPage: 1,
      jobsPerPage: 25
    }
    this.searchJobs = this.searchJobs.bind(this);
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let jobs = await JoblyApi.getAllJobs();
    this.setState({ jobs, loading: false });
  }

  async searchJobs(query) {
    let jobs = await JoblyApi.getSearchedJobs(query);
    this.setState({ jobs });
  } 

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="container">
          <SearchForm search={this.searchJobs} />
          <JobList currentToken={this.props.currentToken} jobs={this.state.jobs} />
        </div>
      );
    }
  }
}

export default Jobs;