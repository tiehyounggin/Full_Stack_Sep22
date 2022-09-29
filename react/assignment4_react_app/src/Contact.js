import Footer from "./Footer";
import Header from "./Header";

function Contact(){
    return(
        <>
        <Header isActive="contact"/>
            <div id="body" className="contact">
                <div className="header">
                    <div>
                        <h1>Contact</h1>
                    </div>
                </div>
                <div className="body">
                    <div>
                        <div>
                            <img src="images/check-in.png" alt=""/>
                            <h1>UNIT 0123 , ABC BUILDING, BUSSINESS PARK</h1>
                            <p>If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.</p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="contact">
                        <h1>INQUIRY FORM</h1>
                        <form action="index.html">
                            <input type="text" name="Name" value="Name" onblur="this.value=!this.value?'Name':this.value;" onfocus="this.select()" onclick="this.value='';"/>
                            <input type="text" name="Email" value="Email" onblur="this.value=!this.value?'Email':this.value;" onfocus="this.select()" onclick="this.value='';"/>
                            <input type="text" name="Subject" value="Subject" onblur="this.value=!this.value?'Subject':this.value;" onfocus="this.select()" onclick="this.value='';"/>
                            <textarea name="meassage" cols="50" rows="7">Share your thoughts</textarea>
                            <input type="submit" value="Send" id="submit"/>
                        </form>
                    </div>
                    <div className="section">
                        <h1>WE’D LOVE TO HEAR FROM YOU.</h1>
                        <p>If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contact;