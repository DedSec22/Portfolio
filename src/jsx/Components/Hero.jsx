import React from 'react';
import TypedComponent from './Typed.jsx';
import Button from './Button.jsx';

const Hero = () => {
  const strings = ["Hey yo ssup!", "Have a seat and check out my Portfolio...", "I'm Devdxtt also known as Shady."];

  const options = {
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    startDelay: 500,
    loop: false,
  };

  return (
    <div className="sec-hero">
      <div className="sec-hero-inner">
        <div className="container-fluid">
          <div className="intro-text">
            <TypedComponent strings={strings} options={options} />
            <h2>
              I'm an interdisciplinary designer by profession living in India,<br />
              Gujarat. Currently I work at <a href="#">RemoteDevsInfotech</a>,<br />
              transforming how you see the web.
              <br />
            </h2>
            <Button className='btn' type='button'>
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero