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
            {isExist ? <li className="logout"><a href="#">Logout</a></li> : null}
        </ul>
    )
}

export default Header;