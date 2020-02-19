import React from 'react';
import Moment from 'react-moment';
import './Copyright.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Copyright = () =>
  <>
    <footer className='footer'>
      <p className='footer__text'>&copy; Tej Kahlon</p>
      <p className='footer__text'><span className='footer__bold'>Built with:</span> <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">Create-React-App</a>, CSS3</p>
      <p className='footer__text'><span className='footer__bold'>Last updated on:</span> <Moment date={new Date()} format='LLLL' />.</p>
      <p className="footer__text"><span className="footer__bold">Site Inspiration:</span> <a href='http://samsakhavarz.com/' target='_blank' rel='noopener noreferrer'>Sam Sakhavarz <span><FaExternalLinkAlt /></span></a></p>
    </footer>
  </>

export default Copyright;