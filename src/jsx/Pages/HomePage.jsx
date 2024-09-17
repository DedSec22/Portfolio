import React, { useEffect } from 'react';
import Hero from '../Components/Hero.jsx';
import Socials from '../Components/Socials.jsx';
import Work from '../Components/Work.jsx';
import Image1 from '../../img/IMG_1.png';
import Image2 from '../../img/IMG_2.png';
import Image3 from '../../img/IMG_4.png';
import AOS from 'aos';
import '../../scss/vendor/aos/src/sass/aos.scss';

const HomePage = () => {
const instagramUsername = ['devdxtt'];
const URL = [Image2, Image3, Image1];
const posts = ['69'];

const projects = [
  {
    img: 'https://placehold.co/600x400',
    link: "https://link-to-project-1.com",
  },
  {
    img: 'https://placehold.co/600x400',
    link: "https://link-to-project-2.com",
  },
  {
    img: 'https://placehold.co/600x400',
    link: "https://link-to-project-3.com",
  }
];

useEffect(() => {
  AOS.init({
    duration: 600,
    offset: 300,
    easing: 'ease',
    once: false,
  });
}, []);

  return (
    <>
      <Hero />
      <Work Heading='A small selection of my work.' projects={projects}/>
      <Socials socialTitle='Instagram' socialUsername={instagramUsername} URL={URL} posts={posts} />
    </>
  )
}
export default HomePage