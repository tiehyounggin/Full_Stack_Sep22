import { useState } from "react";
import Header from "./Header";

function Register(){

    const [email, setMyEmail] = useState("");
    const [password, setMyPassword] = useState("");

    const registerBtn = () =>{
        
        let anObj = {"email": email, "password": password}
        console.log(email + " - " + password);

        fetch("http://localhost:8080/register",
        {
            method:"POST",
            body:JSON.stringify(anObj),
            headers:{
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(res2 => console.log(res2))
        .catch(error => console.log(error))
    };

    return(
        <>
            <Header current = "Register"/>
            <div className="container-fluid" style={{backgroundColor:"beige", padding:"1%"}}>
                <div className="row row_main">
                <h1>Register here...</h1>
                    <div className="row" style={{backgroundColor:"gainsboro"}}>
                        <div className="row form-group">
                            <div class="row">
                                <div className="col-2">
                                    <label>Enter email:</label>
                                </div>
                                <div className="col-4">
                                    <input value={email} name="email" type="text" className="form-control" placeholder="example@hotmail.com" onChange={e => setMyEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <label>Enter password:</label>
                                </div>
                                <div className="col-4">
                                    <input value={password} name="password" type="text" className="form-control" placeholder="some password" onChange={e => setMyPassword(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <button className="btn btn-primary" onClick={registerBtn}>Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;