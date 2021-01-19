import React from 'react'
import TimelinePC from './TimelinePC'
import TimelineMobile from './TimelineMobile'
import { LinearProgress } from '@material-ui/core'

const Resume = () => {
    return (
        <div className="items-center ">
            {/* <h1 className="text-5xl text-gray-800 text-center pt-36 pb-20"> <b>Education</b></h1> */}

            <div className="md:hidden">
                <TimelineMobile />
            </div>
            <div className="w-2/3 float-left ml-auto hidden md:block">
                <TimelinePC />
            </div>
            <div className=" float-right items-center md:w-1/3 ">
                <h1 className="text-4xl text-gray-800 text-center mb-12 mt-12 md:mt-28 "> <b>Programming languages</b></h1>
                <b className=" text-gray-800 float-left ml-20" > Python </b> <br />
                <LinearProgress variant="determinate" value={80} className="mx-20 my-5 " />
                <b className=" text-gray-800 float-left ml-20" > Unity / C# </b> <br />
                <LinearProgress variant="determinate" value={70} className="mx-20 my-5" />
                <b className=" text-gray-800 float-left ml-20" > HTML / CSS </b> <br />
                <LinearProgress variant="determinate" value={65} className="mx-20 my-5" />
                <b className=" text-gray-800 float-left ml-20" > React / Typescript </b> <br />
                <LinearProgress variant="determinate" value={50} className="mx-20 my-5 " />
                <b className=" text-gray-800 float-left ml-20" > Github </b> <br />
                <LinearProgress variant="determinate" value={50} className="mx-20 my-5 " />
                <b className=" text-gray-800 float-left ml-20" > Docker </b> <br />
                <LinearProgress variant="determinate" value={40} className="mx-20 my-5 " />
                <b className=" text-gray-800 float-left ml-20" > Dev ops / Google Cloud </b> <br />
                <LinearProgress variant="determinate" value={30} className="mx-20 my-5" />
                <b className=" text-gray-800 float-left ml-20" > Wordpress </b> <br />
                <LinearProgress variant="determinate" value={25} className="mx-20 my-5 mb-16 md:mb-24" />
            </div>

        </div>
    )
}

export default Resume
