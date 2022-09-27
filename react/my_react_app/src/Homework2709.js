import React from "react";
import Header from "./Header";
import MyList from "./MyList";

class Homework2709 extends React.Component{

    constructor(){
        super();
        this.state = {
            "pageNumber": "",
            "anArr": [],
            "anObj": {},
            "name": "",
            "job": "",
            "output": "",
            "arrOfObj":[
                {
                    "name": "Tim",
                    "age": 22
                },
                {
                    "name": "Johnson",
                    "age": 43
                },
                {
                    "name": "Nick",
                    "age": 33
                },
                {
                    "name": "Jackson",
                    "age": 57
                }
            ]
        }
    }

    getBtn = () => {
        // console.log(this.state.pageNumber);

        fetch("https://reqres.in/api/users?page=" + this.state.pageNumber,
        {
            method:"GET"
        })
        .then(res => res.json())
        .then(res2 => this.setState({"anArr": res2["data"]}))
        .catch(err => console.log(err))
    };

    // testBtn = () => {
    //     console.log(this.state.anArr);
    // }

    postBtn = () => {
        let obj = {"name": this.state.name, "job": this.state.job};

        fetch("https://reqres.in/api/users",
            {
                method:"POST",
                body:JSON.stringify(obj),
                headers:{
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(res2 => {console.log(res2); this.setState({"output": res2});})
            .catch(err => console.log(err))
    }

    render(){
        return(
            <>
                <Header current = "homework2709"/>
                <div className="container-fluid" style={{backgroundColor:"beige", padding:"1%"}}>
                    <div className="row row_main">
                        <h1>Hello there...</h1>
                        <div className="row" style={{backgroundColor:"gainsboro"}}>
                            <h2>Get api</h2>
                            <div>
                                <div className="row form-group">
                                    <div className="col-2">
                                        <label for="inputName">Enter page:</label>
                                    </div>
                                    <div className="col-4">
                                        <input id="inputName" type="text" className="form-control" placeholder="1, 2, 3..." onChange={e => this.setState({"pageNumber": e.target.value}) }/>
                                        {/* {validation ? <span className="highlight_red">Please ensure field is not empty!!</span> : ""} */}
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary" onClick={this.getBtn}>Get me!!</button>
                                    </div>
                                    <span style={{display:"block", borderBottom:"1px solid black"}}>Output:</span>
                                    
                                    {
                                        this.state.anArr.length > 0 ? <MyList anArr = {this.state.anArr}/> : ""
                                    }
                                    {/* <MyList anArr = {this.state.anArr}/> */}

                                    {/* <button className="btn btn-primary" onClick={this.testBtn}>Test me!!</button> */}
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{backgroundColor:"gainsboro"}}>
                            <h2>POST api</h2>
                            <div className="row form-group">
                                <div className="col-2">
                                    <label for="inputName">Enter name:</label>
                                </div>
                                <div className="col-4">
                                    <input id="inputName" type="text" className="form-control" placeholder="John" onChange={e => this.setState({"name": e.target.value})}/>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-2">
                                    <label for="inputJob">Enter job:</label>
                                </div>
                                <div className="col-4">
                                    <input id="inputJob" type="text" className="form-control" placeholder="Worker" onChange={e => this.setState({"job": e.target.value})}/>
                                    {/* {validation ? <span className="highlight_red">Please ensure field is not empty!!</span> : ""} */}
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" onClick={this.postBtn}>Post me</button>
                            </div>
                            <span style={{display:"block", borderBottom:"1px solid black"}}>Output:</span>
                            <br></br>
                            <span>
                                {
                                    this.state.output != "" ? JSON.stringify(this.state.output) : ""
                                }
                            </span>
                        </div>
                        <div className="row" style={{backgroundColor:"gainsboro"}}>
                            <h2>Conditional statement in class component ~</h2>
                            <h3>Age is highlighted in red if 40 and above!</h3>
                            <div>
                                {
                                    this.state.arrOfObj.map((anObj, index) => {
                                        return <div key={index}>
                                            <span className={anObj.age > 40 ? "highlight_red":""}>Name: {anObj.name} -- Age: {anObj.age}</span>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Homework2709;