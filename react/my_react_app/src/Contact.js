import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isTokenAlive } from "./CommonMethods";
import Header from "./Header";

function Contact(){

    let navigate = useNavigate();

    useEffect(() => {
        // console.log("in contact")
        console.log(isTokenAlive())
        let flag = isTokenAlive()

        if(flag == true){
            console.log("token is alive")
        }else{
            console.log("token not alive in contact page")
            navigate("/Login2")
        }
    }, [])

    return(
        
        <>
            <Header current = "contact"/>
            <h1>Contact is here</h1>
        
        </>
        
    )
}

export default Contact;