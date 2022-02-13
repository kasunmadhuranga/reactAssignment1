import React, { useState, useEffect } from 'react';
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { Modal } from "react-bootstrap";
import api from "../../api";

interface Props {

}

interface IList {
    id: string, 
    firstName: string, 
    lastName: string, 
    number: number 
}

const HomePage = (props: Props) => {

    // const [contactList, setcontactList] = useState([]);
    const [contactList, setContactList] = useState<IList[]>([]);

    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(Object);
    const [updatedItem, setUpdatedItem] = useState(Object);
    const [deletedItem, setCeletedItem] = useState(Object);

    const getContacts = async () => {
        const response = await api.get("/contact")
        return response.data;
    }

    useEffect(() => {
        console.log("asdsd ddsdf");
        getContacts().then ((res : any) => {
            setContactList(res);
        }).catch ((error : any) =>{
            console.log(error);
        })
    }, [updatedItem, deletedItem])

    const contactHander = async (contact: any) => {

        
        const request = contact;
        const response = await api.post("/contact", request).then(( res : any) => {
            setContactList([...contactList, res.data])
        }).catch(( error : any) => {
            console.log(error);
        })
        return response;
    }

    const updateHandler = async (contact: any) => {
        let updatedItem = contact;


        await api.put(`/contact/${contact.id}`, updatedItem).then(( res : any) => {
            setUpdatedItem(contact.id);
        }).catch(( error : any) => {
            console.log(error);
        });


   
    }

    const closeHandler = () => {
        setShow(false);
    }

    const deletHandler = async (selected: any) => {


        await api.delete(`/contact/${selected.id}`).then((res: any) => {
            setCeletedItem(selected.id);
        }).catch((error: any) => {
            console.log(error);
        });

        // setContactList(filteredItems);
    }

    const handleClose = () => setShow(false);

    const handleEdit = (selected: any) => {
        setSelected(selected);
        setShow(true);
    }

    const modal = (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ContactForm contactHander={contactHander} closeHandler={closeHandler} updateHandler={updateHandler} fromUpdate={true} contactList={selected}/>
                </Modal.Body>
            </Modal>
        </>
    );

    return (
        <>
            <ContactForm contactHander={contactHander} closeHandler={closeHandler} updateHandler={updateHandler} contactList="" />
           {contactList.length > 0 ? (
                <ContactList deletHandler={deletHandler} handleEdit={handleEdit} contactHander={contactHander} closeHandler={closeHandler} updateHandler={updateHandler} contactList={contactList}/>
            ) : ""
            }
            {modal}
        </>
    )
}

export default HomePage;