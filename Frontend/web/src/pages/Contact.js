import React from 'react';
import Envelope from "../assets/envelope.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import YouTube from "../assets/youtube.png";



const Contact = () => {
    return (
        <div className="Contact">
            <br/>
            <h1><u>Contact Us</u></h1>

            <p><i>
                If you have a question, comment, or suggestion, <br/>
                please send us an email at:
            </i></p>

            <img className="Envelope" src={Envelope} alt="Envelope Logo" align="center"/>
            <b> fusion.eng.uci@gmail.com</b>
            <br/><br/>


            <h1><u>Social Media</u></h1>
            <p><i>Connect with us through the following<br /> platforms:</i></p>

            <img className="Facebook" src={Facebook} alt="Facebook Logo" align="center"/>
            <a href="https://www.facebook.com/fusionuci/">Fusion at UCI</a>
            &nbsp;&nbsp;&nbsp;&nbsp;

            <img className="Instagram" src={Instagram} alt="Instagram Logo" align="center"/>
            <a href="https://www.instagram.com/fusionatuci/?hl=en">@fusionatuci</a>
            &nbsp;&nbsp;&nbsp;&nbsp;

            <img className="YouTube" src={YouTube} alt="YouTube Logo" align="center"/>
            <a href="https://www.youtube.com/user/FUSIONfilm">FUSIONFilm</a>
            <br/><br/><br/><br/>
        </div>
);
}

export default Contact;