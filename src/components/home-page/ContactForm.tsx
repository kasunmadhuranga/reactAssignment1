import React, { Component } from 'react';
import { Container, Col, Row, Form, Button } from "react-bootstrap";
// import  v4   from 'uuid';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    contactHander: (contact : object) => void;
    contactList: any;
    updateHandler: (contact : object) => void;
    fromUpdate?: boolean;
    closeHandler: () => void;
}

interface State {
    id: string;
    firstName : string;
    lastName : string;
    number : number;
}

export default class ContactForm extends Component<Props, State> {
  state = {
      id: this.props.contactList.id || uuidv4(),
      firstName: this.props.contactList.firstName || "",
      lastName: this.props.contactList.lastName ||  "",
      number: this.props.contactList.number || "",
    //   firstName : "",
    //   lastName : "",
    //   number : 0
  };

componentDidUpdate(){
    // console.log(this.state);
}

addContact = (e: any) => {
    this.setState({
        id: uuidv4()
    })
    e.preventDefault();
    this.props.contactHander(this.state);
}

update = () =>{
    this.props.updateHandler(this.state);
    this.props.closeHandler();
}

    render() {
        return (
            <Container>
                <form onSubmit={this.addContact}>
               <Row>
                   <Col>
                            <div className='pb-2 pt-2'><label>First Name</label></div>
                            <Form.Control type="text" value={this.state.firstName} placeholder="First Name" onChange={(e) => this.setState({ firstName: e.target.value}) }/>
                   </Col>
               </Row>
                <Row>
                    <Col>
                            <div className='pb-2 pt-4'><label>Last Name</label></div>
                            <Form.Control type="text" value={this.state.lastName} placeholder="Last Name" onChange={(e) => this.setState({ lastName: e.target.value })} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                            <div className='pb-2 pt-2'><label>Number</label></div>
                            <Form.Control type="text" value={this.state.number} placeholder="Number" onChange={(e) => this.setState({ number: parseInt(e.target.value) })} />
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-4 upd-btn">
                        {this.props.fromUpdate? (
                            <>
                                    <Button type='button' onClick={this.update} variant='primary'>Update</Button>
                                    <Button type='button' onClick={this.props.closeHandler} variant='primary'>Cancel</Button>
                            </>
                        ) : (
                                    <Button type="submit" variant="primary">Add</Button>
                        )}
                        {/* <Button type="submit" variant="primary">Add</Button>{' '} */}
                    </Col>
                </Row>
                </form>
            </Container>
        )
    }
}
