import {NavLink} from 'react-router-dom';

function Header(props){
    return(
        <>
            <div id="header">
                <div>
                    <a href="index.html" className="logo"><img src="images/logo.png" alt=""/></a>
                    <ul id="navigation">
                        <li className={props.isActive =="home" ? "menu selected" : ""}>
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li className={props.isActive == "about" ? "menu selected" : "menu"}>
                            <NavLink to="/about">About</NavLink>
                            <ul className="primary" id={props.isActive == "product" ? "selected" : ""}>
                                <li>
                                    <NavLink to="/product">Product</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className={props.isActive == "blog" ? "menu selected" : "menu"}>
                            <NavLink to="/blog">Blog</NavLink>
                            <ul className="secondary" id={props.isActive == "singlepost" ? "selected" : ""}>
                                <li>
                                    <NavLink to="/singlepost">Single Post</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className={props.isActive == "contact" ? "menu selected" : ""}>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;