import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { ImList2 } from "react-icons/im";
import { FcServices, FcAbout } from "react-icons/fc";
import { MdOutlineDashboardCustomize } from "react-icons/md";
const SideNavbar = () => {
    const blockquote = {
        padding: "10px 55px",
        backgroundColor: "#212529",
        color: "aliceblue",
        boxShadow: "inset 0 -3em 3em rgba(0,0,0,0.1)",
        "0 0  0 2px rgb(255,255,255)": "0.3em 0.3em 1em rgba(0,0,0,0.3)",
      };
    return (
        <div>
            <div className="mt-2 text-start ps-4">
            <Link to="/" style={{textDecoration: "none"}}><h6 style={blockquote} className="d-block">
              <AiOutlineHome></AiOutlineHome> Home
            </h6></Link>
            <Link to="/applicant-list" style={{textDecoration: "none"}}><h6 style={blockquote} className="d-block">
              <ImList2></ImList2> ApplicantList
            </h6></Link>
            <Link to="/dashboard" style={{textDecoration: "none"}}><h6 style={blockquote} className="d-block">
              <MdOutlineDashboardCustomize></MdOutlineDashboardCustomize> Dashboard
            </h6></Link>
            <Link style={{textDecoration: "none"}}><h6 style={blockquote}  className="d-block">
              <FcServices></FcServices> Product
            </h6></Link>
            <Link style={{textDecoration: "none"}}><h6 style={blockquote} className="d-block">
              <FcAbout></FcAbout> About
            </h6></Link>
            
          </div>
        </div>
    );
};

export default SideNavbar;