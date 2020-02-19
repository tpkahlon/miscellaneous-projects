import React from 'react';
import { FaHtml5, FaCss3, FaToolbox } from 'react-icons/fa';
import { DiJsBadge, DiJqueryLogo, DiReact, DiSass, DiGit, DiGithubBadge, DiBootstrap, DiCodepen, DiMarkdown, DiMozilla, DiNpm, DiPhotoshop, DiWordpress, DiVisualstudio, DiW3C, DiUbuntu, DiTerminal, DiAtlassian, DiBitbucket } from 'react-icons/di';
import './Skills.css';

const Skills = props =>
  <>
    <section className='skills'>
      <section className='sticker'>
        <FaToolbox />
        <h1 className="sticker__text h3">Skills</h1>
      </section>
      <section className='skills__list'>
        <div className='skills__list-item'>
          <FaHtml5 />
        </div>
        <div className='skills__list-item'>
          <FaCss3 />
        </div>
        <div className='skills__list-item'>
          <DiMozilla />
        </div>
        <div className='skills__list-item'>
          <DiMarkdown />
        </div>
        <div className='skills__list-item'>
          <DiCodepen />
        </div>
        <div className='skills__list-item'>
          <DiGithubBadge />
        </div>
        <div className='skills__list-item'>
          <DiGit />
        </div>
        <div className='skills__list-item'>
          <DiSass />
        </div>
        <div className='skills__list-item'>
          <DiReact />
        </div>
        <div className='skills__list-item'>
          <DiJqueryLogo />
        </div>
        <div className='skills__list-item'>
          <DiJsBadge />
        </div>
        <div className='skills__list-item'>
          <DiBootstrap />
        </div>
        <div className='skills__list-item'>
          <DiNpm />
        </div>
        <div className='skills__list-item'>
          <DiPhotoshop />
        </div>
        <div className='skills__list-item'>
          <DiWordpress />
        </div>
        <div className='skills__list-item'>
          <DiVisualstudio />
        </div>
        <div className='skills__list-item'>
          <DiW3C />
        </div>
        <div className='skills__list-item'>
          <DiUbuntu />
        </div>
        <div className='skills__list-item'>
          <DiTerminal />
        </div>
        <div className='skills__list-item'>
          <DiAtlassian />
        </div>
        <div className='skills__list-item'>
          <DiBitbucket />
        </div>
      </section>
    </section>
  </>

export default Skills;