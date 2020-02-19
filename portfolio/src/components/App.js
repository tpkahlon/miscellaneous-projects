import React from 'react';
import './App.css';
import Banner from './Banner/Banner';
import About from './About/About';
import Work from './Work/Work';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Copyright from './Copyright/Copyright';

const App = () => {
  return (
    <>
      <Banner />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Copyright />
    </>
  );
}

export default App;
