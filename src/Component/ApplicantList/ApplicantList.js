import React, { useEffect, useState } from 'react';
import './ApplicantList.css'
import { AiOutlineUserAdd, AiFillDelete } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import {
  Modal,
  Table,
  Container,
  ModalBody,
  ModalFooter,
  Button,
  Input
} from "reactstrap";
import { MdPersonAddAlt } from "react-icons/md";
import FakeData from '../../FakeData/FakeData';
import SideNavbar from '../SideNavbar/SideNavbar';

const ApplicantList = () => {
  const [state, setState] = useState({
    open: false,
    studentData: [],
  });
  useEffect(() => {
    setState({ ...state, studentData: FakeData });
  }, []);
  const setModal = () => {
    setState({ ...state, open: true });
  };
  const ToggleDetails = () => {
    setState({ ...state, open: !state.open });
  };
  const StudentModal = (props) => {
    return (
      <div>
        <Modal
          className="modal-fullscreen"
          isOpen={state.open}
          toggle={() => setState({ open: false })}
        >
          <h3 className="text-center mt-5 mb-4">Student Information</h3>
          <ModalBody className="">
            <div className="text-center align-items-center row">
              <div className="col-3">
                <div className="text-center mb-4">
                  <img
                    src="https://c1.wallpaperflare.com/preview/756/466/480/university-ha-noi-national-university-college-student-students.jpg"
                    alt=""
                  />
                </div>
                <div className="stdInfo">
                  <h5> Name : {props.studentData.studentName}</h5>
                  <h6>Position : {props.studentData.position}</h6>
                  <h6>Roll : {props.studentData.AdmissionRoll}</h6>
                  <h6>Roll : {props.studentData.fathersName}</h6>
                  <h6>Roll : {props.studentData.motherName}</h6>
                  <h6>Roll : {props.studentData.District}</h6>
                </div>
              </div>
              <div  className="col-8">
                <Table borderless className="border">
                  <thead>
                    <tr>
                      <th>Exam</th>
                      <th>Passing Year</th>
                      <th>GPA</th>
                      <th>Board</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">S.S.C</th>
                      <td>2015</td>
                      <td>5</td>
                      <td>Sylhet</td>
                    </tr>
                    <tr>
                      <th scope="row">H.S.C</th>
                      <td>2017</td>
                      <td>5</td>
                      <td>Dhaka</td>
                    </tr>
                    <tr>
                    <th>Admission Score</th>
                      <td>2018</td>
                      <td>43</td>
                      <td>JUST</td>
                    </tr>
                  </tbody>
                </Table>
                <h4 className="d-inline-block">Dean Office</h4>
                <Table hover borderless className="border">
                  <thead>
                    <tr>
                      <th>Documents</th>
                      <th>Submit</th>
                      <th>Submit Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">S.S.C Markseet</th>
                      <td>
                        <Input type="checkbox" />
                      </td>
                      <td>
                        <Input
                          id="exampleDate"
                          name="date"
                          placeholder="date placeholder"
                          type="date"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">H.S.C Markseet</th>
                      <td>
                        <Input type="checkbox" />
                      </td>
                      <td>
                        <Input
                          id="exampleDate"
                          name="date"
                          placeholder="date placeholder"
                          type="date"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Admission Form</th>
                      <td>
                        <Input type="checkbox" />
                      </td>
                      <td>
                        <Input
                          id="exampleDate"
                          name="date"
                          placeholder="date placeholder"
                          type="date"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">GST AdmitCard</th>
                      <td>
                        <Input type="checkbox" />
                      </td>
                      <td>
                        <Input
                          id="exampleDate"
                          name="date"
                          placeholder="date placeholder"
                          type="date"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Subject Selection Form</th>
                      <td>
                        <Input type="checkbox" />
                      </td>
                      <td>
                        <Input
                          id="exampleDate"
                          name="date"
                          placeholder="date placeholder"
                          type="date"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Testimonial</th>
                      <td>
                        <Input type="checkbox" />
                      </td>
                      <td>
                        <Input
                          id="exampleDate"
                          name="date"
                          placeholder="date placeholder"
                          type="date"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Registration Form</th>
                      <td>
                        <Input type="checkbox" />
                      </td>
                      <td>
                        <Input
                          id="exampleDate"
                          name="date"
                          placeholder="date placeholder"
                          type="date"
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={ToggleDetails}>
              Close
            </Button>
            <Button color="primary" onClick={ToggleDetails}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  };

  const StudentTable = (props) => {
    return (
      <tr>
        {console.log(props)}
        <th scope="row">1</th>
        <td>1</td>
        <td>{props.studentData.studentName}</td>
        <td>CSE</td>
        <td className="fs-3" style={{ color: "green" }}>
          <AiOutlineUserAdd style={{ cursor: "pointer" }} onClick={setModal} />
        </td>
        <td className="fs-3" style={{ color: "red" }}>
          <AiFillDelete />
        </td>
        <td>
          <p class="form-check form-switch">
            <input
              class="form-check-input m-auto"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              class="form-check-label"
              for="flexSwitchCheckDefault"
            ></label>
          </p>
        </td>
      </tr>
    );
  };

  return (
    <div className="row">
      <div
          style={{height: "400px"}}
          className="col-md-2 sticky-top p-0"
        >
        <SideNavbar></SideNavbar>
        </div>
      <div className="col-md-10">
      <div>
      <div className="pt-4">
        <div>
          <h3 className="text-center">Student List</h3>
        </div>
        <div className="container d-flex pb-5">
          <div className="ms-auto">
            <input
              type="text"
              placeholder="Search Student"
              className="form-control"
            />
          </div>
          <div className="searchIcon">
            <GoSearch />
          </div>
        </div>
      </div>
      <Container>
        <Table bordered className="text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Roll</th>
              <th>Name</th>
              <th>Dept</th>
              <th className="fs-2" style={{ color: "green" }}>
                <MdPersonAddAlt />
              </th>
              <th>Remove</th>
              <th>Migration</th>
            </tr>
          </thead>

          <tbody>
            {state.studentData.map((studentData) =>
              state.open ? (
                <StudentModal key={studentData.id} studentData={studentData} />
              ) : (
                <StudentTable key={studentData.id} studentData={studentData} />
              )
            )}
          </tbody>
        </Table>
      </Container>
    </div>
      </div>
    </div>
  );
};

export default ApplicantList;