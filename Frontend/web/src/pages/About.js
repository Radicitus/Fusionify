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
                <h1>About US</h1>
                <p><i>Established in Spring of 2001, F.U.S.I.O.N. <br />
                (Filipinos Unifying Scientist-Engineers In an  <br />
                Organized Network) was designed to             <br />
                enhance and support the life of students in    <br />
                    technical majors or with technical interests. </i>
                </p>
            <h1>Our Team</h1>
        </div>

                <div className = "TeamPhotos">
                    <img className="Dachelle" src={Dachelle} alt="Dachelle"/>
                    <img className="Aljon" src={Aljon} alt="Aljon"/>
                    <img className="Alfredo" src={Alfredo} alt="Alfredo"/>
                    <img className="Kae" src={Kae} alt="Kae"/>
                    <img className="Lawrence" src={Lawrence} alt="Lawrence"/>
                </div>
        </div>
);
}


export default About;