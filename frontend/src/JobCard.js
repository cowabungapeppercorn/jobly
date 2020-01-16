import React from 'react';
import './Card.css';
import JoblyApi from './JoblyApi';
import decode from 'jwt-decode'
import JobList from './JobList';


class JobCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applied: false 
    }
    this.handleApply = this.handleApply.bind(this)
  }

  componentDidMount() {
    if(this.props.jobList.includes(this.props.id)) {
      this.setState({applied: true})
    }
  }

  async handleApply(id) {
    let username = decode(this.props.currentToken).username
    JoblyApi.apply(id, username)
    this.setState({applied: true})
  }

  render() {

    let { title, salary, equity } = this.props.job;
    let disabled = this.state.applied === true ? "disabled" : ""
    return (
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Salary: {salary}</p>
          <p className="card-text">Equity: {equity}</p>
        </div>
        <button onClick={() => this.handleApply(this.props.id)} className={`btn btn-info ${disabled}`}>{disabled ? "Application Sent!" : "APPLY"}</button>
      </div>
    );
  }
}

export default JobCard;