import React from 'react'
import "./AboutMe.scss"
import {Container,Button} from "react-bootstrap"
import CV from "../../images/cv.pdf"

export default function AboutMe() {
  return (
    <Container className="about-me">
    <p>
      Tech lover!! it is a pleasure that you visit my web portfolio, you welcome 
      my name is STEVEN, I was born in the Dominican Republic, my father is French and my mother is Dominican, since I was little I have always been very interested in computers, and with my uncles I learned to repair and use computers! Later I became interested in the web world and began to study web development by myself with the information I found on the web
      I currently consider myself a frontend developer, I love Javascript and its frameworks! and I hope to be part of a great team of developers one day :D More info CV
    </p>
    <hr />

    <a href={CV} target="_blank">
      <Button primary>Descargar CV</Button>
    </a>
  </Container>
  )
}
