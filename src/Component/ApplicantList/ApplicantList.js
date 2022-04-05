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
} from "reactstrap";
import FakeData from '../../FakeData/FakeData';
import SideNavbar from '../SideNavbar/SideNavbar';
import ApplicantResult from './ApplicantResult';

const ApplicantList = () => {
  const [state, setState] = useState({
    open: false,
    studentData: [],
    selectedStudent : {},
  });
  useEffect(() => {
    setState({ ...state, studentData: FakeData });
  }, []);
  const setModal = (selectedStd) => {
    setState({ ...state, open: true, selectedStudent: selectedStd});
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
               <ApplicantResult state={state.selectedStudent} />
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
        <th scope="row">{props.studentData.position}</th>
        <td>{props.studentData.AdmissionRoll}</td>
        <td>{props.studentData.studentName}</td>
        <td>CSE</td>
        <td className="fs-3" style={{ color: "green" }}>
          <AiOutlineUserAdd style={{ cursor: "pointer" }} onClick={props.setModal} />
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
      <div className="">
        <div>
          <h3 className="text-center">Student List</h3>
        </div>
        <div className="container d-flex align-items-center pb-5">
          <input
                type="text"
                placeholder="Search Student"
                className="form-control me-2"
              />
            <GoSearch />
        </div>
      </div>
      <Container>
        <Table bordered className="text-center">
          <thead>
            <tr>
              <th>Position</th>
              <th>Roll</th>
              <th>Name</th>
              <th>Dept</th>
              <th>Admit</th>
              <th>Remove</th>
              <th>Migration</th>
            </tr>
          </thead>

          <tbody>
            {state.studentData.map((studentData) =>
              state.open ? (
                <StudentModal key={studentData.id} studentData={studentData} setModal ={() => setModal(studentData)} />
              ) : (
                <StudentTable key={studentData.id} studentData={studentData} setModal ={() => setModal(studentData)} />
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