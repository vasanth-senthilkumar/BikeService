import React, { Component } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

class Cards extends Component {

  constructor(){
    super();
    this.state = {
      show: false
    }
  }

  showModal = () => {
    this.setState({show: true});
  }

  handleClose = () => {
    this.setState({show: false})
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    alert('your bike has been booked..!!')
    this.setState({show: false});
  }

  render(){
    return(
      <div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.image} />
            <Card.Body>
              <Card.Title>{this.props.name}</Card.Title>
              <Card.Text>
                Price : {this.props.price}
              </Card.Text>
              <Card.Text>
                Product Type: {this.props.product_type}
              </Card.Text>
              <Button variant="primary" onClick={this.showModal}>Book</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.onFormSubmit}>
              <label>Name</label>
              <input type="text" class="form-control" required/>
              <label>Email</label>
              <input type="email" class="form-control" required/>
              <label>Phone Number</label>
              <input type="number" class="form-control" required/><br/>
              <button class="btn btn-primary" type="submit">Save Changes</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
      </div>
    );
  }
}

export default Cards;
