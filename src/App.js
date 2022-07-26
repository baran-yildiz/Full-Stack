import React, { Component } from 'react';
import Navi from './Navi';
import Sidebar from './Sidebar';
import Suggests from './Suggests';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

export default class App extends Component {

  state = { search: "", suggestions: [] };

  //After insert sth to searchbox changes search value..
  changeSearch = (e) => {
    this.setState({ search: e.target.value });
  }

  //Fetching data from Local ( After data updates(from innosabi api) in Laravel )..
  async componentDidMount() {
    let response = await axios.get('http://127.0.0.1:8000/api/suggestion');
    if (response.status === 200) {
      this.setState({ suggestions: response.data.suggestions });
    }
  }

  //Filter data acoording to search input..
  async fetch(search) {
    let url = 'http://127.0.0.1:8000/api/suggestionsSearch/' + search;
    const response = await axios.get(url);
    if (response.status === 200) {
      return response;
    }
  }

  //After click to submit button...
  submit = async (search) => {
    if (search === "") {
      this.componentDidMount();
    } else {
      let response = await this.fetch(search);
      this.setState({ suggestions: response.data.suggestions });
    }

  };

  render() {
    return (
      <div style={{ backgroundColor: 'palegreen' }}>
        <Container>
          <Row>
            <Navi search={this.state.search} changeSearch={this.changeSearch}
              submit={this.submit} />
          </Row>
          <Row>
            <Suggests search={this.state.search} suggestions={this.state.suggestions} />
          </Row>
        </Container>
      </div>
    );
  }

}

