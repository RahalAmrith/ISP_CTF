import React, { useState, useEffect, useRef } from "react";
import Particles from "react-particles-js";

// images
import AboutImage from "../Images/sherlock.png";
import P_01 from "../Images/Partners/01.png";
import P_02 from "../Images/Partners/02.png";
import P_03 from "../Images/Partners/03.png";
import P_04 from "../Images/Partners/04.png";
import P_05 from "../Images/Partners/05.png";

const Landing = (props) => {
  // UI
  return (
    <div className="landing_wrapper appPage">
      <div className="mainBanner">
        <Particles
          params={{
            particles: {
              shape: { type: "circle" },
              size: {
                random: true,
                value: 5,
              },
              number: {
                value: 70,
              },
              opacity: {
                value: 0.5,
              },
              color: "#67e6dc",
              move: {
                direction: "top",
                enable: true,
                outMode: "out",
                random: true,
                speed: 1,
                straight: true,
              },
              line_linked: {
                color: "#67e6dc",
                shadow: {
                  enable: false,
                  color: "#67e6dc",
                  blur: 5,
                },
              },
            },
          }}
          style={{
            width: "100%",
            // backgroundImage: `url(${logo})`,
          }}
        />
        <div className="content">
          <h1 className="titleMain">
            The <span>X</span> CTF
          </h1>

          <p className="descMain">
            A web based CTF Challenges for both individuals and software
            companies who uses Node-JS.
          </p>

          <div className="actions">
            <button>Join now</button>
            <button>Learn more about X CTF</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="AboutSection row">
          <div className="col-sm-6 content">
            <h3>About us</h3>
            <p>
              A web based CTF Challenges for both individuals and software
              companies who uses Node-JS. It is a long established fact that a
              reader will be distracted by the readable content of a page when
              looking at its layout.
            </p>

            <button>Learn More</button>
          </div>

          <div className="col-sm-6 image">
            <img alt="" src={AboutImage} />
          </div>
        </div>
      </div>

      <div className="partnersSection">
        <div className="container">
          <h2 className="title">Our Partners</h2>
          <div className="row">
            <div className="col-sm-3 item">
              <img alt="" src={P_01} />
            </div>
            <div className="col-sm-3 item">
              <img alt="" src={P_02} />
            </div>
            <div className="col-sm-3 item">
              <img alt="" src={P_03} />
            </div>
            <div className="col-sm-3 item">
              <img alt="" src={P_04} />
            </div>
            <div className="col-sm-3 item">
              <img alt="" src={P_05} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
