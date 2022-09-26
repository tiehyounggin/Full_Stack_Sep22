import { useState } from "react";


function Home(){

    const[username, setUsername] = useState("");
    const[aNumber, setNumber] = useState("");

    const text_change = (obj) => {
        let val = obj.target.value;
        // console.log(val);
        setUsername(val);
        // console.log("here: " + username);
    }

    // form validation
    const btn_click = () => {

    }

    const getNumber = () => {
        console.log(aNumber);
    }

    return(
        <>
            <h1>Home is here</h1>
            <h1>{username}</h1>
            <input onChange={(e) => text_change(e)} type="text" placeholder="Enter username"></input>
            {/* <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter username"></input> */}
            <br></br>
            <input onChange={e => setNumber(e.target.value)} type="text" placeholder="Enter a number"></input>
            <button style={{marginLeft:"5px"}} onClick={getNumber}>Get number!</button>
        </>
    )
}

export default Home;