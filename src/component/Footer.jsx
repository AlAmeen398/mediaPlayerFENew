import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-5 bg-dark'>
        <div className='d-flex justify-items-evenly align-items-center mt-3'>
          <div className="overview" style={{ width: "400px" }}>
            <h5>
              <i className="fa-solid fa-video fa-beat-fade text-warning me-3"></i>
              <span style={{ color: 'white', fontWeight: '700' }}>MEDIA PLAYER</span>
            </h5>
            <p style={{ color: 'white', textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa eligendi cum, deleniti quod facilis. Eligendi ut ratione architecto, natus asperiores molestias cum dolorem soluta nisi similique enim veniam distinctio.</p>

          </div>
          <div className='links d-flex flex-column ms-3' style={{ color: "white" }}>
            <h2>Links</h2>

            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>
              Landing Page
            </Link>

            <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>
              Home
            </Link>
            <Link to={'/watch'} style={{textDecoration:'none', color:'white'}}>
              Watch Histoy
            </Link>


          </div>
          <div className='links d-flex flex-column ms-3' style={{ color: "white" }}>
            <h2>Guides</h2>
            <br />
            React
            <br />
            React Bootstrap
            <br />
            Font Awesome
          </div>
          <div className='cntact_us d-flex flex-column ms-3' style={{ color: "white" }}>
            <h2>Contact Us</h2>
            <div className='d-flex flex-row '>
              <input type="text" placeholder='Enter Your Name' className='form-control' />
              <button className='btn btn-warning ms-3'>SUBSCRIBE</button>
            </div>
            <div className='d-flex justify-content-evenly align-items-center mt-4'>
              <i className="fa-brands fa-instagram fa-2xl"></i>
              <i className="fa-brands fa-facebook fa-2xl"></i>
              <i className="fa-brands fa-twitter fa-2xl"></i>
              <i className="fa-brands fa-telegram fa-2xl"></i>
            </div>

          </div>
        </div>

      </div>
      <p className='text-center mt-5'>Copy write &#169; 2025 Media Player Built With React</p>
    </>
  )
}

export default Footer