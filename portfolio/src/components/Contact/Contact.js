import React from 'react';
import './Contact.css';
import { FaLinkedinIn, FaWhatsapp, FaGithub } from 'react-icons/fa';

const Contact = () =>
  <>
    <section className='contact'>
      <section className='sticker sticker--light'>
        <h1 className="sticker__text h2">Say Hi!</h1>
      </section>
      <section className="contact__container">
        <section className="contact__info">
          <p className='contact__info-email'>
            <a href='mailto:tejpartapsingh91@gmail.com' rel='noopener noreferrer' target='_blank'>Drop me a message!</a>
          </p>
          <p className='contact__info-quote'><strong>Thanks</strong> to <a href="https://twitter.com/ossia" target="_blank" rel="noopener noreferrer">Quincy Larson</a> for developing <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freeCodeCamp</a> community and encouraging people like me to become Developers!</p>
          <ul className='contact__list'>
            <li className='contact__list-item'>
              <a href='https://wa.me/14164092721' rel='noopener noreferrer' target='_blank'><FaWhatsapp /></a>
            </li>
            <li className='contact__list-item'>
              <a href='https://github.com/tpkahlon' rel='noopener noreferrer' target='_blank'><FaGithub /></a>
            </li>
            <li className='contact__list-item'>
              <a href='https://linkedin.com/in/tpkahlon' rel='noopener noreferrer' target='_blank'><FaLinkedinIn /></a>
            </li>
          </ul>
        </section>
        <div className="contact__thumb">
          <img src='https://i.imgur.com/pQdjtTm.png' alt='Tej Kahlon' />
        </div>
      </section>
    </section>
  </>

export default Contact;