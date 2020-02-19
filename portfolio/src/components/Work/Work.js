import React from 'react';
import './Work.css';
import { GiFreedomDove } from 'react-icons/gi';

const Work = () =>
  <>
    <section className='work'>
      <section className='sticker'>
        <GiFreedomDove />
        <h1 className="sticker__text h3">Projects</h1>
      </section>
      <section className="work__container">
        <div className="card card--one">
          <header>
            <h2>Git Developer Directory (ReactJS)</h2>
          </header>
          <main>
            <img className='card__img' src="./p1.png" alt="Git Developer Directory" />
          </main>
          <footer>
            <p>This application is developed using ReactJS. It allows users to quickly look for a Developer registered on Github platform through their username. Users can get a glimpse of Developer's preliminary information and recent projects they are working on.</p>
            <ul className='badges'>
              <li>ReactJS</li>
              <li>ES6</li>
              <li>CSS3</li>
            </ul>
            <div className="buttons">
              <a href="https://tinyurl.com/gitud" target="_blank" rel="noopener noreferrer">View Live</a>
              <a href="https://github.com/tpkahlon/github-user-directory" target="_blank" rel="noopener noreferrer">View Source</a>
            </div>
          </footer>
        </div>
        <div className="card card--two">
          <header>
            <h2>TTC Stations (ReactJS)</h2>
          </header>
          <main className="card__thumb">
            <img className='card__img' src="./p2.jpg" alt="TTC Stations" />
          </main>
          <footer>
            <p>TTC Stations is an application based on ReactJS where users can quickly search through all TTC stations in the city. Users have the ability to add and remove a certain station. Application allows users to sort the order of the stations based on various options.</p>
            <ul className='badges'>
              <li>ReactJS</li>
              <li>ES6</li>
              <li>CSS3</li>
            </ul>
            <div className="buttons">
              <a href="https://tinyurl.com/ttc-stations" target="_blank" rel="noopener noreferrer">View Live</a>
              <a href="https://github.com/tpkahlon/ttc-stations" target="_blank" rel="noopener noreferrer">View Source</a>
            </div>
          </footer>
        </div>
        <div className="card card--three">
          <header>
            <h2>Gyaan Corner (ReactJS)</h2>
          </header>
          <main>
            <img className='card__img' src="./p3.png" alt="Gyaan Corner" />
          </main>
          <footer>
            <p>Gyaan corner is a small application that fetches and display inspirational quotes upon user's interaction with the application. It leverages usage of Loading icon and shows error message when the server is not functioning. This application is developed using ReactJS.</p>
            <ul className='badges'>
              <li>ReactJS</li>
              <li>Fetch</li>
              <li>SVG</li>
            </ul>
            <div className="buttons">
              <a href="https://tinyurl.com/gyaan-corner" target="_blank" rel="noopener noreferrer">View Live</a>
              <a href="https://github.com/tpkahlon/gyaan" target="_blank" rel="noopener noreferrer">View Source</a>
            </div>
          </footer>
        </div>
        <div className="card card--four">
          <header>
            <h2>Punjabi Singers (ReactJS)</h2>
          </header>
          <main>
            <img className='card__img' src="./p4.jpg" alt="Punjabi Singers" />
          </main>
          <footer>
            <p>Punjabi Singers is a small scale application that takes in request from a User through a dropdown element, leverages fetch API and displays top 50 YouTube videos from YouTube API. It takes into consideration loading messages while request is being processed.</p>
            <ul className='badges'>
              <li>ReactJS</li>
              <li>YouTube API</li>
              <li>Fetch</li>
            </ul>
            <div className="buttons">
              <a href="https://tinyurl.com/punjabi-gaane" target="_blank" rel="noopener noreferrer">View Live</a>
              <a href="https://github.com/tpkahlon/pb-singers" target="_blank" rel="noopener noreferrer">View Source</a>
            </div>
          </footer>
        </div>
        <div className="card card--five">
          <header>
            <h2>Cart page using AngularJS</h2>
          </header>
          <main>
            <img className='card__img' src="./p5.jpg" alt="Cart page using AngularJS" />
          </main>
          <footer>
            <p>A sample cart page built using a random JSON file, AngularJS, Sass, Bootstrap, GulpJS.</p>
            <ul className='badges'>
              <li>AngularJS</li>
              <li>GulpJS</li>
              <li>Sass</li>
            </ul>
            <div className="buttons">
              <a href="https://tpkahlon.github.io/angular" target="_blank" rel="noopener noreferrer">View Live</a>
              <a href="https://github.com/tpkahlon/angular" target="_blank" rel="noopener noreferrer">View Source</a>
            </div>
          </footer>
        </div>
        <div className="card card--six">
          <header>
            <h2>Player directory using AngularJS</h2>
          </header>
          <main>
            <img className='card__img' src="./p6.jpg" alt="Player directory using AngularJS" />
          </main>
          <footer>
            <p>A sample player directory built using a random JSON file, AngularJS, Bootstrap, GulpJS.</p>
            <ul className='badges'>
              <li>AngularJS</li>
              <li>GulpJS</li>
              <li>Sass</li>
            </ul>
            <div className="buttons">
              <a href="https://tpkahlon.github.io/cwc19-team-directory" target="_blank" rel="noopener noreferrer">View Live</a>
              <a href="https://github.com/tpkahlon/cwc19-team-directory" target="_blank" rel="noopener noreferrer">View Source</a>
            </div>
          </footer>
        </div>
        <div className="card card--seven">
          <header>
            <h2>Weather Now</h2>
          </header>
          <main>
            <img className='card__img' src="./p8.jpg" alt="Weather Now" />
          </main>
          <footer>
            <p>A sample Weather now application with latest news.</p>
            <ul className='badges'>
              <li>ReactJS</li>
              <li>API</li>
              <li>Sass</li>
            </ul>
            <div className="buttons">
              <a href="https://tpkahlon.github.io/weather-now" target="_blank" rel="noopener noreferrer">View Live</a>
              <a href="https://github.com/tpkahlon/weather-now" target="_blank" rel="noopener noreferrer">View Source</a>
            </div>
          </footer>
        </div>
        <div className="card card--eight">
          <header>
            <h2>Boredom</h2>
          </header>
          <main>
            <img className='card__img' src="./p9.png" alt="Boredom" />
          </main>
          <footer>
            <p>A sample React app that gives you a new activity to do.</p>
            <ul className='badges'>
              <li>ReactJS</li>
              <li>API</li>
              <li>Sass</li>
            </ul>
            <div className="buttons">
              <a href="https://tpkahlon.github.io/boredom" target="_blank" rel="noopener noreferrer">View Live</a>
              <a href="https://github.com/tpkahlon/boredom" target="_blank" rel="noopener noreferrer">View Source</a>
            </div>
          </footer>
        </div>
        <div className="card card--nine">
          <header>
            <h2>Sikh Gurus</h2>
          </header>
          <main>
            <img className='card__img' src="./p10.jpg" alt="Sikh Gurus" />
          </main>
          <footer>
            <p>A sample React app that gives you listing of all Sikh gurus.</p>
            <ul className='badges'>
              <li>ReactJS</li>
              <li>API</li>
              <li>Bootstrap</li>
            </ul>
            <div className="buttons">
              <a href="https://tpkahlon.github.io/sikh-gurus" target="_blank" rel="noopener noreferrer">View Live</a>
              <a href="https://github.com/tpkahlon/sikh-gurus" target="_blank" rel="noopener noreferrer">View Source</a>
            </div>
          </footer>
        </div>
        <div className="card card--nine">
          <header>
            <h2>fccFC</h2>
          </header>
          <main>
            <img className='card__img' src="./p12.png" alt="fccFC" />
          </main>
          <footer>
            <p>A simple react app that lists all full courses on FreeCodeCamp.</p>
            <ul className='badges'>
              <li>ReactJS</li>
              <li>API</li>
              <li>Bootstrap</li>
            </ul>
            <div className="buttons">
              <a href="https://tpkahlon.github.io/fccfc" target="_blank" rel="noopener noreferrer">View Live</a>
              <a href="https://github.com/tpkahlon/fccfc" target="_blank" rel="noopener noreferrer">View Source</a>
            </div>
          </footer>
        </div>
        <div className="card card--nine">
          <header>
            <h2>ReactStrap</h2>
          </header>
          <main>
            <img className='card__img' src="./p15.png" alt="ReactStrap" />
          </main>
          <footer>
            <p>React boilerplate including Sass, Favicons using ParcelJS.</p>
            <ul className='badges'>
              <li>ReactJS</li>
              <li>ParcelJS</li>
              <li>Bootstrap</li>
            </ul>
            <div className="buttons">
              <a href="https://tpkahlon.github.io/reactstrap" target="_blank" rel="noopener noreferrer">View Live</a>
              <a href="https://github.com/tpkahlon/reactstrap" target="_blank" rel="noopener noreferrer">View Source</a>
            </div>
          </footer>
        </div>
      </section>
    </section>
  </>

export default Work;