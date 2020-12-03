import React from "react";
import "./Contact.css";
import {
  FaGithub,
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
                href="https://github.com/tpkahlon"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub />
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
