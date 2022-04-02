import React from 'react';

const Navbar = () => {
    return (
        <div className='row align-items-center' style={{backgroundColor : "rgb(12 28 45)", color: "whitesmoke"}}>
            <div className='col-md-2 text-center'>
                <img
              src="http://dipongkor-002-site7.itempurl.com/img/just2.png"
              alt="logo"
              style={{ height: "100px", width: "auto" }}
            />
            </div>
            <div className="col-md-10">
            <h2 className="text-center"><strong>Jashore University of Science & Technology Admit Management System</strong></h2>
            </div>
        </div>
    );
};

export default Navbar;