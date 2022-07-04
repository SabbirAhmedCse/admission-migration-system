import React from "react";
import "./SideBar.css";
import { FaEnvelope } from "react-icons/fa";
import Counter from "../Counter/Counter";
import { Container } from "reactstrap";
import Typewriter from "typewriter-effect";
import Footer from "../Footer/Footer";
import SideNavbar from "../SideNavbar/SideNavbar";
const SideBar = () => {
  const blockquote = {
    padding: "10px",
    backgroundColor: "#222e3b",
    color: "aliceblue",
    boxShadow: "inset 0 -3em 3em rgba(0,0,0,0.1)",
    "0 0  0 2px rgb(255,255,255)": "0.3em 0.3em 1em rgba(0,0,0,0.3)",
  };
  return (
    <div>
      <div className="row text-center">
        <div
          style={{height: "400px"}}
          className="col-md-2 sticky-top p-0"
        >
        <SideNavbar></SideNavbar>
        </div>
        <div className="col-md-10">
          <div className="backImage">
            <br />
            <br />
            <br />
            
            <h3
              style={{
                fontSize: "40px",
                fontWeight: "bolder",
                color: "#955b00",
              }}
              className="mt-3"
            >
              <strong style={{color: "#062657"}}> Welcome To </strong>
              <div className="mt-3">
                <Typewriter
                  options={{
                    strings: ["Jashore University of Science & Technology"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </h3>
          </div>
          <Container>
            <div
              className="row mt-5"
              style={{
                boxShadow:
                  " 0 3px 6px rgb(0 0 0 / 11%), 0 3px 6px rgb(0 0 0 / 23%)",
                  borderRadius: "10px"
              }}
            >
              <div className="col-md-3">
                <img
                  style={{
                    width: "190px",
                    height: "190px",
                    border: "4px solid #e9ecef",
                    borderRadius: "10px",
                    margin: "-20px 0px 0px 0px",
                    boxShadow: "2px 1px 10px 5px #fbf9f9",
                  }}
                  className=""
                  alt="vc_sir"
                  src="http://dipongkor-002-site7.itempurl.com/img/vc.jpg"
                ></img>
              </div>
              <div className="col-md-9 py-4">
                <div className="fs-3 text-start d-flex align-items-center mb-2">
                  <FaEnvelope
                    style={{
                      fontSize: "35px",
                      color: "whiteSmoke",
                      backgroundColor: "#303A52",
                      borderRadius: "30%",
                      padding: "5px",
                      marginRight: "10px",
                    }}
                  />
                  <Typewriter
                    options={{
                      strings: ["MESSAGE FROM VICE CHANCELLOR"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>

                <div className="messege">
                  <p>
                    It is my great pleasure to invite you to explore the Jashore
                    University of Science and Technology (JUST) online transport
                    procedure through vehicle management website. Contribution
                    of science and technology for developing a nation is well
                    known to all. To meet up the diversified demand of people,
                    information and communication technology and biological
                    sciences are playing the key role.University is the most
                    suitable place for education and research. Universities are
                    playing a vital role in building efficient manpower for the
                    development of the country as well as for the global need.
                    With a view to imparting science and technology oriented
                    education in Bangladesh, the Jashore University of Science &
                    Technology was established in 2007 by the Shadhinota Shorok
                    (Independence Road) in Jashore district. The first batch of
                    students was admitted in 2008-2009 session. The honorable
                    Prime Minister of the People’s Republic of Bangladesh,
                    Sheikh Hasina, inaugurated the campus of the university on
                    December 27, 2010.
                  </p>
                </div>
                <div style={{ textAlign: "end" }}>
                  <p>PROFESSOR DR. MD. ANWAR HOSSAIN</p>
                  <p>Jashore University of Science and Technology</p>
                  <p>Jashore, Bangladesh</p>
                </div>
              </div>
            </div>
          </Container>
          <div className="my-4">
            <Counter />
          </div>
          <div style={blockquote}>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
