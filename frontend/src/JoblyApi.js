import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = window.localStorage.getItem('_token');

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `${BASE_URL}/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData})).data;
        // axios sends query string data via the "params" key,
        // and request body data via the "data" key,
        // so the key we need depends on the HTTP verb
    }

    catch(err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getAllCompanies(){
    let res = await this.request('companies');
    return res.companies;
  }

  static async getSearchedCompanies(query) {
    let res = await this.request(`companies`, { search: query });
    return res.companies;
  }

  static async getAllJobs() {
    let res = await this.request('jobs');
    return res.jobs;
  }

  static async getSearchedJobs(query) {
    let res = await this.request(`jobs`, { search: query });
    return res.jobs;
  }

  static async login(userData) {
    let res = await this.request('login', userData, "post");
    return res.token;
  }

  static async register(userData) {
    let res = await this.request('users', userData, "post");
    return res.token;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }
 
  static async updateUser(username, formData){
    if (!formData.photo_url) {formData.photo_url = "http://www.cycat.io/wp-content/uploads/2018/10/Default-user-picture.jpg"}
    let res = await this.request(`users/${username}`, formData, "patch");
    return res.user;
  }

  static async apply(id, username) {
    let res = await this.request(`jobs/${id}/apply`, { username }, "post")
    return res.message
  }

  static async allApplications() {
    let res = await this.request('jobs/')
    return res.jobs
  }
 }

export default JoblyApi;