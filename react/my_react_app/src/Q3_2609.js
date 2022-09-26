import { useState } from "react";

function Q3_2609(){

    const [pageNum, setPageNum] = useState("");
    const [validation, setValidation] = useState(false);
    const [anArr, setAnArr] = useState();
    const [anObj, setAnObj] = useState({});

    const getBtn = () => {
        console.log(pageNum);
        if(pageNum == ""){
            setValidation(true);
            setAnObj({});
        }else{
            setValidation(false);
            setAnObj({});

            fetch("https://reqres.in/api/users?page=" + pageNum,
            {
                method:"GET"
            })
            .then(res => res.json())
            .then(res2 => setAnArr(res2["data"]))
            .catch(err => console.log(err))

        }
    };

    // const showDetail = (anObj) => {
    //     console.log("ID: " + anObj.id + "\nFirst Name: " + anObj.first_name + "\nLast Name: " + anObj.last_name + "\nEmail: " + anObj.email + "\nImage: " + anObj.avatar);
    // }

    return(
        <>
            <h1>Q3 - Call GET api</h1>
            <div>
                <div className="row form-group">
                    <div className="col-2">
                        <label for="inputName">Enter page:</label>
                    </div>
                    <div className="col-4">
                        <input id="inputName" type="text" className="form-control" placeholder="1, 2, 3..." onChange={e => setPageNum(e.target.value)}/>
                        {validation ? <span className="highlight_red">Please ensure field is not empty!!</span> : ""}
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={getBtn}>Get me!!</button>
                </div>
                <span style={{display:"block", borderBottom:"1px solid black"}}>Output:</span>
                <br></br>
                    {
                        (anArr && anArr.length <= 0) ? "No data" : ""
                    }
                    <table className="table table-hover table_main" style={{backgroundColor:"whitesmoke"}}><thead><tr><th scope="col">first_name</th><th scope="col">avatar</th></tr></thead><tbody>
                    {
                        anArr && anArr.map((anObj, index) => {
                            return <tr onClick={() => {setAnObj(anObj); console.log("Here "+ anObj)}} key={index}><td>{anObj.first_name}</td><td><img src={anObj.avatar} width="150px" height="150px"></img></td></tr>
                        })
                    }
                    </tbody></table>
                    <br></br>
                    {
                        (Object.keys(anObj).length > 0) ? <table className="table table-hover" style={{backgroundColor:"whitesmoke"}}>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Avatar</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                <tr>
                                    <td>{anObj.id}</td>
                                    <td>{anObj.first_name}</td>
                                    <td>{anObj.last_name}</td>
                                    <td>{anObj.email}</td>
                                    <td><img src={anObj.avatar} width="100px" height="100px"></img></td>
                                </tr>
                            }
                            </tbody> 
                    </table> : "" 
                    }
            </div>
        </>
    )
}

export default Q3_2609;