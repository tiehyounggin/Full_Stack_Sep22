import { useEffect, useState } from 'react';
import './App.css';
import {useNavigate} from "react-router-dom"

function Header(props){

    const [isExist, setIsExist] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        // console.log("effect is here! ")
        if(localStorage.getItem("token") != null && localStorage.getItem("token") != ""){
            setIsExist(true);
        }else{
            setIsExist(false);
        }
    }, []);

    // const logoutBtn = () => {

    //     let user_id = localStorage.getItem("user_id");
    //     let token = localStorage.getItem("token")
    //     console.log(localStorage.getItem("user_id"));
    //     console.log(localStorage.getItem("token"));

    //     fetch("http://localhost:8080/logout/" + user_id,
    //     {
    //         method:"POST",
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'user_id': user_id,
    //             'token': token
    //         },
    //     })
    //     .then(res => {
    //         if(!res.ok){
    //             throw res;
    //         }else{
    //             localStorage.removeItem("user_id");
    //             localStorage.removeItem("token");
    //             res.json().then(res2 => console.log(res2));
    //             navigate("/Home");
    //         }
    //     })
    //     .catch(error =>{
    //         console.log(error);
    //     })
    // }

    return(
        <ul className='menu'>
            <li className={props.current == "home" ? "isActive" : ""}><a href="home">Home</a></li>
            <li className={props.current == "about" ? "isActive" : ""}><a href="about">About</a></li>
            <li className={props.current == "contact" ? "isActive" : ""}><a href="contact">Contact</a></li>
            <li className={props.current == "homework2609" ? "isActive" : ""}><a href="homework2609">homework2609</a></li>
            <li className={props.current == "homework2709" ? "isActive" : ""}><a href="homework2709">homework2709</a></li>
            <li className={props.current == "Register" ? "isActive" : ""}><a href="Register">Register</a></li>
            <li className={props.current == "Login" ? "isActive" : ""}><a href="Login">Login</a></li>
            <li className={props.current == "Update" ? "isActive" : ""}><a href="Update">Update</a></li>
            <li className={props.current == "Login2" ? "isActive" : ""}><a href="Login2">Login2</a></li>
            {isExist ? <li className="logout"><a href="Logout">Logout</a></li> : null}
        </ul>
    )
}

export default Header;

// anchor tag refreshes page, navlink no refresh page only particular componenet is updated, more control over react life cycle methods.
// <NavLink to="/home">Home</NavLink> 
