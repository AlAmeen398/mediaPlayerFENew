import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      {/* section 1 */}
      <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly'>
        <Row>
          <Col>
            <h3 className='text-style'>Welcome To <span className='text-warning'>Media Player</span></h3>
            <p className='text-style mt-4' style={{ textAlign: 'justify' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolorem, sint doloribus ut itaque alias animi laudantium inventore veritatis quas est distinctio sit consectetur ab at totam, ipsa, iusto quasi.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas corporis, velit ratione modi rerum ut nam quasi repellat, delectus iusto praesentium! Assumenda explicabo sapiente eos possimus at. Optio, cum dolor.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus officia excepturi, earum velit quam maxime quae porro, doloribus blanditiis quas et deleniti culpa placeat, atque repellendus dicta harum natus. Facere.
            </p>
            <Link to={'/home'}>
              <button className='btn btn-warning mt-3'>Get Started <i className='fa-solid fa-arrow-right fa-fade ms-2'></i></button>

            </Link>
          </Col>
          <Col>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" width={'400px'} />
          </Col>
        </Row>
      </Container>
      {/* section 2 */}
      <div className="container">
        <h3 className='text-style'> Features</h3>
        <div className='d-flex justify-content-evenly align-items-center mt-5 '>
          <Link to={'/home'} style={{textDecoration:'none'}} >
            <Card style={{ width: '18rem',  }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
              <Card.Body style={{textDecoration:'none'}}>
                <Card.Title >ADD VIDEOS</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Link>
          <Link to={'/home'} style={{textDecoration:'none'}}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif " />
              <Card.Body>
                <Card.Title>VIEW VIDEOS</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Link>
          <Link to={'/watch'} style={{textDecoration:'none'}}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
              <Card.Body>
                <Card.Title>VIEW HISTORY</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Link>
        </div>
        {/* section3 */}
        <div className="container mt-5 mb-5 border border-secondary border-2 rounded p-5">
          <Row>
            <Col>
            <h3 className='text-style'>Simple And Powerful</h3>
            <p className='text-style'><span className='fs-5 fw-bolder'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima. A ipsum et expedita? Esse, fugit, provident ad accusamus explicabo veniam similique repellat quasi ex iure possimus labore quas amet!</p>
            <p className='text-style'><span className='fs-5 fw-bolder'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima. A ipsum et expedita? Esse, fugit, provident ad accusamus explicabo veniam similique repellat quasi ex iure possimus labore quas amet!</p>
            <p className='text-style'><span className='fs-5 fw-bolder'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima. A ipsum et expedita? Esse, fugit, provident ad accusamus explicabo veniam similique repellat quasi ex iure possimus labore quas amet!</p>
            </Col>
            <Col>
            <div>
              <iframe width="100%" height="400" src="https://www.youtube.com/embed/vee_P6pIv_E?list=RDvee_P6pIv_E" title="What Jhumka? - 8K Video | Rocky Aur Rani Kii Prem Kahaani | Ranveer, Alia, Pritam, Arijit, Jonita" allowFullScreen></iframe>
            </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default LandingPage