import React from 'react';
import './SideNavbar.css'
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { ImList2 } from "react-icons/im";
import { FcServices, FcAbout } from "react-icons/fc";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const SideNavbar = () => {
    const blockquote = {
        padding: "10px 55px",
        backgroundColor: "#FAFAF9",
        borderRadius: "25px",
        color: "black",
        boxShadow: "inset 0 -3em 3em rgba(0,0,0,0.1)",
        "0 0  0 2px rgb(255,255,255)": "0.3em 0.3em 1em rgba(0,0,0,0.3)",
      };
      const Active = (e) => {
        const url = e.target;
        url.setAttribute("class","Blockquote");
        console.log(url);
      }
    return (
        <div>
            <div className="mt-2 text-start ps-4"> 
            <NavLink to="/" style={{textDecoration: "none"}}><h6 onClick={(e)=>Active(e)} style={blockquote} >
              <AiOutlineHome className='me-2'></AiOutlineHome> Home
            </h6></NavLink>
            <Link to="/applicant-list" style={{textDecoration: "none"}}><h6 onClick={(e)=>Active(e)} style={blockquote} >
              <ImList2 className='me-2'> </ImList2>  ApplicantList
            </h6></Link>
            <Link to="/dashboard" style={{textDecoration: "none"}}><h6 onClick={(e)=>Active(e)} style={blockquote} >
              <MdOutlineDashboardCustomize className='me-2'></MdOutlineDashboardCustomize> Dashboard
            </h6></Link>
            <Link style={{textDecoration: "none"}}><h6 onClick={(e)=>Active(e)} style={blockquote} >
              <FcServices className='me-2'></FcServices> Product
            </h6></Link>
            <Link style={{textDecoration: "none"}}><h6 onClick={(e)=>Active(e)} style={blockquote}>
              <FcAbout className='me-2'></FcAbout> About
            </h6></Link>
            
          </div>
        </div>
    );
};

export default SideNavbar;