import React, { PureComponent } from "react";
import JoblyApi from './JoblyApi';
import CompanyList from './CompanyList';
import SearchForm from './SearchForm';

class Companies extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    }
    this.searchCompanies = this.searchCompanies.bind(this);
  }

  async componentDidMount() {
    let companies = await JoblyApi.getAllCompanies();
    this.setState({ companies });
  }

  async searchCompanies(query) {
    let companies = await JoblyApi.getSearchedCompanies(query);
    this.setState({ companies });
  } 

  render() {
    return (
      <div className="container">
        <SearchForm search={this.searchCompanies} />
        <CompanyList companies={this.state.companies} />
      </div>
    );
  }
}

export default Companies;