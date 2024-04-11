import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Singe from '../image/singe.png'
import './body.css'
// import { motion } from 'framer-motion'


import React from 'react'

function Body() {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        })
    })

    const hiddensElements = document.querySelectorAll('.hidden')
    hiddensElements.forEach((el) => observer.observe(el))

    return (
        <Container fluid className='a-propos-de-moi'>
            <Row>
                <Col className='hidden col-img-profil hidden-anim-1'>
                    <img src={Singe} className='img-profil' />
                </Col>
                <Col className='hidden hidden-anim-2'>
                    <Row>
                        <p className='title-moi'>A propos de moi</p>
                    </Row>
                    <Row>1/?</Row>
                    <Row>1/?</Row>
                    <Row>1/?</Row>
                    <Row>1/?</Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Body
