import React, { useEffect, useState } from "react";
import fakeData from "../../../FakeData/FETDepartmentChartData";
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
const DepartmentChart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      setData(fakeData);
    }, []);
    return (
      
          <Container>
          <h3 className="p-3 mb-3 border-start-0 border-end-0 border border-bottom-dark d-inline-block">
          Faculty of Engineering and Technology 
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
          <Bar dataKey="Female" stackId="a" fill="#E74C3C" />
          <Bar dataKey="Male" stackId="a" fill="#2ECC71" />
        </BarChart>
          </Container>
    );
};

export default DepartmentChart;