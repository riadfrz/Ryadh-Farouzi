// Example usage in a page/component
import React from 'react';
import Header from '../components/Header';
import {Link} from "react-router-dom";

function About() {
    return (
        <div className="home">
            <Header />
            <div className="intro">
                <p className="intro-description">
                    I'm a mobile and web developer fueled by a passion for coding, fitness, and self-improvement. By diving deep into lines of code, I try bring to life innovative apps and websites that cater to the worlds of gym enthusiasts and those on a journey of self-betterment. In parallel, I share my insights and experiences in these domains through my YouTube channel, where I inspire others to join me on the path to personal growth. My goal is to redefine the digital landscape and empower individuals to thrive in both body and mind.
                </p>
                <Link to="/projects" className="intro-button">View Projects</Link>
            </div>
        </div>
    );
}

export default About;
