import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap"
import "./Profile.scss"
import profileImage from "../../images/avatar.jpg"
import Social from "./Social/"

const data = [
  {
    title:"Phone:",
    info:"+1 809 974 9610"
  },

  {
    title:"E-Mail:",
    info:"Admin@website.com"
  },
]

export default function Profile() {
  return (
    <div className="profile">
        <div className="wallpaper"/>
        <div className="dark"/>
        <Container className="box">
            <Row className="info">
            <Col xs={12} md={4}>
                <Image src={profileImage} fluid/>
            </Col>
            <Col xs={12} md={8} className="info__data">
                <span>!Hello!</span>
                <p>Steven De Leon</p>
                <p>Frontend Developer</p>
                <hr/>
                <div className='more-info'>
                    
                {data.map((item, index)=> ( 
                  <div key={index} className='item'>
                  <p>{item.title}</p>
                  <p>{item.info}</p>

                </div>
                  ))}
                
                
                </div>
            </Col>
            </Row>
            <Social/>
        </Container>
    </div>
  )
}
