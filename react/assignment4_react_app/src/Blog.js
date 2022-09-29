import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Blog(){

    const myArrObj = [
        {
            "blogTitle": "Some title 1",
            "content": "content 1 content 1 content 1 content 1",
            "date": "11/11/1111",
            "username": "Some username 1",
            "image": "images/new-chills.png"
        },
        {
            "blogTitle": "Some title 2",
            "content": "content 2 content 2 content 2 content 2",
            "date": "22/2/2222",
            "username": "Some username 2",
            "image": "images/berries.png"
        }
    ]   

    return(
        <>
        <Header isActive="blog"/>
            <div id="body">
                <div className="header">
                    <div>
                        <h1>Blog</h1>
                    </div>
                </div>
                <div className="blog">
                    <div className="featured">
                        <ul>
                            {
                                myArrObj.map((anObj, index) => {
                                    return <li key={index}>
                                        <img src={anObj.image} alt=""/>
                                        <div>
                                            <h1>{anObj.blogTitle}</h1>
                                            <span>By {anObj.username} on {anObj.date}</span>
                                            <p>{anObj.content}</p>
                                            <a href="singlepost.html" className="more">Read More</a>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                        <a href="blog.html" className="load">Load More</a>
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
            <Footer/>
        </>   
    )
}

export default Blog;