import React from "react";
import './Counter.css'
import { Container } from "reactstrap";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const Counter = () => {
  // const counters = document.querySelectorAll(".counter");
  // counters.forEach(counter => {
  //     counter.innerText ="0";
  //     const updateCounter = () =>{
  //         const target = +counter.getAttribute('data-target');
  //         const c = +counter.innerText;
  //         const increment = target / 200;

  //         if(c<target){
  //             counter.innerText = `${Math.ceil(c+increment)}`;
  //             setTimeout(updateCounter,1);
  //         }else{
  //             counter.innerText = target;
  //         }

  //     }
  //     updateCounter();
  // });

  return (
    <Container>
      <div className="row d-flex align-items-center justify-content-between">
        
        <div
          className="col-md-4"
          style={{
            boxShadow: "2px 1px 10px 5px rgba(0, 0, 0, 0.2)",
            borderRadius: "20px",
            width: "31%",
          }}
        >
          <Link to='/faculties'>
            <img
              style={{ width: "70%", height: "210px" }}
              alt="Faculties"
              src="./faculty.jpg"
            />
            <div style={{ fontSize: "30px" }}>
              <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
                {({ isVisible }) => (
                  <div style={{ height: 35 }}>
                    {isVisible ? <CountUp end={7} /> : null}
                  </div>
                )}
              </VisibilitySensor>
            </div>
            <strong style={{color : 'rgb(65, 70, 75)'}}>FACULTIES</strong>
          </Link>
        </div>
        
        <div
          className="col-md-4 mx-4"
          style={{
            boxShadow: "2px 1px 10px 5px rgba(0, 0, 0, 0.2)",
            width: "31%",
            borderRadius: "20px",
          }}
        >
          <Link to='/departments'>
          <img
            style={{
              width: "70%",
              height: "165px",
              marginTop: "40px",
              padding: "30px",
            }}
            alt="Faculties"
            src="./Departments.png"
          />
          <div style={{ fontSize: "30px" }}>
            <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
              {({ isVisible }) => (
                <div style={{ height: 35 }}>
                  {isVisible ? <CountUp end={26} /> : null}
                </div>
              )}
            </VisibilitySensor>
          </div>
          <strong style={{color : 'rgb(65, 70, 75)'}}>DEPARTMENTS</strong>
          </Link>
        </div>
        <div
          className="col-md-4"
          style={{
            boxShadow: "2px 1px 10px 5px rgba(0, 0, 0, 0.2)",
            borderRadius: "20px",
            width: "31%",
          }}
        >
          <Link to='/students-chart' className="link">
          <img
            style={{ width: "70%", height: "205px" }}
            alt="Faculties"
            src="./Students.png"
          />
          <div style={{ fontSize: "30px" }}>
            <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
              {({ isVisible }) => (
                <div style={{ height: 35 }}>
                  {isVisible ? <CountUp end={950} /> : null}
                </div>
              )}
            </VisibilitySensor>
          </div>
          <strong style={{color : 'rgb(65, 70, 75)'}}>STUDENTS</strong>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Counter;
