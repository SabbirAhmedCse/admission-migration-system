import React from 'react';
import FETDepartmentChart from '../DepartmentChart/FETDepartments/FETDepartmentChart'
import SideNavbar from '../SideNavbar/SideNavbar';
import FASSDepartmentChart from './FASSDepartments/FASSDepartmentChart';
import FASTDepartmentChart from './FASTDepartments/FASTDepartmentChart';
import FBSTDepartmentChart from './FBSTDepartments/FBSTDepartmentChart';
const DepartmentsCharts = () => {
    return (
        <div className=" text-center">
            <div className="row">
            <div
          style={{height: "400px",}}
          className="col-md-2 sticky-top p-0"
        >
        <div style={{marginRight : "4px"}}><SideNavbar></SideNavbar></div>
        </div>
                <div style={{
            boxShadow:
              " 0 3px 6px rgb(0 0 0 / 11%), 0 3px 6px rgb(0 0 0 / 23%)",
            borderRadius: "10px",
          }}
          className="col-md-10 py-5">
                <FETDepartmentChart></FETDepartmentChart>
                <FASTDepartmentChart></FASTDepartmentChart>
                <FBSTDepartmentChart></FBSTDepartmentChart>
                <FASSDepartmentChart></FASSDepartmentChart>
                </div>
            </div>
            
        </div>
    );
};

export default DepartmentsCharts;