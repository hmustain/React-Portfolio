import React from 'react';
import '../styles/Services.css';
import resume from '../assets/HRM-resume.pdf';

function Services() {
  return (
    <section id="services" className="services-mf pt-5 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">
                Resume
              </h3>
              <p className="subtitle-a">
                Technologies I can assist with include:
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="bi bi-card-checklist"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Front End Web Development</h2>
                <p className="s-description text-center">
                  Can assist with front end web development using HTML, CSS, &amp; JAVASCRIPT.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="bi bi-card-checklist"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Back End Web Development</h2>
                <p className="s-description text-center">
                  Can assist with back end web development using NODE.JS, SQL, NOSQL.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="bi bi-card-checklist"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Full Stack Web Development</h2>
                <p className="s-description text-center">
                  Can assist with full stack web development using MERN (Mongo, Express, React, &amp; Node)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="bi bi-file-earmark-pdf"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Download my resume</h2>
                <a href={resume} download>Click here to download</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
