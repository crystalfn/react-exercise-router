import React from 'react';
import { Link } from 'react-router-dom';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <p>Comoany: ThoughtWorks Local</p>
      <p>Location: Wu'han</p>
      <br />
      <p>For more information, please view our&nbsp;
        <Link className="website" to="/">website.</Link>
      </p>
    </section>
  );
};

export default AboutUs;