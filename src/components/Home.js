import React from 'react'
import { Link } from 'react-router-dom'
import profilePic from "../image/minhaz1.jpeg";
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';


// import background from "../image/background.png"

const Home = () => {
  return (
    <div>
    <div className='container-fluid pt-2 pt-lg-5 pb-5 pb-lg-o'>
      <div className='row m-0 p-0 pb-5 pb-lg-0'>
        <div className='col-1'>

        </div>
        <div className='col-lg-4 col-12 m-0 p-0'>
          <img className='profilePic' src={profilePic} alt='null'></img>
        </div>
        <div className='col-12 col-lg-6 introduction'>
          <h1 className='text-warning text-center'>-I'M MINHAZUL ISLAM</h1>
          <h3 className='text-light text-center'>Flutter Mobile App Developer</h3>
          <p className='text-light text-justify' >I am a skilled and passionate Flutter developer with 1.5 years of experience in building cross-platform mobile and web applications. With a strong foundation in Dart programming language and expertise in the Flutter framework, I specialize in creating robust and visually appealing user interfaces that deliver exceptional user experiences. My technical proficiency includes a deep understanding of Flutter's widget system, state management techniques, and integration with backend services. I have hands-on experience in implementing responsive designs, handling complex UI interactions, and optimizing app performance for various devices and screen sizes.
          
          </p>
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
      <hr className='horizon'></hr>
      <Portfolio/><hr className='horizon'/>
      <About/><hr className='horizon'/>
      <Contact/>
    </div>
  )
}

export default Home