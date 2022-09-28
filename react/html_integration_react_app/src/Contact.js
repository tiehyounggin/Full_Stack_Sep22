import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Contact(){

    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [output, setOutput] = useState("");

    const postBtn = () => {
        let anObj = {"name": name, "job": job};

            fetch("https://reqres.in/api/users",
            {
                method:"POST",
                body:JSON.stringify(anObj),
                headers:{
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(res2 => {console.log(res2); setOutput(res2)})
            .catch(err => console.log(err))
            
    }

    return(
        <>
            <Header/>

            <div className="jumbotron jumbotron-fluid page-header" style={{marginBottom:"90px"}}>
                <div className="container text-center py-5">
                    <h1 className="text-white display-3 mt-lg-5">Contact</h1>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0"><a className="text-white" href="">Home</a></p>
                        <i className="fa fa-circle px-3"></i>
                        <p className="m-0">Contact</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h1 className="section-title position-relative text-center mb-5">Contact Us For Any Query</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="contact-form bg-light rounded p-5">
                                <div id="success"></div>
                                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="form-row">
                                        <div className="col-sm-6 control-group">
                                            <input onChange={e => setName(e.target.value)} type="text" className="form-control p-4" id="name" placeholder="Enter name" required="required" data-validation-required-message="Please enter a name" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="col-sm-6 control-group">
                                            <input onChange={e => setJob(e.target.value)} type="text" className="form-control p-4" placeholder="Enter job" required="required" data-validation-required-message="Please enter a job" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                </form>
                                <div>
                                    <button onClick={postBtn} className="btn btn-primary btn-block py-3 px-5" type="submit" id="sendMessageButton">Post me!!</button>
                                </div>
                                <span>{JSON.stringify(output)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Contact;