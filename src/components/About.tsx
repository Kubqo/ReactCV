import React from 'react'
import CodeIcon from '@material-ui/icons/Code';
import HeadsetIcon from '@material-ui/icons/Headset';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ExtensionIcon from '@material-ui/icons/Extension';
import { Divider, LinearProgress } from '@material-ui/core';

const About = () => {
    return (
        <div style={{ fontFamily: 'Tahoma, sans-serif' }} className="pt-40 text-center ">
            <b style={{ color: "#00293C" }} className="text-3xl text-gray-800 md:text-5xl"> Hello! My name is </b>
            <b style={{ color: "#31a9b8" }} className="text-3xl text-blue-500 md:text-5xl">Jakub Ďuriš</b>

            <div style={{ fontFamily: 'Verdana, sans-serif' }}>
                <p className="pt-16 pl-5 pr-5">I’m 20 years old university student in Brno at FI MUNI. </p>
                <p className="pl-5 pr-5">I am interested in programming, with over 5 years of experiences in different programming languages. </p>
            </div>

            <div className="pt-16">
                <b className="text-3xl text-gray-800"> Interests </b>
            </div>

            <div className="m-auto pt-8 items-center w-1/2 md:flex md:justify-between md:pt-16 ">
                <div className="w-full p-2">
                    <div className="w-full text-gray-800"><b>Coding</b></div>
                    <CodeIcon style={{ color: "#1e656d" }} fontSize="large" />
                </div>

                <Divider orientation="vertical" flexItem />

                <div className="w-full p-2">
                    <div className="w-full text-gray-800"><b>Music</b></div>
                    <HeadsetIcon style={{ color: "#1e656d" }} fontSize="large" />
                </div>

                <Divider orientation="vertical" flexItem />

                <div className="w-full p-2">
                    <div className="w-full text-gray-800"><b>Games</b></div>

                    <SportsEsportsIcon style={{ color: "#1e656d" }} fontSize="large" />
                </div>

                <Divider orientation="vertical" flexItem />

                <div className="w-full p-2 ">
                    <div className="w-full text-gray-800"><b>Logic puzzles</b></div>
                    <ExtensionIcon style={{ color: "#1e656d" }} fontSize="large" />
                </div>
            </div>

            <div className="pt-16">
                <b className="text-3xl text-gray-800"> Skills </b>
            </div>

            <div className="m-auto pt-8 items-center md:w-1/2 ">
                <b className=" text-gray-800 float-left ml-5" > Python </b> <br/>
                <LinearProgress variant="determinate" value={80} className="m-5 " />
                <b className=" text-gray-800 float-left ml-5" > Unity / C# </b> <br/>
                <LinearProgress variant="determinate" value={70} className="m-5" />
                <b className=" text-gray-800 float-left ml-5" > HTML / CSS </b> <br/>
                <LinearProgress variant="determinate" value={65} className="m-5" />
                <b className=" text-gray-800 float-left ml-5" > React / Typescript </b> <br/>
                <LinearProgress variant="determinate" value={50} className="m-5 " />
                <b className=" text-gray-800 float-left ml-5" > Github </b> <br/>
                <LinearProgress variant="determinate" value={50} className="m-5 " />
                <b className=" text-gray-800 float-left ml-5" > Docker </b> <br/>
                <LinearProgress variant="determinate" value={40} className="m-5 " />
                <b className=" text-gray-800 float-left ml-5" > Dev ops / Google Cloud </b> <br/>
                <LinearProgress variant="determinate" value={30} className="m-5" />
                <b className=" text-gray-800 float-left ml-5" > Wordpress </b> <br/>
                <LinearProgress variant="determinate" value={25} className="m-5 mb-16 md:mb-24" />
            </div>
        </div>
    )
}

export default About