import React, { Component } from 'react';
import Card from './Card';
import { Navbar, Nav } from 'react-bootstrap';
import data from './data/bikerentals.json';

class Bikes extends Component {

  componentDidMount(){
    console.log(data.products);
  }

  render(){
    return(
      <div>
        <div>
          <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">Bike Rental</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="jumbotron">
          <h2>Bike Rental</h2>
        </div>
        <div className="d-flex justify-content-between flex-row flex-wrap align-content-around p-5">
          {
            data.products.map((object, i) => {
              return(
                <div key={object.id}>
                  <Card
                    image={object.image}
                    name={object.name}
                    price={object.price}
                    product_type={object.product_type}
                    />
                    <br/>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Bikes;
