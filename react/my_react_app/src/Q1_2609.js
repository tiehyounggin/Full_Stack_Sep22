import { useState } from "react";

function Q1_2609(){

    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [output, setOutput] = useState();
    const [validation, setValidation] = useState(false);

    const postBtn = () => {
        // console.log(name + " - " + job);

        if(name == "" || job == ""){
            setValidation(true);
            setOutput();
        }else{
            setValidation(false);

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

        
    };

    return(
        <>
            <h1>Q1 - Call POST api</h1>
            <div>
                <div className="row form-group">
                    <div className="col-2">
                        <label for="inputName">Enter name:</label>
                    </div>
                    <div className="col-4">
                        <input id="inputName" type="text" className="form-control" placeholder="John" onChange={e => setName(e.target.value)}/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-2">
                        <label for="inputJob">Enter job:</label>
                    </div>
                    <div className="col-4">
                        <input id="inputJob" type="text" className="form-control" placeholder="Worker" onChange={e => setJob(e.target.value)}/>
                        {validation ? <span className="highlight_red">Please ensure field is not empty!!</span> : ""}
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={postBtn}>Post me</button>
                </div>
                <span style={{display:"block", borderBottom:"1px solid black"}}>Output:</span>
                <br></br>
                <span>
                    {
                       JSON.stringify(output)
                    }
                </span>
            </div>
        </>
    )
}

export default Q1_2609;