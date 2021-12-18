import React, {useState, useEffect} from 'react';

export default function Content() {


    return (
        <div className="container container__vertical">
            <h2>Let me <strong className="home-text__highlight">introduce</strong> myself</h2>
            <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>            
            <p>I am using <strong className="home-text__highlight">Javascript, C# and Python</strong>.</p>
            <p>My main focus is to explore and build new <strong className="home-text__highlight">Web Technologies and Products</strong> I'm also curious in areas related to <strong className="home-text__highlight">Machine Learning</strong>.</p>
            <p>In the meantime, I'm also stitching my gaps in the backend with <strong className="home-text__highlight">Node.js</strong> and <strong className="home-text__highlight">Modern Javascript Library and Frameworks</strong> like <strong className="home-text__highlight">React and Vue</strong>.</p>
        </div>
    );
}