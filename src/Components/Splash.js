import React from 'react';
import { Link } from 'react-router-dom';

function Splash(params) {
  return (
    < section className="" >
      <h1 className="">Oil Change</h1>
      <p>When did I do that again?</p>
      <p>If you have have ever asked your self this question, you are not alone. We've all looked in
      our glove box at the owners manual or on the windshield to remind us. What if you did not
      have to go out into the cold or burning hot car and do that instead pull out your phone and
      look it up right where you sit? Oil change is all you need to do. Just pick out which car is yours
      and we will pull up the last time you did any service to your car. We even give you charts to show how often
        you perform your maintenance. It is simple to use, fill out a form and we will do the rest. Every time
        you do an oil change just fill out the maintenance form and we will keep a record of it for yous.</p>
      <button>
        <Link to="/Cars">Begin</Link>
      </button>
    </section >
  )
}

export default Splash;