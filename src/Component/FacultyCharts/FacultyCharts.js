import React, { useEffect, useState } from "react";
import fakeData from "../../FakeData/FacultyChartData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Container } from "reactstrap";
import SideNavbar from "../SideNavbar/SideNavbar";

const Charts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(fakeData);
  }, []);
  return (
    <div className=" text-center">
      <div className="row">
        <div className='col-md-2'>
          <SideNavbar></SideNavbar>
        </div>
        
        <div
          style={{
            boxShadow:
              " 0 3px 6px rgb(0 0 0 / 11%), 0 3px 6px rgb(0 0 0 / 23%)",
            borderRadius: "10px",
          }}
          className="col-md-8 py-5 px-3"
        >
          <Container>
          <h3 className="p-3 mb-3 border-start-0 border-end-0 border border-bottom-dark d-inline-block">
            Faculties Seat Distribution
          </h3>
          <BarChart
            className="m-auto"
            width={950}
            height={400}
            data={data}
            margin={{
              top: 15,
              right: 50,
              left: 0,
              bottom: 15,
            }}
            barSize={50}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 20, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" className="mt-5" />
            <Bar
              dataKey="seat"
              fill="rgb(64, 70, 76)"
              background={{ fill: "#eee" }}
            />
          </BarChart>
          </Container>
        </div>
        <div className="col-md-2">
        <div className="d-flex flex-lg-column">
            {data.map((singleData) => (
              <span className='card m-1'>
                <strong>{singleData.name} : </strong>  {singleData.fullName}
              </span>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Charts;
