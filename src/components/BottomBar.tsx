import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const Navbar = () => {
    return (
        <div style = {{backgroundColor: "#1e656d"}} className="fixed w-full bg-gray-800 bottom-0">
                <div className="pr-8 float-left md:block hidden text-yellow-300 animate-pulse">
                  <ErrorOutlineIcon className=" m-3 "/>
                  Still in Development
                </div>             
                
                
                <div className="pr-8 float-right md:block hidden text-white ">
                    <b className=" m-3 ">jakubduris1@gmail.com</b>
                    <a href = "https://github.com/Kubqo"><GitHubIcon className=" m-3 "/></a>
                        <a href = "https://www.facebook.com/Kubqo1337/"><FacebookIcon className=" m-3 "/></a>
                        <a href = "https://www.linkedin.com/in/jakub-%C4%8Furi%C5%A1-786ba21a9/"><LinkedInIcon className=" m-3 "/></a>
                </div>

        </div>
    )
}

export default Navbar
