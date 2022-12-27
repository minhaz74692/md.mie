import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Home from './Home';

function submitMessage(){
  alert('Thank you for explore. I will reach you soon.');
  
}

const Contact = () => {
  return (
    <div className='container-fluid contactSection text-light pb-5 pb-lg-0'>
      <div className='d-flex contactHead'>
        <h1 className='text-center fw-bold backFont'>CONTACT</h1>
        <h1 className='text-center frontFont'>GET IN  <span className='text-warning'>TOUCH</span></h1>
      </div>
      <div className="container-fluid row pt-lg-4 pt-2 ps-4 pe-1 px-lg-3 px-lg-5 pb-5 pb-lg-0">
        <div className='col-12 col-lg-4 ps-lg-5'>
          <p className='titleShy'>DON'T BE SHY!</p>
          <p className='shyDes'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          <div className='contactType'>
            <div className='contactIcon'>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className='details'>
              <p className='contactTitle'>ADDRESS POINT</p>
              <p className='contactDetail'>11/8, Nikunja-2, Khilkhet, Dhaka, Bangladesh.</p>
            </div>
          </div>
          <div className='contactType'>
            <div className='contactIcon'>
              <i className="fa-solid fa-envelope-open"></i>
            </div>
            <div className='details'>
              <p className='contactTitle'>MAIL ME</p>
              <a target='_blank' href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtswPCTSczqlRpcrRwDWqTmsrxxfrJtRWsHBzmGvntCRrTdjGlhwTfjLXrbjDJTRJBCvwQ'>
                <p className='contactDetail'>minhaz.ipe.sust@gmail.com</p>
              </a>
            </div>
          </div>
          <div className='contactType'>
            <div className='contactIcon'>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className='details'>
              <p className='contactTitle'>CALL ME</p>
              <p className='contactDetail'>+880 1907-072158</p>
            </div>
          </div>
          <div className='contactLinks'>
            <ul className='social list-unstyled'>
              <li><a title="Visit" rel="noreferrer" target="_blank" href='https://www.facebook.com/minhaz.74692' name="facebook"><i className="fa fa-facebook"></i></a></li>
              <li><a title="Visit" rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/minhazul-islam-7ab09a192/' name="linkedin"><i className="fa fa-linkedin"></i></a></li>
              <li><a title="Visit" rel="noreferrer" target="_blank" href='https://www.github.com/minhaz74692' name="github"><i className="fa fa-github"></i></a></li>
              <li><a title="Visit" rel="noreferrer" target="_blank" href='https://www.instagram.com/minhaz.74692/?hl=en' name="instagram"><i className="fa fa-instagram"></i></a></li>
              <li><a title="Visit" rel="noreferrer" target="_blank" href='https://twitter.com/minhaz74692' name="twitter"><i className="fa fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
        <div className='col-12 col-lg-8 message'>
          <div className='sendMessage'>
            <form>
              <div className='nameEmail'>
              <input className='msgName' type="text" placeholder='YOUR NAME'></input>
              <input className='msgEmail' type="email" placeholder='YOUR EMAIL'></input>
              </div>
              <input className='msgSub' type="text" placeholder='YOUR SUBJECT'></input>
              <textarea className='msgMsg' type="text" placeholder='YOUR MESSAGE'></textarea>
            </form>
          </div>
          <Link to='/' className='' style={{'textDecoration': 'none'}}>
            <button type="submit" className="btn btn-dark m-auto ms-lg-5" onClick={submitMessage}>SEND MESSAGE<i className="fa-solid fa-paper-plane"></i></button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
