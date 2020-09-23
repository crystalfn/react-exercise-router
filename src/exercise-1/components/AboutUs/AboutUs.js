import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="about-us">
      <p>Comoany: ThoughtWorks Local</p>
      <p>Location: Wu'han</p>
      <br />
      <p>For more information, please view our&nbsp;
        <Link to="/">website.</Link>
      </p>
    </section>
  );
};

export default AboutUs;