import React from 'react';
import { Link } from 'react-router-dom';
function About(params) {
  return (
    < section className="about" >
      <h2>About</h2>
      <p>Hello, I am a web dev student trying to become a full stack web developer who has a hankering to do
      his vehicle maintenance. I created this app to help me keep track of all maintenance I do.</p>
      <button><Link to="/">Go Back</Link></button>

    </section >
  )
}

export default About;