import React from "react";
import '../styles/Projects.css';
import work1 from '../assets/images/work-1.jpg';
import work2 from '../assets/images/work-2.jpg';
import work3 from '../assets/images/work-3.jpg';
import work4 from '../assets/images/work-4.jpg';
import work5 from '../assets/images/work-5.jpg';
import work6 from '../assets/images/work-6.jpg';


function Projects() {
    return (
        <section id="work" className="portfolio-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">
                    Portfolio
                  </h3>
                  <p className="subtitle-a">
                    A few of my projects.
                  </p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="work-box">
                  <a href={work1} data-gallery="portfolioGallery" className="portfolio-lightbox">
                    <div className="work-img">
                      <img src={work1} alt="" className="img-fluid"/>
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Horiseon Website</h2>
                        <div className="w-more">
                        <span className="w-ctegory"><a href="https://github.com/hmustain/02-Challenge">GitHub</a></span> / <span className="w-date">Oct 2022</span>

                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="https://hmustain.github.io/02-Challenge/"><span className="bi bi-plus-circle"></span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
      <div className="work-box">
        <a href={work4} data-gallery="portfolioGallery" className="portfolio-lightbox">
          <div className="work-img">
            <img src={work4} alt="" className="img-fluid" />
          </div>
        </a>
        <div className="work-content">
          <div className="row">
            <div className="col-sm-8">
              <h2 className="w-title">Basic Portfolio</h2>
              <div className="w-more">
              <span className="w-ctegory"><a href="https://github.com/hmustain/Hunter-Mustain-Portfolio">GitHub</a></span> / <span className="w-date">Oct 2022</span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="w-like">
                <a href="https://hmustain.github.io/Hunter-Mustain-Portfolio/"><span className="bi bi-plus-circle"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
  <div className="work-box">
    <a href={work3} data-gallery="portfolioGallery" className="portfolio-lightbox">
      <div className="work-img">
        <img src={work3} alt="" className="img-fluid" />
      </div>
    </a>
    <div className="work-content">
      <div className="row">
        <div className="col-sm-8">
          <h2 className="w-title">Password Generator</h2>
          <div className="w-more">
          <span className="w-ctegory"><a href="https://github.com/hmustain/Password-Generator">GitHub</a></span> / <span className="w-date">Nov 2022</span>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="w-like">
            <a href="https://hmustain.github.io/Password-Generator/"><span className="bi bi-plus-circle"></span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="col-md-4">
  <div className="work-box">
    <a href={work4} data-gallery="portfolioGallery" className="portfolio-lightbox">
      <div className="work-img">
        <img src={work4} alt="" className="img-fluid" />
      </div>
    </a>
    <div className="work-content">
      <div className="row">
        <div className="col-sm-8">
          <h2 className="w-title">National Park Locator</h2>
          <div className="w-more">
          <span className="w-ctegory"><a href="https://github.com/hmustain/National-Park-Locator">GitHub</a></span> / <span className="w-date">Dec 2022</span>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="w-like">
            <a href="https://hmustain.github.io/National-Park-Locator/"><span className="bi bi-plus-circle"></span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="col-md-4">
  <div className="work-box">
    <a href={work3} data-gallery="portfolioGallery" className="portfolio-lightbox">
      <div className="work-img">
        <img src={work3} alt="" className="img-fluid" />
      </div>
    </a>
    <div className="work-content">
      <div className="row">
        <div className="col-sm-8">
          <h2 className="w-title">Note Taker</h2>
          <div className="w-more">
          <span className="w-ctegory"><a href="https://github.com/hmustain/Note-Taker">GitHub</a></span> / <span className="w-date">Jan 2023</span>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="w-like">
            <a href="https://note-taker-hm.herokuapp.com/"><span className="bi bi-plus-circle"></span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="col-md-4">
      <div className="work-box">
        <a href={work6} data-gallery="portfolioGallery" className="portfolio-lightbox">
          <div className="work-img">
            <img src={work6} alt="" className="img-fluid" />
          </div>
        </a>
        <div className="work-content">
          <div className="row">
            <div className="col-sm-8">
              <h2 className="w-title">The Cassette Tape</h2>
              <div className="w-more">
              <span className="w-ctegory"><a href="https://github.com/hmustain/The-Cassette-Tape">GitHub</a></span> / <span className="w-date">Feb 2023</span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="w-like">
                <a href="https://the-cassette-tape.herokuapp.com/"><span className="bi bi-plus-circle"></span></a>
              </div>
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

export default Projects;
