import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import fakeData from '../../../FakeData/FBSTDepartmentChartData'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";

const FBSTDepartmentChart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      setData(fakeData);
    }, []);
    return (
        
          <Container style={{marginTop : "50px"}}>
          <h3 className="p-3 mb-3 border-start-0 border-end-0 border border-bottom-dark d-inline-block">
          Faculty of Applied Science and Technology 
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
    );
};

export default FBSTDepartmentChart;