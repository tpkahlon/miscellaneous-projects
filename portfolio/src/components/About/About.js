import React from "react";
import "./About.css";

const About = () => (
  <>
    <section className="about">
      <section className="sticker">
        <h1 className="sticker__text h2">Welcome</h1>
      </section>
      <section className="about__wrap">
        <section className="about__content">
          <p>Hello, Lovely Human!</p>
          <p>Thanks for taking the time to check my portfolio page.</p>
          <p>
            I am a&nbsp;
            <a
              href="https://roadmap.sh/frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Front End Developer
            </a>
            &nbsp;based in Toronto.
          </p>
          <p>
            I like JavaScript. I am actively learning the language and
            discovering new nuances every now and then, through small projects
            based learning. I am always keen in building JavaScript based
            applications to solve a real world problem or fill the market gap
            through the presence of a web service. My objective is to become a
            better <strong>Front End Developer</strong>,&nbsp;
            <strong>Back End Developer</strong>,&nbsp;
            <strong>Full Stack Developer</strong> specializing in&nbsp;
            <strong>MERN</strong> stack.
          </p>
          <p>
            I am a huge advocate of continuous learning, making web an awesome
            place for humans.
          </p>
          <p>
            As of today, I have uncovered hidden gems of&nbsp;
            <strong>
              REST API, UNIX, Express, MongoDB, React, CSS Grid, JavaScript,
              Gatsby, Heroku, AWS, ES6
            </strong>
            . My goal for this year is to gain expertise in Redux, Modern React
            Practices, TDD, Advanced JavaScript, TypeScript, GraphQL.
          </p>
        </section>
      </section>
    </section>
  </>
);

export default About;
