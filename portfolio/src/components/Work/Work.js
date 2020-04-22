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
        <div className="card card--0">
          <header>
            <h2 className="h3">Express</h2>
            <main class="card__img--bg">
              <img
                className="card__img"
                src="https://api.iconify.design/logos-express.svg"
                alt="Express Projects"
              />
            </main>
            <p>Archive of my Express projects.</p>
            <ul className="badges">
              <li>Express</li>
              <li>Node</li>
            </ul>
          </header>
          <footer>
            <div className="buttons">
              <span className="button__icon">
                <MdLink />
              </span>
              <a
                href="https://github.com/tpkahlon/express"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>
            </div>
          </footer>
        </div>
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
              <li>JavaScript</li>
              <li>ES6</li>
            </ul>
          </header>
          <footer>
            <div className="buttons">
              <span className="button__icon">
                <MdLink />
              </span>
              <a
                href="https://github.com/tpkahlon/javascript"
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
        <div className="card card--3">
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
                href="https://github.com/tpkahlon/javascript30"
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
            <h2 className="h3">JS20</h2>
            <main class="card__img--bg">
              <img
                className="card__img"
                src="https://api.iconify.design/logos:javascript.svg"
                alt="VanillaWebProjects.com Projects"
              />
            </main>
            <p>Archive of my VanillaWebProjects.com projects.</p>
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
                href="https://github.com/tpkahlon/javascript20"
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
