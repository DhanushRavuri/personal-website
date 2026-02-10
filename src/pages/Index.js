import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;

const Index = () => (
  <Main
    description={
      "Dhanush Ravuri's personal website. University of Massachusetts, Amherst CS Master's student, IIT Roorkee graduate."
      + ''
    }
  >
    <article className="post" id="index">

      {/* 1. FLEX CONTAINER: Holds the text and image side-by-side */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>

        {/* 2. LEFT COLUMN: Contains all text and links */}
        <div style={{ paddingRight: '20px' }}>
          <div>
            Welcome to my website. Feel free to explore:<br />
            <Link to="/about">About me</Link><br />
            <a
              href="https://leetcode.com/u/Dhanush_Ravuri_UMass/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a><br />
            <a
              href="https://codeforces.com/profile/dhanushrrr79"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codeforces
            </a><br />
            <Link to="/resume">Resume section</Link><br />
            <a
              href="https://drive.google.com/file/d/1f-NOiUAtu27bxTZFvCknM2Ow6ztXxpL0/view?usp=drive_open"
              download="Dhanush_Ravuri_Resume.pdf"
            >
              Resume (PDF)
            </a><br />
            <Link to="/projects">Projects</Link><br />
            <Link to="/stats">Site statistics</Link><br />
            <Link to="/contact">Contact me</Link>
          </div>

          <p style={{ marginTop: '50px', fontStyle: 'italic' }}>
            Google Analytics recorded your view. Thanks for stopping by! 👋
          </p>
        </div>

        {/* 3. RIGHT COLUMN: Contains the image */}
        <div>
          <img
            src={`${PUBLIC_URL}/images/umass-amherst.jpg`}
            alt=""
            style={{ width: '530px', height: 'auto', borderRadius: '8px' }}
          />
        </div>

      </div>

    </article>
  </Main>
);

export default Index;
