import React from "react";
import './AboutUs.css';



const AboutUs: React.FC = () => {
    return (
        <main className="about-main">
            <section className="about-us">
                <h1 className="about-title">About Us</h1>
                <p className="about-description">Welcome to our Travel accessories website! We're a team of passionate accessories enthusiasts dedicated to providing you with the best  experience possible.</p>
                <div className="mission-statement">
                    <h2>Our Mission</h2>
                    <p>To provide a wide range of Travel accessories , ensuring a hassle-free and enjoyable experience for our customers.</p>
                </div>
                <div className="our-story">
                    <h2>Our Story</h2>
                    <p>Founded in 2010, our company has grown to become one of the leading Travel accessories website in the region. With a fleet of over 5000 items, we cater to individuals, families, and businesses alike.</p>
                </div>
                <div className="team">
                    <h2>Meet Our Team</h2>
                    <ul className="team-list">

                    </ul>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;
