import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './About.css';

const About = () => {
    return (
        <div className="about" id="about">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa corporis <br />
                quam maiores possimus libero, quasi id esse nisi sint obcaecati, facere <br />
                dignissimos excepturi unde corrupti doloremque totam tempore? <br />
                Nemo, quam?
            </p>
            <a href="/">
                <h2>More about Umer <ArrowForwardIcon /></h2>
            </a>
        </div>
    )
}

export default About;
