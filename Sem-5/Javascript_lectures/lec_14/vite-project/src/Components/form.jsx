import React, { useState } from 'react'

const Form = () => {
// let [firstname, setFirstName] = useState("");
// let [lastname, setLastName] = useState("");
// let [address, setAddress] = useState("");

let [form, setForm] = useState({
    firstname : "abcd",
    lastname : "wxyz",
    age : 24,
    address : "delhi"
})

function handleSubmit(){
    console.log(form);
    e.preventDefault();
}

    return(
        <>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="firstname">FirstName</label>
            <input type="text" id="firstname" value={form.firstname} 
            onChange={(e) => setForm({...form, firstname: e.target.value})}/>
        </div>
        <div>
            <label htmlFor="lastname">LastName</label>
            <input type="text" id="lastname" value={form.lastname} 
            onChange={(e) => {
                setForm({...form, lastname:e.target.value})
            }} />
        </div>
        <div>
            <label htmlFor="age">Age</label>
            <input type="text" id="age" value={form.age}
            onChange={(e) => setForm({...form, age:e.target.value})} />
        </div>
        <div>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" value={form.address} 
            onChange={(e) => setForm({...form, address:e.target.value})} />
        </div>
        <div><button type='submit'>Submit</button></div>
        </form>
        </>
    )
}
export default Form;