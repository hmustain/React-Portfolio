import React from "react";

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
                  <a href="assets/img/work-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                    <div className="work-img">
                      <img src="assets/img/work-1.jpg" alt="" className="img-fluid"/>
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Horiseon Website</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Front End</span> / <span className="w-date">Oct 2022</span>
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
        <a href="assets/img/work-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
          <div className="work-img">
            <img src="assets/img/work-2.jpg" alt="" className="img-fluid" />
          </div>
        </a>
        <div className="work-content">
          <div className="row">
            <div className="col-sm-8">
              <h2 className="w-title">Basic Portfolio</h2>
              <div className="w-more">
                <span className="w-ctegory">Front End</span> / <span className="w-date">Oct 2022</span>
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
    <a href="assets/img/work-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
      <div className="work-img">
        <img src="assets/img/work-3.jpg" alt="" className="img-fluid" />
      </div>
    </a>
    <div className="work-content">
      <div className="row">
        <div className="col-sm-8">
          <h2 className="w-title">Password Generator</h2>
          <div className="w-more">
            <span className="w-ctegory">Front End</span> / <span className="w-date">Nov 2022</span>
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
    <a href="assets/img/work-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
      <div className="work-img">
        <img src="assets/img/work-4.jpg" alt="" className="img-fluid" />
      </div>
    </a>
    <div className="work-content">
      <div className="row">
        <div className="col-sm-8">
          <h2 className="w-title">National Park Locator</h2>
          <div className="w-more">
            <span className="w-ctegory">Front End</span> / <span className="w-date">Dec 2022</span>
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
    <a href="assets/img/work-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
      <div className="work-img">
        <img src="assets/img/work-5.jpg" alt="" className="img-fluid" />
      </div>
    </a>
    <div className="work-content">
      <div className="row">
        <div className="col-sm-8">
          <h2 className="w-title">Note Taker</h2>
          <div className="w-more">
            <span className="w-ctegory">Back End</span> / <span className="w-date">Jan 2023</span>
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
        <a href="assets/img/work-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
          <div className="work-img">
            <img src="assets/img/work-6.jpg" alt="" className="img-fluid" />
          </div>
        </a>
        <div className="work-content">
          <div className="row">
            <div className="col-sm-8">
              <h2 className="w-title">The Cassette Tape</h2>
              <div className="w-more">
                <span className="w-ctegory">Back End</span> / <span className="w-date">Feb 2023</span>
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
