import React from 'react';
import './SideNavbar.css';
import FakeData from './../../FakeData/SideNavbar'
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { ImList2 } from "react-icons/im";
import { FcServices, FcAbout } from "react-icons/fc";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const SideNavbar = () => {


    return (
        <div>
          

          <div>
          {FakeData.map(item => (
            <div className='m-2 blockquote'>
              <h4>{item.value}</h4>
            </div>
              
            
          ))}
          </div>


            <div className="mt-2 text-start ps-4"> 
            <NavLink to="/" style={{textDecoration: "none"}}><h6  className="blockquote" >
              <AiOutlineHome className='me-2'></AiOutlineHome> Home
            </h6></NavLink>
            <Link to="/applicant-list" style={{textDecoration: "none"}}><h6 className="blockquote" >
              <ImList2 className='me-2'> </ImList2>  ApplicantList
            </h6></Link>
            <Link to="/dashboard" style={{textDecoration: "none"}}><h6 className="blockquote" >
              <MdOutlineDashboardCustomize className='me-2'></MdOutlineDashboardCustomize> Dashboard
            </h6></Link>
            <Link style={{textDecoration: "none"}}><h6 className="blockquote" >
              <FcServices className='me-2'></FcServices> Product
            </h6></Link>
            <Link style={{textDecoration: "none"}}><h6 className="blockquote">
              <FcAbout className='me-2'></FcAbout> About
            </h6></Link>
            
          </div>
        </div>
    );
};

export default SideNavbar;