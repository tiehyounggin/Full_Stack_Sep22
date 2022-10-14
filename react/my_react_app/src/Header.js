import { useEffect, useState } from 'react';
import './App.css';

function Header(props){

    const [isExist, setIsExist] = useState(false);

    useEffect(() => {
        // console.log("effect is here! ")
        if(localStorage.getItem("token") != null && localStorage.getItem("token") != ""){
            setIsExist(true);
        }else{
            setIsExist(false);
        }
    }, []);

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
            {isExist ? <li className="logout"><a href="#">Logout</a></li> : null}
        </ul>
    )
}

export default Header;

// anchor tag refreshes page, navlink no refresh page only particular componenet is updated, more control over react life cycle methods.
// <NavLink to="/home">Home</NavLink> 
