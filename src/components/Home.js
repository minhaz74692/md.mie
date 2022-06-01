import React from 'react'
import { Link } from 'react-router-dom'
import profilePic from "../image/minhaz1.jpeg"
// import background from "../image/background.png"

const Home = () => {
  return (
    <div className='container-fluid pt-2 pt-lg-5 pb-5 pb-lg-o'>
      <div className='row m-0 p-0 pb-5 pb-lg-0'>
        <div className='col-1'>

        </div>
        <div className='col-lg-4 col-12 m-0 p-0'>
          <img className='profilePic' src={profilePic}></img>
        </div>
        <div className='col-12 col-lg-6 introduction'>
          <h1 className='text-warning text-center'>-I'M MINHAZUL ISLAM</h1>
          <h1 className='text-light text-center'>Web Devevloper</h1>
          <p className='text-light'>I'm a React.js based front‑end web developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent website and web application that improves the lives of those around me.</p>
          <Link to='/about'><button type="button" className="btn btn-dark m-auto">MORE ABOUT ME<i className="fa-solid fa-arrow-right moreMe"></i></button></Link>
        </div>
        <div className='col-lg-1'>
          {/* <ul class>
                  <li><i className="fa-solid fa-house-chimney"></i></li>
                  <li><i className="fa-solid fa-user"></i></li>
                  <li><i className="fa-solid fa-briefcase"></i></li>
                  <li><i className="fa-solid fa-envelope-open"></i></li>
              </ul> */}
        </div>
      </div>

      {/* MODAL PRACTICE */}
    </div>
  )
}

export default Home
