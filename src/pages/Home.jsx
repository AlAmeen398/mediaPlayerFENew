import React, { useState } from 'react'
import Add from '../component/Add'
import { Link } from 'react-router-dom'
import View from '../component/View'
import Categoty from '../component/Categoty'
import { ToastContainer } from 'react-toastify'

function Home() {
  const [uploadVideoStatus, setUploadVideoStatus]=useState({})
  return (
    <>
    {/* first section */}
    <div className="container d-flex align-items-center justify-content-between mt-5">
      <Add setUploadVideoStatus={setUploadVideoStatus}/>
      <Link style={{textDecoration:'none'}} to={'/watch'}>
      <span className='fs-4 fw-bold text-style'>Watch History <i className='fa-solid fa-clock ms-2'></i></span>
      </Link>
    </div>
    {/* second section */}
    <div className="container-fluid w-100 mb-5 ">
      <div className='row'>
        <div className="col-md-9 text-style ">
          <View uploadVideoStatus={uploadVideoStatus}/>
        </div>
        <div className="col-md-3 text-style">
          <Categoty/>
        </div>
      </div>
    </div>
    <ToastContainer
    position="top-center"
        autoClose={3000}
        pauseOnHover
        theme="colored"/>
    </>
  )
}

export default Home