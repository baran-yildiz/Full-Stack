import React, { Component } from 'react';
import { Navbar, NavbarBrand, Form, FormGroup, Input, InputGroup, Button, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navi extends Component {
  render() {
    return (
      <Navbar className="py-5" color="palegreen" dark expand="md" full light>
        <Col xs="3">
          <NavbarBrand href="/">
            <img src="img/logo.png" style={{ width: '75%' }}></img>
          </NavbarBrand>
        </Col>
        <Col xs="9">
          <Form>
            <FormGroup>
              <InputGroup>
                <Input placeholder="Search.."
                  onChange={(e) => this.props.changeSearch(e)} />
                <Button onClick={() => this.props.submit(this.props.search)}>
                  Submit
                </Button>
              </InputGroup>
            </FormGroup>
          </Form>
        </Col>
      </Navbar>
    );
  }
}