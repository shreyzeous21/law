import React from "react";

function About1() {
  return (
    <>
      <div className="about-section pt-120 pb-120" id="about">
        <img src="/vkg1.png" alt="image" className="section-bg1 img-fluid" />
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 text-lg-start text-center wow fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="section-title1">
                <h2>Our Philosophy</h2>
                <p>
                  Established on the legacy of unparalleled excellence set forth
                  by Late Shri Roshan Lal Tandon, one of the most distinguished
                  and celebrated first-principles lawyers of the Delhi High
                  Court; Chambers of Sarthak Mittalk, Advocates & Solicitors
                  strives on the same virtuosity and dedication towards
                  attending to every client matter with the utmost integrity and
                  highest level of professionalism. Our incomparable focus on
                  ‘quality’ and rigorous attention to detail stands us apart and
                  has helped us achieve a gold-standard of faith and trust with
                  our clients.
                </p>
              </div>
              {/* <div className="about-content1">
                <h3>Get about our law firm and learn about our expertise.</h3>
                <div className="lawyer-word">
                  <p>
                    In consequat tincidunt turpis sit amet imperdiet. Praesent
                    Classei consequat tincidunt turpis sit amet imperdiet for
                    mind.
                  </p>
                  <img src="assets/images/icons/lawyer-sign.svg" alt="image" />
                  <h6>Simanto Rahman, CEO-Founder</h6>
                </div>
              </div> */}
            </div>
            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
              <div
                className="about1-img wow fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img
                  src="/ourphilosophy.jpg"
                  alt="image"
                  className="img-fluid"
                />
                <div className="experience-tag">
                  <h2>
                    05 <span>Years</span>
                  </h2>
                  <p>We Have A Lot Of Real Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About1;
