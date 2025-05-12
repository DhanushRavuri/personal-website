import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/IMG_RD.JPG`} alt="" />
      </Link>
      <header>
        <h2>Dhanush Ravuri</h2>
        <p>
          <a href="mailto:ravuridhanush@gmail.com">ravuridhanush@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Dhanush. I am an upcoming Master&apos;s student in{' '}
        <a href="https://www.cics.umass.edu/academics/ms-computer-science-campus">CS at University of Massachusetts, Amherst</a> and a alumnus of {' '}
        <a href="https://www.iitr.ac.in/">IIT Roorkee</a>. I&apos;m passionate about backend development, distributed systems and artificial intelligence.
        Currently, I work as an SDE-II at {' '}
        <a href="https://www.linkedin.com/company/flipkart/">Flipkart Internet Private Limited</a>,
        a subsidiary of
        <a href="https://www.linkedin.com/company/walmart"> Walmart Inc.</a>,
        where i have gained over 3 years of professional software development experience,
        by building robust, large-scale backend systems
        that power real-time operations for millions of users.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
