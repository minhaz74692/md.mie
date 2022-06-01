import React from 'react'

const Experiences = (props) => {
  return (
    <div className='resume-box text-light'>
            <ul style={{ listStyle: "none" }}>
                <li>
                    <div className='icon'>
                    <i className="fa-solid fa-briefcase  fs-5 pt-2"></i>
                    </div>
                    <span className='time open-sans-font text-uppercase'>{props.session}</span>
                    <p className="poppins-font text-uppercase pb-0 mb-1" style={{fontSize: "1.1rem",fontWeight:"550"}}>{props.designation}- </p>
                    <p className="place open-sans-font" style={{fontSize: "1rem"}}>{props.organization}</p>
                </li>
            </ul>
        </div>
  )
}

export default Experiences
