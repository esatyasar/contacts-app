import React, {useEffect} from 'react';
import "./Form.css"

function Form({setForm, form, contacts, setContacts, counter, setCounter}) {
    
    const onChangeName= (e) =>{
        setForm({...form, [e.target.name]:e.target.value})
    }

    const onChangePhone= (e) =>{
        setForm({...form, [e.target.name]:e.target.value})
    }

    useEffect(() => {
        setForm({fullName:"", phoneNumber:""})
    }, [contacts])

    const err = document.querySelector("#err")
    
    function validate(phone) {
        var regex = /[0]{1}[0-9]{10}/;
        if (!regex.test(phone)) {
            err.innerHTML= "Invalid international phone number"
            } else {
            setContacts ([...contacts, form]);
            err.innerHTML = "";
            setCounter(counter+1)
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
