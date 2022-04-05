import React from "react";
import { Table } from "reactstrap";
import Documents from "./Documents";

const ApplicantResult = (props) => {
  const {
    image,
    studentName,
    position,
    AdmissionRoll,
    fathersName,
    motherName,
    District,
  } = props.state;
  return (
    <>
      <div className="col-3">
        <div className="text-center mb-4">
          <img src={image} alt="" />
        </div>
        <div className="stdInfo">
          <h5> Name : {studentName}</h5>
          <h6>Position : {position}</h6>
          <h6>Admission Roll : {AdmissionRoll}</h6>
          <h6>Fathers Name : {fathersName}</h6>
          <h6>Mothers Name : {motherName}</h6>
          <h6>District : {District}</h6>
        </div>
      </div>
      <div className="col-8">
        <div>
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
        </div>
        <div>
        <h4 className="d-inline-block">Dean Office</h4>
          <Documents />
        </div>
      </div>
    </>
  );
};

export default ApplicantResult;
