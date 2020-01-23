import React, { PureComponent } from "react";
import JoblyApi from './JoblyApi';
import CompanyList from './CompanyList';
import SearchForm from './SearchForm';

class Companies extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      loading: true
    }
    this.searchCompanies = this.searchCompanies.bind(this);
  }

  async componentDidMount() {
    let companies = await JoblyApi.getAllCompanies();
    this.setState({ companies, loading: false });
  }

  async searchCompanies(query) {
    let companies = await JoblyApi.getSearchedCompanies(query);
    this.setState({ companies });
  } 

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="container">
          <SearchForm search={this.searchCompanies} />
          <CompanyList companies={this.state.companies} />
        </div>
      );
    }
  }
}

export default Companies;