import React from "react";

function About3() {
  return (
    <>
      <div className="about-section pt-120">
        <img
          src="assets/images/bg/section-bg1.svg"
          alt="image"
          className="section-bg1 img-fluid"
        />
        <div className="container">
          <div className="row gy-5">
            <div
              className="col-xl-6 text-lg-start d-sm-flex d-none justify-content-center wow fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="about3-image-area">
                <img
                  src="assets/images/bg/about3-bg.png"
                  className="about3-image"
                  alt="image"
                />
                <img
                  src="assets/images/bg/abt-img-text1.svg"
                  className="abt-img-text1"
                  alt="image"
                />
                <img
                  src="assets/images/bg/abt-img-text2.svg"
                  className="abt-img-text2"
                  alt="image"
                />
                <span className="years">05</span>
              </div>
            </div>
            <div className="col-xl-6 d-flex justify-content-xl-end flex-column justify-content-center text-xl-start text-center">
              <div className="section-title-area sibling3">
                <div className="marquee">
                  <div>
                    <span>About Sarthak</span>
                    <span>About Sarthak</span>
                  </div>
                </div>
                <div className="section-title text-xl-start text-center ">
                  <span className="">
                    Tired with running from Pillar to Post with your legal
                    issues and troubles
                  </span>
                  <h2 className="text-dark">You`ve Come to The Right Place</h2>
                </div>
              </div>
              <div className="about3-content ">
                <p className="para text-dark">
                  Chambers of Sarthak Mittal, Advocates & Solicitors spearheaded
                  by Mr. Vivek Kumar Tandon is a premier full-service litigation
                  firm based at New Delhi. With more than three decades of
                  experience in the legal field, we are the Top Lawyers in Delhi
                  and are well-equipped to provide the best legal solutions to
                  our clients while dealing with legal matters on Civil,
                  Criminal, Constitutional, Commercial, Labour, Services,
                  Consumer Protection, Matrimonial issues, among other related
                  subjects of law.
                </p>
                <ul className="about3-list ">
                  <li className="text-dark">
                    Aenean vitae pharetra leo. Aliquam poriana told gotten
                    guning.
                  </li>
                  <li className="text-dark">
                    In aliquet, quam vitae blandit temporg all of person are
                    thisis.
                  </li>
                  <li className="text-dark">
                    Aenean volutpat enim vitae tincidunta we are got this
                    timeng.
                  </li>
                  <li className="text-dark">
                    Felis at venenatis porttitor, nunc arcua law is best of this
                    law.
                  </li>
                </ul>
                {/* <div className="d-flex justify-content-xl-start justify-content-center align-items-center flex-wrap gap-4"> */}
                {/* <div className="about3-author">
                    <img
                      src="assets/images/bg/about3-author.png"
                      className="author-image"
                      alt="image"
                    />
                  </div> */}
                {/* <img src="assets/images/icons/signature3.svg" alt="image" /> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About3;
