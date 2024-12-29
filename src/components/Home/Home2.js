import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import { FaFacebook } from "react-icons/fa";

import Tilt from "react-parallax-tilt";
import {

  AiFillInstagram,
} from "react-icons/ai";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I specialize in designing and developing efficient, functional, and user-friendly software solutions using various programming languages and technologies. My responsibilities include:
              <br />
              <br />-Software and Web Development:
              <i>
                <b className="purple"> Building dynamic websites, applications, and tools tailored to meet specific needs. </b>
              </i>
              <br />
              <br />
              -UI/UX Design: &nbsp;
              <i>
                <b className="purple"> Crafting intuitive and visually appealing interfaces for a seamless user experience. </b>
             
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              -Database Management:  &nbsp;
              <i>
                <b className="purple"> Designing, implementing, and maintaining databases to ensure data is well-organized and secure.</b>
             
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              -System Analysis & Problem-Solving:  &nbsp;
              <i>
                <b className="purple"> Analyzing system requirements, troubleshooting issues, and implementing effective technical solutions.</b>
             
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Thank you <b className="purple">!!</b>
              <i>
                <b className="purple">
                 
                </b>
              </i>
              &nbsp;
              <i>
                <b className="purple"></b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
             
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/RyChetz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />

                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/chetryinnocent/profilecard/?igsh=MW1sbG1rNTVkNDA0cA=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;