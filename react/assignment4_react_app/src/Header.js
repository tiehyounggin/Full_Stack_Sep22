function Header(){
    return(
        <>
            <div id="header">
                <div>
                    <a href="index.html" className="logo"><img src="images/logo.png" alt=""/></a>
                    <ul id="navigation">
                        <li className="selected">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="menu">
                            <a href="about.html">About</a>
                            <ul className="primary">
                                <li>
                                    <a href="product.html">Product</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu">
                            <a href="blog.html">Blog</a>
                            <ul className="secondary">
                                <li>
                                    <a href="singlepost.html">Single post</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;