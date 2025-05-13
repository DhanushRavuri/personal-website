import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Dhanush Ravuri's personal website. University of Massachusetts, Amherst CS Master's student, IIT Roorkee graduate."
      + ''
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            A beautiful, responsive, statically-generated, react application
            written with modern Javascript.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read {' '}
        <Link to="/about">about me</Link>, or view my{' '}
        <Link to="/resume">resume section</Link> / {' '}
        <a
          href={`${process.env.PUBLIC_URL}/Resume.pdf`}
          download="Dhanush_Ravuri_Resume.pdf"
        >
          download my resume (PDF)
        </a>
        {/* <Link to="/projects">projects</Link>,{' '} */}
        , view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {' '}
        Source available{' '}
        <a href="/personal-website">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
