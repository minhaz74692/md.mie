import React from 'react';
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
import Bike1 from "../image/bike1.png"
import Bike2 from "../image/bike2.png"
import Bike3 from "../image/bike3.png"
import Bike4 from "../image/bike4.png"
import Chair1 from "../image/chair1.png"
import Chair2 from "../image/chair2.png"
import Chair3 from "../image/chair3.png"
import Chair4 from "../image/chair4.png"
import Other1 from "../image/other1.png"
import Other2 from "../image/other2.png"
import Other3 from "../image/other3.png"
import Other4 from "../image/other4.png"
import Other5 from "../image/other5.png"
import Other6 from "../image/other6.png"
import Other7 from "../image/other7.png"
import Other8 from "../image/other8.png"
import Web1 from "../image/web1.png"
import Web2 from "../image/web2.png"
import Web3 from "../image/web3.png"
import Web4 from "../image/web4.png"
import Text1 from "../image/text1.png"
import Text2 from "../image/text2.png"
import Text3 from "../image/text3.png"
import Text4 from "../image/text4.png"
import News1 from "../image/news1.png"
import News2 from "../image/news2.png"
import News3 from "../image/news3.png"
import News4 from "../image/news4.png"
import Mmi1 from "../image/mmi1.png"
import Mmi2 from "../image/mmi2.png"
import Mmi3 from "../image/mmi3.png"
import Mmi4 from "../image/mmi4.png"
import Recipe1 from "../image/recipe1.png"
import Recipe2 from "../image/recipe2.png"
import Recipe3 from "../image/recipe3.png"
import Recipe4 from "../image/recipe4.png"
import Quickshop1 from "../image/quickshop1.png"
import Quickshop2 from "../image/quickshop2.png"
import Quickshop3 from "../image/quickshop3.png"
import Quickshop4 from "../image/quickshop4.png"
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

      {/* Works tab */}
      <div className='workNav mt-0 mt-md-2 mt-lg-4'>
        <ul className="nav nav-pills mb-3 mb-lg-4" id="pills-tab" role="tablist" style={{ justifyContent: "center" }}>
          <li className="nav-item xyz p-0" role="presentation">
            <button className="nav-link active fs-5 px-2 mx-0 mx-lg-2 py-1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Flutter Apps</button>
          </li>
          <li className="nav-item xyz p-0" role="presentation">
            <button className="nav-link fs-5 px-2 py-1" id="pills-web-tab" data-bs-toggle="pill" data-bs-target="#pills-web" type="button" role="tab" aria-controls="pills-web" aria-selected="false">WEB</button>
          </li>
          <li className="nav-item xyz p-0" role="presentation">
            <button className="nav-link fs-5 px-2 py-1" id="pills-autocad-tab" data-bs-toggle="pill" data-bs-target="#pills-autocad" type="button" role="tab" aria-controls="pills-autocad" aria-selected="false">AutoCad</button>
          </li>
        </ul>
      </div>

      <div className="tab-content px-0 px-lg-5" id="pills-tabContent">
        

        
        {/* Flutter APPs */}
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div className='row pb-5'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="quickshop" imgHover="quickshopHover" imageSrc1={Quickshop1} imageSrc2={Quickshop2} imageSrc3={Quickshop3} imageSrc4={Quickshop4} url={'https://github.com/minhaz74692/quickshop_ecommerce'} prTitle="QuickShop E-commerce Flutter App" project="Flutter Development" software="Flutter, Dart, Firebase, Github" />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="xxxx" imgHover="portWebxxHover" imageSrc1={Recipe1} imageSrc2={Recipe2} imageSrc3={Recipe3} imageSrc4={Recipe4} prTitle="Recipe App" project="Flutter Development" software="Flutter, Dart, Wordpress, Rest API, Firebase" />
            </div>
            
          </div>
        </div>
        {/* WEB DESIGN */}
        <div className="tab-pane fade" id="pills-web" role="tabpanel" aria-labelledby="pills-web-tab">
          <div className='row pb-5'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="mmi" imgHover="mmiHover" imageSrc1={Mmi1} imageSrc2={Mmi2} imageSrc3={Mmi3} imageSrc4={Mmi4} url={'https://minhaz74692.github.io/mmi.consultantsBD/'} prTitle="MMI ConsultantsBD Website" project="Web Devevlopment" software="React.JS, Tailwind Css" />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="portfolioWeb" imgHover="portWebHover" imageSrc1={Web1} imageSrc2={Web2} imageSrc3={Web3} imageSrc4={Web4} url={'https://minhaz74692.github.io/md.mie/'} prTitle="My Portfolio Website" project="Web Devevlopment" software="React.JS, Bootstrap" />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="textAnalyzer" imgHover="textHover" imageSrc1={Text1} imageSrc2={Text2} imageSrc3={Text3} imageSrc4={Text4} url={'https://minhaz74692.github.io/Text-Analyzer/'} prTitle="Text Analyzer" project="Web Devevlopment" software="HTML, CSS, React.JS" />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="news" imgHover="newsHover" imageSrc1={News1} imageSrc2={News2} imageSrc3={News3} imageSrc4={News4} url={'https://github.com/minhaz74692/news-basket.git'} prTitle="News Monkey" project="Web Devevlopment" software="React.JS, News API, Bootstrap" />
            </div>
          </div>
        </div>
        {/* AUTOCAD DESIGN */}
        <div className="tab-pane fade show" id="pills-autocad" role="tabpanel" aria-labelledby="pills-autocad-tab">
          <div className='row pb-5'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="lathe" imgHover="latheHover" imageSrc1={Lathe1} imageSrc2={Lathe2} imageSrc3={Lathe3} imageSrc4={Lathe4} prTitle="Engine Lathe" project="3D Modeling" software="AutoCad" />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="cycle" imgHover="cycleHover" imageSrc1={Cycle1} imageSrc2={Cycle2} imageSrc3={Cycle3} imageSrc4={Cycle4} prTitle="Bi-Cycle" project="3D Modeling" software="AutoCad" />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="fan" imgHover="fanHover" imageSrc1={Fan1} imageSrc2={Fan2} imageSrc3={Fan3} imageSrc4={Fan4} prTitle="Table Fan" project="3d Modeling" software="AutoCad" />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="bike" imgHover="bikeHover" imageSrc1={Bike1} imageSrc2={Bike2} imageSrc3={Bike3} imageSrc4={Bike4} prTitle="Motor Bike" project="3d Modeling" software="AutoCad" />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="chair" imgHover="chairHover" imageSrc1={Chair1} imageSrc2={Chair2} imageSrc3={Chair3} imageSrc4={Chair4} prTitle="Flexible Chair" project="3d Modeling" software="AutoCad" />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="other" imgHover="otherHover" imageSrc1={Other1} imageSrc2={Other2} imageSrc3={Other3} imageSrc4={Other4} prTitle="Other Designs" project="3d Modeling" software="AutoCad" />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="others" imgHover="othersHover" imageSrc1={Other5} imageSrc2={Other6} imageSrc3={Other7} imageSrc4={Other8} prTitle="Other Designs" project="3d Modeling" software="AutoCad" />
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Portfolio
