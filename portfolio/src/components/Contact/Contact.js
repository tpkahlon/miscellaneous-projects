import React from "react";
import "./Contact.css";
import {
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaBehanceSquare,
  FaFileCode,
  FaBlogger,
  FaDev,
  FaCopyright,
} from "react-icons/fa";

const Contact = () => (
  <>
    <section className="contact">
      <section className="sticker sticker--light">
        <h1 className="sticker__text h2">Say Hi!</h1>
      </section>
      <section className="contact__container">
        <section className="contact__info">
          <p className="contact__info-email">
            <a
              href="mailto:tejpartapsingh91@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Drop me a message!
            </a>
          </p>
          <ul className="contact__list">
            <li className="contact__list-item">
              <a
                className="text-decoration-none"
                href="https://wa.me/14164092721"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li className="contact__list-item">
              <a
                className="text-decoration-none"
                href="https://github.com/tpkahlon"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub />
              </a>
            </li>
            <li className="contact__list-item">
              <a
                className="text-decoration-none"
                href="https://linkedin.com/in/tpkahlon"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="contact__list-item">
              <a
                className="text-decoration-none"
                href="https://behance.net/tpkahlon"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaBehanceSquare />
              </a>
            </li>
            <li className="contact__list-item">
              <a
                className="text-decoration-none"
                href="https://www.dropbox.com/s/zfc62n6wzujs9qn/Resume.pdf?dl=0"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaFileCode />
              </a>
            </li>
            <li className="contact__list-item">
              <a
                className="text-decoration-none"
                href="https://dev.to/tpkahlon"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaDev />
              </a>
            </li>
            <li className="contact__list-item">
              <a
                className="text-decoration-none"
                href="https://tejkahlon.netlify.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaCopyright />
              </a>
            </li>
            <li className="contact__list-item">
              <a
                className="text-decoration-none"
                href="https://satrangi.netlify.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaBlogger />
              </a>
            </li>
          </ul>
        </section>
        <div className="contact__thumb">
          <img src="https://i.imgur.com/pQdjtTm.png" alt="Tej Kahlon" />
        </div>
      </section>
    </section>
  </>
);

export default Contact;
