import React from 'react';
import './Contact.css';
import { FaLinkedinIn, FaWhatsapp, FaGithub, FaHandPeace } from 'react-icons/fa';

const Contact = () =>
  <>
    <section className='contact'>
      <section className='sticker'>
        <FaHandPeace />
        <h1 className="sticker__text h3">Say Hi!</h1>
      </section>
      <section className="contact__container">
        <section className="contact__info">
          <p className='contact__info-email'>
            <a href='mailto:tejpartapsingh91@gmail.com' rel='noopener noreferrer' target='_blank'>tejpartapsingh91@gmail.com</a>
          </p>
          <p className='contact__info-quote'>Develop, Take risks and Fail, Develop, Learn from your mistakes and prosper, Develop, Build something exciting and worthwhile!</p>
          <p className='contact__info-summary'>I like to learn new technologies and put them into practice by developing solutions to real world problems. I am available to collaborate on any interesting project or idea you may have. I look forward to hear from you soon!</p>
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
          <img src='./myself.jpg' alt='Tej Kahlon' />
        </div>
      </section>
    </section>
  </>

export default Contact;