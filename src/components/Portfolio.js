import React, { useState } from 'react';
import Lathe1 from "../image/lathe1.png"
import Lathe2 from "../image/lathe2.png"
import Lathe3 from "../image/lathe3.png"
import Lathe4 from "../image/lathe4.png"
import Fan1 from "../image/fan1.png"
import Fan2 from "../image/fan2.png"
import Fan3 from "../image/fan3.png"
import Fan4 from "../image/fan4.png"
import Cycle1 from "../image/cycle1.png"
import Cycle2 from "../image/cycle2.png"
import Cycle3 from "../image/cycle3.png"
import Cycle4 from "../image/cycle4.png"
import Web1 from "../image/web1.png"
import Web2 from "../image/web2.png"
import Web3 from "../image/web3.png"
import Web4 from "../image/web4.png"
import PortfolioModal from './PortfolioModal';



const Portfolio = () => {
  // const [modalImage, setModalImage] = useState({Lathe});
  // const modalHover =()=>{
  //   setModalImage({Lathes})
  // }
  return (
    <div className='container-fluid contactSection text-light' style={{ height: "auto" }}>
      <div className='d-flex contactHead'>
        <h1 className='text-center fw-bold backFont'>WORKS</h1>
        <h1 className='text-center frontFont'>MY <span className='text-warning'>PORTFOLIO</span></h1>
      </div>

      {/* Works tab*/}
      <div className='workNav mt-0 mt-md-2 mt-lg-4'>
        <ul className="nav nav-pills mb-1 mb-lg-3" id="pills-tab" role="tablist" style={{ justifyContent: "center" }}>
          <li className="nav-item xyz p-0" role="presentation">
            <button className="nav-link active fs-6 px-2 py-1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">WEB DESIGN</button>
          </li>
          {/* <li className="nav-item xyz" role="presentation">
            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">WEB DESIGN</button>
          </li> */}
          <li className="nav-item xyz p-0" role="presentation">
            <button className="nav-link fs-6 px-2 py-1" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">AUTOCAD</button>
          </li>
        </ul>
      </div>

      <div className="tab-content px-0 px-lg-5" id="pills-tabContent">
        {/* WEB DESIGN */}
        <div className="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div className='row'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
              <PortfolioModal imgId="portWeb" imgHover="portWebHover" imageSrc1={Web1} imageSrc2={Web2} imageSrc3={Web3} imageSrc4={Web4} prTitle="My Portfolio Website" project="Web Devevlopement" software="HTML, CSS, React.JS" />
            </div>
            <div className='col-4 col-sm-12 col-md-6 col-lg-4'>
            </div>
            <div className='col-4 col-sm-12 col-md-6 col-lg-4'>
            </div>
          </div>
        </div>

        {/* AUTOCAD DESIGN */}
        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
          <div className='row'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
              <PortfolioModal imgId="lathe" imgHover="latheHover" imageSrc1={Lathe1} imageSrc2={Lathe2} imageSrc3={Lathe3} imageSrc4={Lathe4} prTitle="ENGINE LATHE" project="3D Modeling" software="AutoCad" />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
              <PortfolioModal imgId="cycle" imgHover="cycleHover" imageSrc1={Cycle1} imageSrc2={Cycle2} imageSrc3={Cycle3} imageSrc4={Cycle4} prTitle="Bi-Cycle" project="3D Modeling" software="AutoCad" />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
              <PortfolioModal imgId="fan" imgHover="fanHover" imageSrc1={Fan1} imageSrc2={Fan2} imageSrc3={Fan3} imageSrc4={Fan4} prTitle="Table Fan" project="3d Modeling" software="AutoCad" />
            </div>
          </div>
        </div>



        {/* MODAL */}

      </div>
    </div>
  )
}

export default Portfolio
