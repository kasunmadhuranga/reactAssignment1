import React from 'react';
import { Container, Col, Row, Form, Table, Button } from "react-bootstrap";

interface Props {
    contactList : any;
    contactHander: (contact: object) => void;
    updateHandler: (contact: object) => void;
    closeHandler: () => void;
    handleEdit: (contact: object) => void;
    deletHandler: (contact: object) => void;
}



const ContactList = (props: Props) => {
    const tableHeader = (
        <>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Number</th>
                <th>Action</th>
            </tr>
        </>
    );

    const contactList = props.contactList;

    const tableBody = contactList.map((contact: any, index: number) => 
        <tr key={index}>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.number}</td>
            <td>
                <Button variant='success' size='sm' onClick={() => props.handleEdit(contact)}>Edit</Button>
                <Button variant='danger' size='sm' onClick={() => props.deletHandler(contact)}>Delete</Button>
            </td>
        </tr>
    );

  return (
      <Container className="mt-3">
          <Table striped bordered hover>
              <thead>
                  {tableHeader}    
              </thead>
              <tbody>
                  {tableBody}
              </tbody>
          </Table>
      </Container>
  )
}

export default ContactList;