import React from 'react';
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Envelope from "../assets/envelope.png";



const Contact = () => {
    return (
        <div className="Contact">
                <h1>Contact US</h1>
                <p><i>If you have a question, comment, or <br />
                    suggestion, please send us an email at:</i>
                    <br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<img className="Envelope" src={Envelope} alt="Envelope Logo" align="left"/><b>fusion.eng.uci@gmail.com</b></p>

                <h1>Social Media</h1>
            <p><i>Connect with us through the following<br /> platforms:

                <p>&nbsp;&nbsp;&nbsp;&nbsp;<img className="Facebook" src={Facebook} alt="Facebook Logo" align="left"/><b>Fusion at UCI</b></p><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<img className="Instagram" src={Instagram} alt="Instagram Logo" align="left"/><b>@fusionatuci</b></i></p>

        </div>
);
}

export default Contact;