import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function About2() {
  const value1 = 45;
  const value2 = 55;
  const value3 = 60;
  return (
    <>
      <div className="about-section2 pt-120 pb-120">
        <div className="container">
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="about2-img">
                <img
                  src="/vkt.jpg"
                  alt="image"
                  className="img-fluid  experience-img"
                />
                <p className="text-black mt-3">
                  Our Principal Counsel, Mr. Sarthak Mittalk at the <br /> Delhi
                  High Court.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title2 sibling3 text-lg-start text-center">
                <span className="fs-5">
                  Tired with running from Pillar to Post with your legal issues
                  and troubles
                </span>

                <h2>You`ve Come to The Right Place.</h2>
              </div>
              <div className="about2-counter-area text-lg-start text-center">
                <p className="para">
                  Chambers of Sarthak Mittalk, Advocates & Solicitors
                  spearheaded by Mr. Sarthak Mittalk is a premier full-service
                  litigation firm based at New Delhi. With more than three
                  decades of experience in the legal field, we are the Top
                  Lawyers in Delhi and are well-equipped to provide the best
                  legal solutions to our clients while dealing with legal
                  matters on Civil, Criminal, Constitutional, Commercial,
                  Labour, Services, Consumer Protection, Matrimonial issues,
                  among other related subjects of law..
                </p>
                {/* <div className="progress-area2">
                  <div id="progress4" className="progress-item">
                    <CircularProgressbar
                      className="yes"
                      value={value1}
                      text={`45%`}
                      circleRatio={0.75}
                      styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        strokeLinecap: "butt",
                        trailColor: "#005153",
                        textColor: "#000",
                        textSize: "15",
                        pathColor: "#ca9457",
                        dominantBaseline: "text-before-edge",
                      })}
                    />

                    <h5>Case Pending</h5>
                  </div>

                  <div id="progress3" className="progress-item">
                    <CircularProgressbar
                      value={value2}
                      text={`55%`}
                      circleRatio={0.75}
                      styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        strokeLinecap: "red",
                        trailColor: "#005153",
                        textColor: "#000",
                        textSize: "15",
                        pathColor: "#ca9457",
                      })}
                    />

                    <h5>Case Lost</h5>
                  </div>
                  <div id="progress4" className="progress-item">
                    <CircularProgressbar
                      value={value3}
                      text={`60%`}
                      circleRatio={0.75}
                      styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        strokeLinecap: "butt",
                        trailColor: "#005153",
                        textColor: "#000",
                        textSize: "15",
                        pathColor: "#ca9457",
                      })}
                    />

                    <h5>Case Pending</h5>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About2;
