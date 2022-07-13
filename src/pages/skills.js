import React from "react"
import { Container } from "react-bootstrap"
import BasicLayout from "../templates/BasicLayout"
import ListSkills from "../components/ListSkills"
import {
  frontendSkills,
  fontendSkillsColors,
  backendSkills,
  backendSkillsColors,
  soSkills,
  soSkillsColors,
  otherSkills,
  otherSkillsColors,
  
} from "../utils/skills"
import "./skills.scss"

export default function Index() {
  return (
    <BasicLayout menuColor="#000">
      <Container className="skills">
        <div className="skills__block">
          <h2>Frontend</h2>
          <ListSkills skills={frontendSkills} colors={fontendSkillsColors} />
        </div>
        <div className="skills__block">
          <h2>Backend</h2>
          <ListSkills skills={backendSkills} colors={backendSkillsColors} />
        </div>
        <div className="skills__block">
          <h2>Other Skills</h2>
          <ListSkills skills={otherSkills} colors={otherSkillsColors} />
          <div className="skills__block">
          <h2>Operating Systems</h2>
          <ListSkills skills={soSkills} colors={soSkillsColors} />
        </div>
        </div>
      </Container>
    </BasicLayout>
  )
}