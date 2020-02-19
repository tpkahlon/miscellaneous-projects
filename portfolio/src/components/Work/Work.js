import React from "react";
import "./Work.css";
import { GiFreedomDove } from "react-icons/gi";

const Work = () => (
  <>
    <section className="work">
      <section className="sticker">
        <GiFreedomDove />
        <h1 className="sticker__text h3">Projects</h1>
      </section>
      <section className="work__container">
        <div className="card card--1">
          <header>
            <h2>JavaScript Projects</h2>
          </header>
          <main>
            <img
              className="card__img"
              src="data:image/png;base64,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"
              alt="JavaScript Projects"
            />
          </main>
          <footer>
            <p>Archive of my JavaScript projects.</p>
            <ul className="badges">
              <li>Plain JavaScript</li>
              <li>ES6</li>
            </ul>
            <div className="buttons">
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
            <h2>CSS Projects</h2>
          </header>
          <main>
            <img
              className="card__img"
              src="data:image/jpeg;base64,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"
              alt="CSS Projects"
            />
          </main>
          <footer>
            <p>Archive of my CSS projects.</p>
            <ul className="badges">
              <li>CSS</li>
              <li>Sass</li>
            </ul>
            <div className="buttons">
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
            <h2>Miscellaneous Projects</h2>
          </header>
          <main>
            <img
              className="card__img"
              src="data:image/jpeg;base64,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"
              alt="Miscellaneous Projects"
            />
          </main>
          <footer>
            <p>Archive of my Miscellaneous projects.</p>
            <ul className="badges">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div className="buttons">
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
            <h2>React Projects</h2>
          </header>
          <main>
            <img
              className="card__img"
              src="data:image/png;base64,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"
              alt="React Projects"
            />
          </main>
          <footer>
            <p>Archive of my React projects.</p>
            <ul className="badges">
              <li>ReactJS</li>
            </ul>
            <div className="buttons">
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
            <h2>Responsive Web Design Projects</h2>
          </header>
          <main>
            <img
              className="card__img"
              src="data:image/png;base64,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"
              alt="Responsive Web Design Projects"
            />
          </main>
          <footer>
            <p>Archive of my Responsive Web Design projects.</p>
            <ul className="badges">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <div className="buttons">
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
            <h2>JavaScript30.com Projects</h2>
          </header>
          <main>
            <img
              className="card__img"
              src="data:image/jpeg;base64,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"
              alt="JavaScript30.com Projects"
            />
          </main>
          <footer>
            <p>Archive of my JavaScript30.com projects.</p>
            <ul className="badges">
              <li>JavaScript</li>
            </ul>
            <div className="buttons">
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
