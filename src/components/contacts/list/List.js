import React, {useState} from 'react';
import "./List.css"

function List({contacts}) {
    const [filterText,setFilterText] = useState("");
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
        item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLocaleLowerCase()) 
        )
    });

    return (
        <div className="filter-container">
            <input onChange = {(e) =>{
                setFilterText(e.target.value)
                
            }} type="text" name="filter" id="filter" value = {filterText} placeholder="filter"/>
            <ul>
                {filtered.map((contacts,index) =>
                <li className="list" key={index}>
                    <span>{contacts.fullName}</span>
                    <span>{contacts.phoneNumber}</span>
                </li>
                )}
            </ul>
        </div>
    )
}

export default List
