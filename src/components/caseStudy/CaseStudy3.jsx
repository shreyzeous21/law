import React from "react";
import Link from "next/link";
function CaseStudy3() {
  return (
    <>
      <div className="case-study-section  pt-120">
        <div className="container-fluid">
          <div className="row">
            <div className="section-title-area sibling2">
              <div className="marquee">
                <div>
                  <span>Practice Areas</span>
                  <span>Practice Areas</span>
                </div>
              </div>
              <div className="section-title sibling2">
                <span>OUR CASE STUDY</span>
                <h2 className="text-black">
                  Get what we have done for solving the problems.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center g-4">
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="casestudy-single3">
                <div className="image">
                  <img src="assets/images/bg/casestudy31.png" alt="image" />
                  <Link href="/casestudy-details">
                    <a className="case-details-arrow">
                      <img
                        src="assets/images/icons/read-more-arro.svg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <span>Case Study</span>
                  <h4>
                    <Link href="/casestudy-details">
                      <a>Civil Litigation & Property Matters</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="casestudy-single3">
                <div className="image">
                  <img src="assets/images/bg/casestudy32.png" alt="image" />
                  <Link href="/casestudy-details">
                    <a className="case-details-arrow">
                      <img
                        src="assets/images/icons/read-more-arro.svg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <span>Case Study</span>
                  <h4>
                    <Link href="/casestudy-details">
                      <a>Service Law & Administrative Law</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="casestudy-single3">
                <div className="image">
                  <img src="assets/images/bg/casestudy33.png" alt="image" />
                  <Link href="/casestudy-details">
                    <a className="case-details-arrow">
                      <img
                        src="assets/images/icons/read-more-arro.svg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <span>Case Study</span>
                  <h4>
                    <Link href="/casestudy-details">
                      <a>Family & Matrimonial Law</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="casestudy-single3">
                <div className="image">
                  <img src="assets/images/bg/casestudy34.png" alt="image" />
                  <Link href="/casestudy-details">
                    <a className="case-details-arrow">
                      <img
                        src="assets/images/icons/read-more-arro.svg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <span>Case Study</span>
                  <h4>
                    <Link href="/casestudy-details">
                      <a>Labour & Employment Laws</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="casestudy-single3">
                <div className="image">
                  <img src="assets/images/bg/casestudy35.png" alt="image" />
                  <Link href="/casestudy-details">
                    <a className="case-details-arrow">
                      <img
                        src="assets/images/icons/read-more-arro.svg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <span>Case Study</span>
                  <h4>
                    <Link href="/casestudy-details">
                      <a>Criminal Litigation & Trial Advocacy</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="casestudy-single3">
                <div className="image">
                  <img src="assets/images/bg/casestudy36.png" alt="image" />
                  <Link href="/casestudy-details">
                    <a className="case-details-arrow">
                      <img
                        src="assets/images/icons/read-more-arro.svg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <span>Case Study</span>
                  <h4>
                    <Link href="/casestudy-details">
                      <a>Alternate Disputes Resolution</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            <div className="col-lg-12 text-center">
              <Link href="/case-study1">
                <a className="eg-btn btn--primary2 sibling2  btn--lg2 d-inline-flex">
                  <i className="bi bi-dash-lg" />
                  View All Case
                  <i className="bi bi-chevron-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseStudy3;
