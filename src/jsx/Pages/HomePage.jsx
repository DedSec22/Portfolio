import React from 'react';
import Hero from '../Components/Hero.jsx';
import Socials from '../Components/Socials.jsx';

const HomePage = () => {
  const instagramUsername = ['devdxtt'];

  return (
    <>
      <Hero />
      <Socials socialTitle='Instagram' socialUsername={instagramUsername}/>
    </>
  )
}

export default HomePage