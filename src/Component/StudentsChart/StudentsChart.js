import React, { useCallback, useEffect, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import fakeData from "../../FakeData/StudentsChartsData";
import SideNavbar from "../SideNavbar/SideNavbar";


const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="red"
      >{`Students Number ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="red"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function StudentsChart() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );


  const [data, setData] = useState([]);
  useEffect(() => {
    setData(fakeData);
  }, []);



  return (
    <div className="row text-center">
        <div
          style={{height: "400px"}}
          className="col-md-2 sticky-top p-0"
        >
        <div style={{marginRight : "4px"}}><SideNavbar></SideNavbar></div>
        </div>
        <div  style={{
            boxShadow:
              " 0 3px 6px rgb(0 0 0 / 11%), 0 3px 6px rgb(0 0 0 / 23%)",
            borderRadius: "10px",
          }}
          className="col-md-10  px-3 margin-auto">
        <h3 className="p-3 mb-3 border-start-0 border-end-0 border border-bottom-dark d-inline-block">
          Faculty of Engineering and Technology 
          </h3>
          <div>
          <PieChart width={420} height={420} style={{margin: 'auto'}}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={200}
        cy={200}
        innerRadius={65}
        outerRadius={130}
        fill="rgb(65, 70, 75)"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
          </div>
        </div>
    </div>
  );
}