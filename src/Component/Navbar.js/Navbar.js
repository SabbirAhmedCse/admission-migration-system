import React from 'react';

const Navbar = () => {
    return (
        <div className='row align-items-center' style={{backgroundColor : "rgb(232 231 231)", color: "#050537"}}>
            <div className='col-md-2 text-center'>
                <img
              src="http://dipongkor-002-site7.itempurl.com/img/just2.png"
              alt="logo"
              style={{ height: "100px", width: "auto" }}
            />
            </div>
            <div className="col-md-10">
            <h3 className="text-center fw-bolder"><strong>Jashore University of Science & Technology Admit Management System</strong></h3>
            </div>
        </div>
    );
};

export default Navbar;
