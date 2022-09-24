import { Link } from 'react-router-dom';
import './App.css';

function Header(){
    return(
        <ul className='menu'>
            <li><a href="home">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="contact">Contact</a></li>
        </ul>
    )
}

export default Header;