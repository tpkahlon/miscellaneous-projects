import React from "react";
import "./Work.css";
import { MdLink } from "react-icons/md";

const Work = () => (
  <>
    <section className="work">
      <section className="sticker sticker--light">
        <h1 className="sticker__text h2">Projects</h1>
      </section>
      <section className="work__container">
        <div className="card card--1">
          <header>
            <h2 className="h3">JavaScript</h2>
            <main class="card__img--bg">
              <img
                className="card__img"
                src="https://api.iconify.design/logos-es6.svg"
                alt="JavaScript Projects"
              />
            </main>
            <p>Archive of my JavaScript projects.</p>
            <ul className="badges">
              <li>Plain JavaScript</li>
              <li>ES6</li>
            </ul>
          </header>
          <footer>
            <div className="buttons">
              <span className="button__icon">
                <MdLink />
              </span>
              <a
                href="https://github.com/tpkahlon/javascript-projects#javascript-projects-vanillagatsbyangularjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>
            </div>
          </footer>
        </div>
        <div className="card card--2">
          <header>
            <h2 className="h3">CSS</h2>
            <main class="card__img--bg">
              <img
                className="card__img"
                src="https://api.iconify.design/logos:css-3.svg"
                alt="CSS Projects"
              />
            </main>
            <p>Archive of my CSS projects.</p>
            <ul className="badges">
              <li>CSS</li>
              <li>Sass</li>
            </ul>
          </header>
          <footer>
            <div className="buttons">
              <span className="button__icon">
                <MdLink />
              </span>
              <a
                href="https://github.com/tpkahlon/css-projects#css-projects"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>
            </div>
          </footer>
        </div>
        <div className="card card--3">
          <header>
            <h2 className="h3">Web</h2>
            <main class="card__img--bg">
              <img
                className="card__img"
                src="https://api.iconify.design/ic:round-select-all.svg"
                alt="Miscellaneous Projects"
              />
            </main>
            <p>Archive of my Miscellaneous projects.</p>
            <ul className="badges">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </header>
          <footer>
            <div className="buttons">
              <span className="button__icon">
                <MdLink />
              </span>
              <a
                href="https://github.com/tpkahlon/miscellaneous-projects#miscellaneous-projects"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>
            </div>
          </footer>
        </div>
        <div className="card card--4">
          <header>
            <h2 className="h3">React</h2>
            <main class="card__img--bg">
              <img
                className="card__img"
                src="https://api.iconify.design/logos:react.svg"
                alt="React Projects"
              />
            </main>
            <p>Archive of my React projects.</p>
            <ul className="badges">
              <li>ReactJS</li>
            </ul>
          </header>
          <footer>
            <div className="buttons">
              <span className="button__icon">
                <MdLink />
              </span>
              <a
                href="https://github.com/tpkahlon/react-projects#react-projects"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>
            </div>
          </footer>
        </div>
        <div className="card card--5">
          <header>
            <h2 className="h3">freeCodeCamp</h2>
            <main class="card__img--bg">
              <img
                className="card__img"
                src="https://api.iconify.design/cib:freecodecamp.svg"
                alt="Responsive Web Design Projects"
              />
            </main>
            <p>Archive of my Responsive Web Design projects.</p>
            <ul className="badges">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </header>
          <footer>
            <div className="buttons">
              <span className="button__icon">
                <MdLink />
              </span>
              <a
                href="https://github.com/tpkahlon/responsive-web-design-projects#freecodecamp---responsive-web-design-projects"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>
            </div>
          </footer>
        </div>
        <div className="card card--6">
          <header>
            <h2 className="h3">JS30</h2>
            <main class="card__img--bg">
              <img
                className="card__img"
                src="https://api.iconify.design/logos:javascript.svg"
                alt="JavaScript30.com Projects"
              />
            </main>
            <p>Archive of my JavaScript30.com projects.</p>
            <ul className="badges">
              <li>JavaScript</li>
            </ul>
          </header>
          <footer>
            <div className="buttons">
              <span className="button__icon">
                <MdLink />
              </span>
              <a
                href="https://github.com/tpkahlon/javascript30#javascript30"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>
            </div>
          </footer>
        </div>
      </section>
    </section>
  </>
);

export default Work;
