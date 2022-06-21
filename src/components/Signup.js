import React, { useState } from "react";
import Header from '../components/Header';
import '../App.css';
const Signup = ()=>{
const [name, setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const submitData = (e) =>{
    e.preventDefault();

    console.log("name",name," email",email," password",password);
}
    return(
        <>
        <Header/>
        <div className="App">
            <h1>Signup</h1>
            <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter Name ..."/><br/><br/>
            <input type="text" name="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter Email ..."/><br/><br/>
            <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="ENter Password"/><br/><br/>
            <button onClick={(e)=>submitData(e)}>Signup</button>
        </div>
        </>
    );
}

export default Signup;