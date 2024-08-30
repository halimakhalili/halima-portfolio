import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Halima Khalili </span>
            based in <span className="purple"> Kabul City.</span>
            <br />
            I am currently employed as a remote Software Engineer at Smart Friqi assosiated with Teebl Alhoor Company.
            <br />
            I have Bachelor of Software Engineering from Kabul University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build software that makes a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Halima</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
