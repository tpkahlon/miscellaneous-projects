import React from 'react';
import './About.css';

const About = () =>
  <>
    <section className="about">
      <section className='sticker'>
        <h1 className="sticker__text h2">Welcome</h1>
      </section>
      <section className="about__wrap">
        <section className="about__content">
          <p>Hello...</p>
          <p>Thanks for taking the time to check my portfolio page.</p>
          <p>I am a <a href="https://roadmap.sh/frontend" target="_blank" rel="noopener noreferrer">Front End Developer</a> based in Toronto.</p>
          <p>I love experimenting with emerging technologies built using JavaScript. I am always keen in building JS based services to solve a real world problem or automate niche market requirements. My objective is to become a better <strong>Front + Back End Developer</strong> specializing in <strong>MERN</strong> stack.</p>
          <p>I am a huge advocate of continuous learning, making web an awesome place for humans.</p>
        </section>
      </section>
    </section>
  </>

export default About;