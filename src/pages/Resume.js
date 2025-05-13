import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Courses: () => <Courses data={courses} />,
  References: () => <References />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Dhanush's Resume. University of Massachussets, Amherst CS Master's student, IIT Roorkee, Flipkart internet private limited, Backend, AI, Distributed Systems."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <div className="resume-title-container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <h2 style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
              <Link to="resume">Resume</Link>
            </h2>
            <a
              href="https://drive.google.com/uc?export=download&id=1f-NOiUAtu27bxTZFvCknM2Ow6ztXxpL0"
              download="Dhanush_Ravuri_Resume.pdf"
              className="download-resume-link"
              style={{
                display: 'flex', textDecoration: 'none', alignItems: 'center', color: 'inherit',
              }}
              title="Download Resume"
            >
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
