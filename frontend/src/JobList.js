import React from 'react';
import JobCard from './JobCard';
import JoblyApi from './JoblyApi';
import decode from 'jwt-decode'

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appliedJobsIds: []
    }
  }

  async componentDidMount() {
    let jobs = await JoblyApi.allApplications()
    let appliedJobs = jobs.filter(job => job.state === "applied")
    let appliedJobsIds = []
    appliedJobs.forEach(job => appliedJobsIds.push(job.id))
    console.log(appliedJobs)
    this.setState({ appliedJobsIds })
  }
  
  render() {
    return (
      <div className="text-center justify-content-center">
        {this.props.jobs.map(job => {
          return <JobCard jobList={this.state.appliedJobsIds} currentToken={this.props.currentToken} job={job} key={job.id} id={job.id} />
        })}
      </div>
    );
  }
}

export default JobList;