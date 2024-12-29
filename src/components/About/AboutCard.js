import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chet Ry  </span>
            from <span className="purple">  Prey Veng Province, Cambodia.
            </span>
            <br />
            I am currently a student at Beltei iternational university.

            <br />
            And now I also have my own job.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Read a book
            </li>
            <li className="about-activity">
              <ImPointRight /> Nature tour
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
