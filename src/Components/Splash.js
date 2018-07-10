import React from 'react';
import { Link } from 'react-router-dom';

function Splash(params) {
  return (
    < section className="" >
      <h1 className="">Oil Change</h1>
      <p>If you have ever forgotten when you changed the oil, simply ran out of room or lost your
      maintenance log book. Dont worry you are not alone, and fortunately there is Oil Change, an
      app that will be the maintenance log book in your pocket. All you need to do. Just pick out
      or add your  car, and we will pull up the last time you did any service to your car. Here
      you can view, add, edit, or delete your maintenance logs. We also show you charts of your
      data to give a time line of when you last did your maintenance and the frequency. It is simple
      to use, fill out a form and we will do the rest. Do an oil change? Change the air Filter?
      Just fill out another form an we will keep a record for you.</p>
      <button>
        <Link to="/Vehicles">Begin</Link>
      </button>
    </section >
  )
}

export default Splash;