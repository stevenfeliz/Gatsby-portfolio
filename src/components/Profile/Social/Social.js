import React from 'react'
import { ReactComponent as IcTwitter } from "../../../images/icons/twitter.svg"
import { ReactComponent as  IcInstagram }from "../../../images/icons/instagram.svg"
import { ReactComponent as IcLinkedin } from "../../../images/icons/linkedin.svg"
import { ReactComponent as GitHub } from "../../../images/icons/github.svg"
import "./Social.scss"

const socialMedia = [
  {
    icon: <GitHub/>,
    link: "https://github.com/stevenfeliz",
  },
    {
      icon: <IcTwitter/>,
      link: "https://twitter.com/stevendeleon0",
    },
  
    {
      icon: <IcInstagram/>,
      link: "https://www.instagram.com/s97_leon/",
    },
    {
      icon: <IcLinkedin/>,
      link: "https://www.linkedin.com/in/stevenfeliz",
    },
  ]

  export default function Social() {
    return (
      <div className="social">
       
        {socialMedia.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noreferrer noopener"
          >
             {social.icon}
          </a>
        ))}
      </div>
    )
  }
