import React from "react";
import { Table } from "reactstrap";
import Documents from "./Documents";

const ApplicantResult = (props) => {
  const {
    Photo,
    Name,
    Position,
    Roll,
    Father,
    AllottedDepartment,
  } = props.state;

  return (
    <>
      <div className="col-3">
        <div className="text-center mb-4">
          <img src={Photo} alt="" />
        </div>
        <div className="stdInfo">
          <h5> Name : {Name}</h5>
          <h6>Position : {Position}</h6>
          <h6>Admission Roll : {Roll}</h6>
          <h6>Fathers Name : {Father}</h6>
          <h6>District : {AllottedDepartment}</h6>
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
          <h1>Admission Score</h1>
          <Table borderless className="border">
            <thead>
              <tr>
                <th>Physics</th>
                <th>Chemistry</th>
                <th>Math</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>18</td>
              <td>15</td>
              <td>16</td>
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
