import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import fakeData from '../../../FakeData/FASSDepartmentChartData'
const FASSDepartmentChart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      setData(fakeData);
    }, []);
    return (
        
        
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
    );
};

export default FASSDepartmentChart;