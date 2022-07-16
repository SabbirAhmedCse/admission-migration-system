import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navbar.css'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className='row align-items-center' style={{backgroundColor : "rgb(232 231 231)", color: "#050537"}}>
            <div className='col-md-1 text-center'>
                <img
              src="http://dipongkor-002-site7.itempurl.com/img/just2.png"
              alt="logo"
              style={{ height: "100px", width: "auto" }}
                />
            </div>
            <div className="col-md-10">
                <h3 className="text-center fw-bolder"><strong>Jashore University of Science & Technology Admit Management System</strong></h3>
            </div>
            <div div className = "col-md-1 logInBlock text-center" >
                <div div class = "d-grid gap-2 mx-auto" >
                    <h4 className="m-0"> <Link to='/log-in' className='login-btn'>{loggedInUser.email ? 'LogOut' : "LogIn"}</Link> </h4>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
