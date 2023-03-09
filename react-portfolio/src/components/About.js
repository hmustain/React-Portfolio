import React from "react";
import "../styles/About.css"

const About = () => {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img src="" alt="" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p><span className="title-s">Name: </span> <span>Hunter Mustain</span></p>
                          <p><span className="title-s">Profile: </span> <span>Full Stack Web Developer</span></p>
                          <p><span className="title-s">Email: </span> <span>hunter@bunkerbranding.com</span></p>
                          <p><span className="title-s">Phone: </span> <span>(903) 277-1960</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skill</p>
                      <span>HTML</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>CSS</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>JAVASCRIPT</span>
                      <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>REACT</span>
                      <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      </div>
                      </div>
                      <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        About me
                      </h5>
                    </div>
                    <p className="lead">
                      Hi, my name is Hunter Mustain & I am currently in school learning to be a Full Stack Web Developer. I am currently enrolled in a coding bootcamp offered through the University of Texas at San Antonio.
                    </p>
                    <p className="lead">
                      Professionally, I am employed with a local ecommerce company that specializes in online merch for social media influencers. I am responsible for managing the companies website and I have been with the company since 2020.
                    </p>
                    <p className="lead">
                    When I'm not working or studying, you will find me spending time with my family. I have been married to my wonderful wife, Amy, for 10 years. Together we have twins Barrett and Romy.
                    </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default About;