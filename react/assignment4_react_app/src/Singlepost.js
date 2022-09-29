function Singlepost(){
    return(
        <>
            <div id="body">
                <div className="header">
                    <div>
                        <h1>Single Post</h1>
                    </div>
                </div>
                <div className="singlepost">
                    <div className="featured">
                        <img src="images/strwberry-delights.jpg" alt=""/>
                        <h1>NEW CHILLS FOR SUMMER</h1>
                        <span>By Admin on November 28, 2023</span>
                        <p>You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the forum.</p>
                        <p>You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the forum.</p>
                        <a href="blog.html" className="load">back to blog</a>
                    </div>
                    <div className="sidebar">
                        <h1>Recent Posts</h1>
                        <img src="images/on-diet.png" alt=""/>
                        <h2>ON THE DIET</h2>
                        <span>By Admin on November 28, 2023</span>
                        <p>You can replace all this text with your own text. You can remove any link to our website from this website template.</p>
                        <a href="singlepost.html" className="more">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singlepost;