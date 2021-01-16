import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'

const Navbar = () => {
    return (
        <div className="fixed w-full z-10">
            <nav style = {{backgroundColor: "#00293C"}} className="flex justify-between items-center h-16 text-black relative shadow-sm" role="navigation">
                <Link to="/About" className="pl-8 text-white"> <b>JAKUB ĎURIŠ</b> </Link>

                <div className="px-4 curor-pointer text-white md:hidden">
                    <SideBar />
                </div>

                <div className="pr-8 md:block hidden text-white">
                    <Link className="p-4" to="/About"> <b>About me</b> </Link>
                    <Link className="p-4" to="/Education"><b>Education</b> </Link>
                    <Link className="p-4" to="/Portfolio"><b>Portfolio</b> </Link>
                    {/* <Link className="p-4" to="/Contact">Contact </Link> */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
