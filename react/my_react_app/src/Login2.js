import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRequestWithoutHeader } from "./CommonMethods";
import Header from "./Header";

function Login2(){

    let navigate = useNavigate();
    const [email, setMyEmail] = useState("");
    const [password, setMyPassword] = useState("");
    const [output, setOutput] = useState({});
    const [errorObj, setErrorObj] = useState("");
    const [image, setImage] = useState();

    const loginBtn = () =>{
        
        let anObj = {"email": email, "password": password}
        // console.log(email + " - " + password);

        postRequestWithoutHeader("login3", anObj)
        // .then(res => res.json())
        // .then(res2 => {console.log(res2); setOutput(res2);})
        // .catch(error => {console.log(error);})
        .then(res => {
            if(!res.ok){
                setOutput({});
                throw res;
            }else{
                setErrorObj("");
                res.json().then(res2 => {console.log(res2); setOutput(res2); localStorage.setItem("user_id", res2.id); localStorage.setItem("token", res2.token); })
                navigate("/Contact");
            }
        })
        .catch(err => err.json().then(err2 => setErrorObj(err2.message)))
    };

    return(
        <>
            <Header current = "Login2"/>
            <div className="container-fluid" style={{backgroundColor:"beige", padding:"1%"}}>
                <div className="row row_main">
                <h1>Login here...</h1>
                    <div className="row" style={{backgroundColor:"gainsboro"}}>
                        <div className="col-6">
                        <div className="row form-group">
                            <div className="row">
                                <div className="col-4">
                                    <label>Enter email:</label>
                                </div>
                                <div className="col-7">
                                    <input value={email} name="email" type="text" className="form-control" placeholder="example@hotmail.com" onChange={e => setMyEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <label>Enter password:</label>
                                </div>
                                <div className="col-7">
                                    <input value={password} name="password" type="text" className="form-control" placeholder="some password" onChange={e => setMyPassword(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button className="btn btn-primary" onClick={loginBtn}>Login</button>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-6">
                        <div className="row">
                            <h2>
                                {errorObj == "" ? "" : errorObj}
                                {Object.keys(output).length == 0 ? "" : <ul>
                                    <li>id: {output.id}</li>
                                    <li>email: {output.email}</li>
                                    <li>name: {output.name}</li>
                                    <li>mobile: {output.mobile}</li>
                                    <li>address: {output.address}</li>
                                    <li><img src={"http://localhost:8080/getImage/" + output.id}></img></li>
                                </ul>}
                                
                                
                            </h2>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Login2;