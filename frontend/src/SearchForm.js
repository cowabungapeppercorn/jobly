import React from 'react';

class SearchForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ input: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.search(this.state.input);
    this.setState({ input: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input style={{ width: '40%' }} onChange={this.handleChange} type='text' placeholder='Search' name='input' id='input' value={this.state.input} />
        <button type='submit'>Search</button>
      </form>
    );
  }
}

export default SearchForm;