import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard';
import FacultyCharts from './Component/FacultyCharts/FacultyCharts';
import Navbar from './Component/Navbar/Navbar';
import StudentsChart from './Component/StudentsChart/StudentsChart';
import DepartmentsCharts from './Component/DepartmentChart/DepartmentsCharts';
import ApplicantList from './Component/ApplicantList/ApplicantList';
import LogIn from './Component/LogIn/LogIn';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivetRoute/PrivateRoute';
import SignUp from './Component/SignUp/SignUp';
import SideNavbar from './Component/SideNavbar/SideNavbar';
import Delete from './Component/Delete/Delete'


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} className="row">
           
       
      <Router>
        <Navbar></Navbar>    
        


            <div className="col-md-2">
                <SideNavbar></SideNavbar>
            </div>
            <div className="col-md-10 Component">
                        <Switch>
                <Route exact path='/'>
                  <Home /> 
                </Route>
                <Route  path='/dashboard'>
                  <Dashboard /> 
                </Route>
                <Route  path='/faculties'>
                  <FacultyCharts /> 
                </Route>
                <Route  path='/departments'>
                  <DepartmentsCharts />
                </Route>
                <Route  path='/students-chart'>
                  <StudentsChart /> 
                </Route>
                <PrivateRoute  path='/applicant-list'>
                  <ApplicantList></ApplicantList>
                </PrivateRoute>
                <Route  path='/log-in'>
                  <LogIn></LogIn>
                </Route>
                <Route path = '/sign-up' >
                  <SignUp></SignUp>
                </Route>
                <Route path = '/delete' >
                  <Delete></Delete>
                </Route>
              </Switch>     
            </div>




      </Router>

    </UserContext.Provider>
  );
}

export default App;
