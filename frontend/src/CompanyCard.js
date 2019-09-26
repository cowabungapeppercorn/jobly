import React from 'react';
import './Card.css';

class JobCard extends React.Component {
  render() {
    let { name, description } = this.props.company;
    return (
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    );
  }
}

export default JobCard;