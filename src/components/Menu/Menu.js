import React from 'react'
import "./Menu.scss"
import { Link } from 'gatsby'
import { Container } from 'react-bootstrap'

export default function Menu(props) {
    const {menuColor} = props;
  return (
    <header className="menu" style={{backgroundColor: menuColor || "transparent"}}>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-91093610-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'UA-91093610-1');
</script>



        <Container>
          
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </Container>
    </header>
  )
}
