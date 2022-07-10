import * as React from "react"
import "./index.scss"
import BasicLayout from "../templates/BasicLayout"
import Profile from "../components/Profile/"
import AboutMe from "../components/AboutMe"

export default function Index() {
  return (
    
    <BasicLayout>
      <Profile/>
    <AboutMe/>

    </BasicLayout>
  
  )
}
