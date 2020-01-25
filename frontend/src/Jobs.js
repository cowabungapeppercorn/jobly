import React, { PureComponent } from "react";
import JobList from './JobList';
import JoblyApi from './JoblyApi';
import Pagination from './Pagination';
import SearchForm from './SearchForm';

class Jobs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      currentJobs: [],
      loading: false,
      currentPage: 1,
      jobsPerPage: 20
    }
    this.searchJobs = this.searchJobs.bind(this);
    this.getCurrentJobs = this.getCurrentJobs.bind(this);
    this.paginate = this.paginate.bind(this);
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let jobs = await JoblyApi.getAllJobs();
    let currentJobs = this.getCurrentJobs(this.state.currentPage, jobs);
    this.setState({ jobs, currentJobs, loading: false });
  }

  async searchJobs(query) {
    let jobs = await JoblyApi.getSearchedJobs(query);
    this.setState({ jobs });
  }
  
  getCurrentJobs(currentPage, jobs) {
    const indexOfLastJob = currentPage * this.state.jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - this.state.jobsPerPage;
    let currentJobs;
    if (jobs) {
      currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
    }
    return currentJobs;
  }

  paginate(pageNumber) {
    let currentJobs = this.getCurrentJobs(pageNumber, this.state.jobs);
    this.setState({ currentPage: pageNumber, currentJobs });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="container jobs">
          <SearchForm search={this.searchJobs} />
          <JobList currentToken={this.props.currentToken} jobs={this.state.currentJobs} />
          <Pagination postsPerPage={this.state.jobsPerPage}
                      totalPosts={this.state.jobs.length}
                      paginate={this.paginate}
                      currentPage={this.state.currentPage} />
        </div>
      );
    }
  }
}

export default Jobs;