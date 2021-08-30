import React, {useState}from 'react';
import Form from "../contacts/form/Form";
import List from "../contacts/list/List";
import "./Contacts.css"

function Contacts() {
    const [form,setForm] = useState({fullName:"", phoneNumber:""});
    const [contacts,setContacts] = useState([]);
    const [counter,setCounter] = useState(0);

    function handleRemove (id) {
        const newList = contacts.filter((item) =>{
            return item.phoneNumber !== id;
            
        })
            setContacts(newList);
            setCounter(counter-1);
    }

    return (
        <div className="main-container">
            <h1 className = "header">
                Contacts <span className="counter">({counter})</span>
            </h1>
            <List handleRemove={handleRemove} contacts = {contacts} />
            <Form counter={counter} setCounter={setCounter} contacts = {contacts} setContacts={setContacts} form={form} setForm={setForm}/>
        </div>
    )
}

export default Contacts


