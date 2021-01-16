import React from 'react'
import TimelinePC from './TimelinePC'
import TimelineMobile from './TimelineMobile'

const Resume = () => {
    return (
        <div className = "items-center">
            <h1 className="text-5xl text-gray-800 text-center pt-36 pb-20"> <b>Education</b></h1>
            
            <div className = "md:hidden">
                <TimelineMobile/>
            </div>
            <div className = "md:block hidden">
                <TimelinePC/>
            </div>
                
        </div>
    )
}

export default Resume
