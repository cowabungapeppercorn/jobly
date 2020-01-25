import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

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
        <Row className="d-flex justify-content-center">
          <Col lg={8} className="d-flex justify-content-center">
            <Form inline onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Control onChange={this.handleChange} type='text' placeholder='Search' name='input' id='input' value={this.state.input} />
                <Button type='submit'>Search</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
    );
  }
}

export default SearchForm;