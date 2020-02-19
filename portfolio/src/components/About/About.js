import React from 'react';
import './About.css';
import { GiPegasus } from 'react-icons/gi';

const About = () =>
  <>
    <section className="about">
      <section className='sticker'>
        <GiPegasus />
        <h1 className="sticker__text h3">Welcome</h1>
      </section>
      <section className="about__wrap">
        <section className="about__content">
          <p>Hey, Thanks for visiting my portfolio page.</p>
          <p>Myself, Tej, I am a Front End Developer from Toronto.</p>
          <p>I love learning emerging technologies in JavaScript realm, seek interest in exploring new ideas to develop web services by leveraging these new trends. My passion is to develop future-oriented web products that adheres to cutting-edge principles, methodologies involving around enriched UI experiences that complies to responsiveness, accessibility, performance optimization and scalable code structure.</p>
          <p>I believe in hard work, attention to detail and constant learning in order to develop best performing web services.</p>
          <p><strong>If you have any projects in mind, I look forward to hear from you soon...</strong></p>
        </section>
      </section>
    </section>
  </>

export default About;