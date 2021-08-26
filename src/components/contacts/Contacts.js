import React, {useState}from 'react';
import Form from "../contacts/form/Form";
import List from "../contacts/list/List";
import "./Contacts.css"

function Contacts() {
    const [contacts,setContacts] = useState([]);
    return (
        <div className="main-container">
            <h1 className = "header">
                Contacts
            </h1>
            <List contacts = {contacts} />
            <Form contacts = {contacts} setContacts={setContacts}/>
        </div>
    )
}

export default Contacts


