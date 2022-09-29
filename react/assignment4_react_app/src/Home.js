import Header from "./Header";

function Home(){
    return(
        <>
            <div id="body" className="home">
                <div className="header">
                    <img src="images/bg-home.jpg" alt=""/>
                    <div>
                        <a href="product.html">Freeze Delight</a>
                    </div>
                </div>
                <div className="body">
                    <div>
                        <div>
                            <h1>NEW PRODUCT</h1>
                            <h2>The Twist of Healthy Yogurt</h2>
                            <p>This website template has been designed by freewebsitetemplates.com for you, for free. You can replace all this text with your own text.</p>
                        </div>
                        <img src="images/yogurt.jpg" alt=""/>
                    </div>
                </div>
                <div className="footer">
                    <div>
                        <ul>
                            <li>
                                <a href="product.html" className="product"></a>
                                <h1>PRODUCTS</h1>
                            </li>
                            <li>
                                <a href="about.html" className="about"></a>
                                <h1>OUR STORY</h1>
                            </li>
                            <li>
                                <a href="product.html" className="flavor"></a>
                                <h1>FLAVORS</h1>
                            </li>
                            <li>
                                <a href="contact.html" className="contact"></a>
                                <h1>OUR LOCATION</h1>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;