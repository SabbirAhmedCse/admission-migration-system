import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import FETDepartmentChart from '../DepartmentChart/FETDepartments/FETDepartmentChart';
import FASTDepartmentChart from './FASTDepartments/FASTDepartmentChart';
import FBSTDepartmentChart from './FBSTDepartments/FBSTDepartmentChart';
import FASSDepartmentChart from './FASSDepartments/FASSDepartmentChart';
import SideNavbar from '../SideNavbar/SideNavbar';
import FacultyDropdown from './FacultyDropdown';
const DepartmentChartContainer = () => {
    const [dropdown,setDropdown] = useState({
        Fet : true,
        Fast: false,
        Fbst : false,
        Fass : false,
    })
    const handleChart = () => {
        if(dropdown.Fet) {
            return <FETDepartmentChart />
        }
        if(dropdown.Fast) {
            return <FASTDepartmentChart />
        }
        if(dropdown.Fbst) {
            return <FBSTDepartmentChart />
        }
        if(dropdown.Fass) {
            return <FASSDepartmentChart />
        }
    }
    return (
        <div className="row">
            <div className="col-md-2">
                <div style={{height: "400px",}}
          className="col-md-2 sticky-top p-0">
                    <div style={{marginRight : "4px"}}><SideNavbar></SideNavbar></div>
                </div>
            </div>
            <div className="col-md-8">
                {handleChart()}
            </div>
            <div className="col-md-2">
                <FacultyDropdown />
            </div>
        </div>
    );
};

export default DepartmentChartContainer;