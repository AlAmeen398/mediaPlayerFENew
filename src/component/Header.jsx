import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div>
                <Link to={'/'} style={{textDecoration:'none'}}>
                    <Navbar className="bg-dark">
                        <Container>
                            <Navbar.Brand >
                                <i className="fa-solid fa-video fa-beat-fade text-warning me-3"></i>
                                <span style={{ color: 'white', fontWeight: '700' }}>MEDIA PLAYER</span>
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                </Link>


            </div>
        </>
    )
}

export default Header