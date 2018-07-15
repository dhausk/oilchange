import React from 'react';
import { Link } from 'react-router-dom';
import me from '../assets/Me.JPG';
function About(params) {
  return (
    <section className="about" >
      <h2>About</h2>
      <div className="about-me">
        <img alt="Derek Hassick" src={me} />
        <p>Hello, My Name is Derek Hassick and I am a web developer who has a hankering to do
        my own vehicle maintenance. I created this app to help me keep track of all maintenance I do. I hope it
      you find it just as helpful as I do.</p>
      </div>
      <Link to="/"><button>Happy Tinkering</button></Link>
    </section>
  )
}

export default About;