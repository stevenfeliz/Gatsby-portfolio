import React from 'react'
import "./AboutMe.scss"
import {Container,Button} from "react-bootstrap"
import CV from "../../images/cv.pdf"

export default function AboutMe() {
  return (
    <Container className="about-me">
    <p>
    Solid front-end knowledge of HTML, CSS, Javascript, React, Gatsby.
Experience in Python with Selenium and library Requests, Regex.
Lolixscript with Openbullet opensource webscrapy tools
Strong understanding of design principles, UI/UX, Modular CSS, Bootstrap, Grid layout and responsive design.
Positive attitude, strong work ethic, out-of-the-box thinking and high level of professional integrity. 

Salmos 128:2 ✞
    </p>
    <hr />

    <a href={CV} target="_blank">
      <Button primary>Download CV</Button>
    </a>
  </Container>
  )
}
