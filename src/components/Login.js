import React, { useState } from "react";
import Header from '../components/Header';

import "../App.css";

const Login = () =>{
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitData = (e)=>{
        e.preventDefault();
        alert();

        console.log("email",email,"password",password);
    }
    return(
        <>
        <Header/>
        <div className="App">
            <h3>User Login</h3>
            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email .."/><br/><br/>
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password .."/><br/><br/>
            <button onChange={(e)=>submitData(e)}>Login</button>

        </div>
        </>
    );

}

export default Login;