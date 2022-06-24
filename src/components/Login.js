import React, { useState } from "react";
import Header from '../components/Header';

import "../App.css";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const submitData = async(e)=>{
        e.preventDefault();
        // alert("as");

        let result = await fetch('http://localhost:5000/login', {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        result = await result.json();

        if (result) {
            // alert("success");
            // console.log("result", JSON.stringify(result));
            localStorage.setItem("user", JSON.stringify(result))
            navigate('/profile');
        }
        
        // console.log("email",email,"password",password);
    }
    return(
        <>
        <Header/>
        <div className="App">
            <h3>User Login</h3>
            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email .."/><br/><br/>
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password .."/><br/><br/>
            <button onClick={(e)=>submitData(e)}>Login</button>

        </div>
        </>
    );

}

export default Login;