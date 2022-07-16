import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import fakeData from '../../../FakeData/FASTDepartmentChartData'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";

const FASTDepartmentChart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      setData(fakeData);
    }, []);
    return (
        
          <Container style={{marginTop : "50px"}}>
          <h3 h3 className = "p-3 mb-3 border-start-0 border-end-0 border border-bottom-dark d-inline-block bg-dark" >
          Faculty of Applied Science and Technology 
          </h3>
          <BarChart
        className="m-auto"
          width={950}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={50}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Female" stackId="a" fill="#8884d8" />
          <Bar dataKey="Male" stackId="a" fill="#82ca9d" />
        </BarChart>
          </Container>
    );
};

export default FASTDepartmentChart;