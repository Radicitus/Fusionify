import React from 'react';
import Alfredo from "../assets/alfredo.jpg";
import Dachelle from "../assets/dachelle.jpg";
import Lawrence from "../assets/lawrence.jpg";
import Aljon from "../assets/aljon.jpg";
import Kae from "../assets/kae.jpg";


const About = () => {
    return (
        <div>
            <div className="About">
                <br/>
                <h1><u>About FUSION</u></h1>
                    <p><i>
                        Established in Spring of 2001, "F.U.S.I.O.N." <br/>
                        (Filipinos Unifying Scientist-Engineers In an Organized Network) <br/>
                        was designed to enhance and support the life of students in <br/>
                        technical majors or with technical interests. 
                    </i></p>
                <br/>
                <h1><u>Our Team</u></h1>
            </div>

            <div className = "TeamPhotos">
                <h2>UI/UX Designers</h2>
                <img className="Alfredo" src={Alfredo} alt="Alfredo"/>
                <img className="Dachelle" src={Dachelle} alt="Dachelle"/>
                <h4>Alfredo and Dachelle</h4>
                <br/>
                
                <h2>Frontend Programmers</h2>
                <img className="Aljon" src={Aljon} alt="Aljon"/>
                <img className="Kae" src={Kae} alt="Kae"/>
                <img className="Lawrence" src={Lawrence} alt="Lawrence"/>
                <h4>Aljon, Kae, and Lawrence</h4>
            </div>

            <br/><br/>
        </div>
);
}


export default About;