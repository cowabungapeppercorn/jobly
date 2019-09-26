import React from 'react';
import { Link } from 'react-router-dom';
import CompanyCard from './CompanyCard';


class CompanyList extends React.Component {
  render() {
    return (
      <div>
        {this.props.companies.map(comp => {
          return (
            <Link to={`/companies/${comp.handle}`} key={comp.handle}> 
              <CompanyCard company={comp} /> 
            </Link>
        )})}
      </div>
    );
  }
}

export default CompanyList;