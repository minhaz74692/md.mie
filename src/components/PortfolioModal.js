import React from 'react';


const PortfolioModal = (props) => {
    const changeImg = () => {
        document.getElementById(props.imgId).style.display = "none";
        document.getElementById(props.imgHover).style.display = "flex";
        // let newDom = document.createElement('div');
        // newDom.classList.add("modalHover")
        // // newDom.style.cssText="";
        // newDom.innerHTML = `${props.prTitle}`
        // domChange.parentNode.replaceChild(newDom, domChange);
    }
    const againImg = () => {
        document.getElementById(props.imgId).style.display = "block";
        document.getElementById(props.imgHover).style.display = "none";
    }
    return (
        <div className='container p-0 d-flex' style={{justifyContent: 'center'}}>
            {/* <div className="modal-dialog modal-dialog-centered"> */}
            <button type="button" onMouseEnter={changeImg} onMouseLeave={againImg} className="btn modalButton m-1" data-bs-toggle="modal" data-bs-target={`#example${props.imgId}`} >
                <img src={props.imageSrc1} id={props.imgId} className="modalImage" alt='null'></img>
                <div id={props.imgHover} className="modalHover">{props.prTitle}</div>
            </button>
            <div className="modal fade" id={`example${props.imgId}`} tabIndex="-1" aria-labelledby={`${props.imgId}Label`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content text-light bg-dark">
                        <div className="modal-header">
                            <h3 className="text-warning text-center flex-grow-1" id={`${props.imgId}Label`}>{props.prTitle}</h3>
                            <button type="button" className="btn-close btn-light ms-0" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-2">
                            <div className='ps-2'>
                                <p ><span className='text-warning fw-bold'>Project: </span>{props.project}</p>
                                <p><span className='text-warning fw-bold'>Software: </span>{props.software}</p>
                                <p><span className='text-warning fw-bold'>Github/Web Link: </span><a href={props.url} target='_blank'>Click to Visit</a></p>
                            </div>
                            <div id={`${props.imgId}Indicators`} className="carousel slide m-0 p-0" data-bs-ride="carousel">
                                <div className="carousel-indicators bg-dark" style={{ opacity: .3, borderRadius: "1rem" }}>
                                    <button type="button" data-bs-target={`#${props.imgId}Indicators`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target={`#${props.imgId}Indicators`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target={`#${props.imgId}Indicators`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target={`#${props.imgId}Indicators`} data-bs-slide-to="3" aria-label="Slide 4"></button>
                                </div>
                                <div className="carousel-inner p-0 m-0" style={{borderRadius:".5rem"}}>
                                    <div className="carousel-item active">
                                        <img src={props.imageSrc1} className="d-block modalImg" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={props.imageSrc2} className="d-block modalImg" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={props.imageSrc3} className="d-block modalImg" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={props.imageSrc4} className="d-block modalImg" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev carousel-control-prev-dark text-dark" type="button" data-bs-target={`#${props.imgId}Indicators`} data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon bg-dark" style={{ borderRadius: "50%" }} aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target={`#${props.imgId}Indicators`} data-bs-slide="next">
                                    <span className="carousel-control-next-icon bg-dark" style={{ borderRadius: "50%" }} aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioModal
