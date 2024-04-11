import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './accueil.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Typed from 'typed.js';


function Navbar_() {

    const el = React.useRef(null);
    const el1 = React.useRef(null);
    const el2 = React.useRef(null);
    const el3 = React.useRef(null);
    const el4 = React.useRef(null);
    const el5 = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['<i>Web developer ..</i>'],
            typeSpeed: 100,
        });

        const typed1 = new Typed(el1.current, {
            strings: ['REACT'],
            typeSpeed: 140,
            loop: true
        });

        const typed2 = new Typed(el2.current, {
            strings: ['PHP'],
            typeSpeed: 500,
            loop: true
        });

        const typed3 = new Typed(el3.current, {
            strings: ['JS'],
            typeSpeed: 700,
            loop: true
        });

        const typed4 = new Typed(el4.current, {
            strings: ['HTML'],
            typeSpeed: 300,
            loop: true
        });

        const typed5 = new Typed(el5.current, {
            strings: ['THREE JS'],
            typeSpeed: 100,
            loop: true
        });
    }, []);

    return (
        <div className='background-accueil'>
            <Container className='container-accueil'>
                <Navbar className='navbar-nav'>
                    <Nav className='nav-bar'>
                        <Nav.Link className="nav-item">
                            <p>A propos de moi</p>
                        </Nav.Link>
                        <Nav.Link className="nav-item">
                            <p>Mes projets</p>
                        </Nav.Link>
                        <Nav.Link className="nav-item">
                            <p>Me contacter</p>
                        </Nav.Link>
                    </Nav>
                </Navbar >
                <div className='typed-text'>
                    <div className='container1'>

                        <div className='texte'>
                            <span ref={el} />
                        </div>
                    </div>
                    <div className='container2'>

                        <div className='texte1'>
                            <span ref={el1} />
                        </div>
                        <br></br>
                        <div className='texte2'>
                            <span ref={el2} />
                        </div>
                        <br></br>
                        <div className='texte3'>
                            <span ref={el3} />
                        </div>
                        <br></br>
                        <div className='texte4'>
                            <span ref={el4} />
                        </div>
                        <br></br>
                        <div className='texte5'>
                            <span ref={el5} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar_
