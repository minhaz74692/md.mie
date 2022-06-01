import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                        <Link className="navbar-brand" to="/"><i className="fa-solid fa-hand-back-fist"></i> Md<span className='text-warning'>MIE</span></Link>
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                            {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" active  aria-current="page" to="/"><i className="fa-solid fa-house-chimney"></i> <p className='pNav'>Home</p></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about"><i className="fa-solid fa-user"></i> <p className='pNav'>About</p></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/portfolio"><i className="fa-solid fa-briefcase"></i> <p className='pNav'>Portfolio</p></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact"><i className="fa-solid fa-envelope-open"></i> <p className='pNav'>Contact</p></Link>
                                </li>
                            </ul> */}
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/"?"text-warning":"active"}`}  aria-current="page" to="/"><i className="fa-solid fa-house-chimney"></i> <p className='pNav'>Home</p></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/about"?"text-warning":"active"}`} to="/about"><i className="fa-solid fa-user"></i> <p className='pNav'>About</p></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/portfolio"?"text-warning":"active"}`} to="/portfolio"><i className="fa-solid fa-briefcase"></i> <p className='pNav'>Portfolio</p></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/contact"?"text-warning":"active"}`} to="/contact"><i className="fa-solid fa-envelope-open"></i> <p className='pNav'>Contact</p></Link>
                                </li>
                            </ul>

                        {/* </div> */}
                    </div>
            </nav>
        </>
    )
}

export default Navbar
