import React, {useState, useEffect} from 'react';
import "./Form.css"

function Form({contacts, setContacts}) {
    const initialFormValues = {fullName:"", phoneNumber:""};
    const [form,setForm] = useState(initialFormValues);

    const onChangeName= (e) =>{
        setForm({...form, [e.target.name]:e.target.value})
    }

    const onChangePhone= (e) =>{
        setForm({...form, [e.target.name]:e.target.value})
    }

    useEffect(() => {
        setForm(initialFormValues)
    }, [contacts])

    const err = document.querySelector("#err")
    
    function validate(phone) {
        var regex = /[0]{1}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}/;
        if (!regex.test(phone)) {
            err.innerHTML= "Invalid international phone number"
            } else {
            setContacts([...contacts, form]);
            err.innerHTML = "";
        }
    }

    const onSubmitBtn =(e) => {
        e.preventDefault();
        if(form.fullName === "" || form.phoneNumber === ""){
            return false; 
        }else{
            validate(form.phoneNumber);
        }
    }
    return (
        <div>
            <form className="form-container" action="#" onSubmit = {onSubmitBtn}>
                <div className="name-container">
                    <input className="form-input" onChange = {onChangeName} type="text" name="fullName" id="fullName" value={form.fullName} placeholder="Fullname"/>
                </div>
               <div className="phone-container">
                    <input className="form-input" onChange = {onChangePhone} type="tel" name="phoneNumber" id="phoneNumber" value={form.phoneNumber} placeholder="(ex:05053235232)"/>
                </div>
                <span id="err"></span>
                <div className="btn-container">
                    <button className="btn">Add Contact</button>
                </div>
            </form>
        </div>
    )
}

export default Form
