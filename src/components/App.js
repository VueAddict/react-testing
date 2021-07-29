/* eslint-disable no-unused-vars */
// @flow

import React, { useState } from 'react';
import './App.css';

import Grid from './listings/Grid';
import data from '../data/courses.json';

function App() {
  const [courses, setCourses] = useState(data);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <div className="navbar-fixed">
        <nav className="blue lighten-2">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">
              Courses
              {/* test comment */}
            </a>
          </div>
        </nav>
      </div>
      <div>
        <Grid items={courses} />
      </div>
    </>
  );
}

export default App;
