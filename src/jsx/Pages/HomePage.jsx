import React from 'react';
import Hero from '../Components/Hero.jsx';
import Socials from '../Components/Socials.jsx';
import Image1 from '../../img/IMG_1.png';
import Image2 from '../../img/IMG_2.png';
import Image3 from '../../img/IMG_4.png';

const HomePage = () => {
  const instagramUsername = ['devdxtt'];
  const URL = [ Image2, Image3, Image1];
  const posts = ['69'];

  return (
    <>
      <Hero />
      <Socials socialTitle='Instagram' socialUsername={instagramUsername} URL={URL} posts={posts}/>
    </>
  )
}

export default HomePage