import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" exact = "true" className="active">About Me</Link>
        </li>
        <li>
          <Link to="/portfolio" className="active">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact" className="active">Contact</Link>
        </li>
        <li>
          <Link to="/resume" className="active">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;