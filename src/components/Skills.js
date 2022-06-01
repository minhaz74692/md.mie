import React from 'react'

const Skills = (props) => {
    // const skillProgress = [100%{
    //     strokeDashoffset: 472 - props.percentage * 4.72,
    // }];
    // const progressTiming = {
    //     animationDuration: "4s",
    //     animationTimingFunction: "linear",
    //     animationIterationCount: 1,
    //     animationDirection: "forwards"
    // }
    // const progress = document.getElementById("circle");
    // progress.addEventListener('click',()=>{
    // progress.animate(skillProgress, progressTiming)
    // })
    return (
        <div className='skills'>
            <div className='skill'>
                <div className='outer'>
                    <div className='inner'>
                        <div id='number'>{props.number}</div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    {/* <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                    </defs> */}
                    <circle cx="60" cy="60" r="55" strokeLinecap="round" id='circle' style={{ strokeDashoffset: 345 - props.percentage*3.45 }} />
                </svg>
            </div>
            <p className='text-center mb-5 mt-2 skillTitle'>{props.title}</p>
        </div>
    )
}

export default Skills
