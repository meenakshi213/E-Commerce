import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const SecondNavbar = (props) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(props.active);

  return (
    <Navbar collapseOnSelect expand="lg" className="NavBox2">
      <div class="container-fluid secondNav">

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          style={{ justifyContent: "space-between" }}
          id="responsive-navbar-nav"
        >
          <Nav style={{ width: "80%", paddingTop: "1%" }}>
            <p
              className={active === "Dashboard" ? "NavTextActive" : "NavText"}
              onClick={() => {
                setActive("Dashboard");
                navigate("/dashboard");
              }}
            >
             ELECTRONICS
            </p>
            <p
              className={active === "Dashboard" ? "NavTextActive" : "NavText"}
            >
             MEN
            </p>
            <p
              className={active === "Dashboard" ? "NavTextActive" : "NavText"}
            >
              WOMEN
            </p>
            <p
              className={active === "Dashboard" ? "NavTextActive" : "NavText"}
            >
              HOME
            </p>
            <p
              className={active === "Dashboard" ? "NavTextActive" : "NavText"}
            >
              BEAUTY
            </p>
            <p
              className={active === "Dashboard" ? "NavTextActive" : "NavText"}
            >
             BABY & TOYS
            </p>
            <p
              className={active === "Dashboard" ? "NavTextActive" : "NavText"}
            >
           SPORTS
            </p>



          </Nav>

        </Navbar.Collapse>
        <p
              className={active === "YourSession" ? "NavTextActive" : "NavText"}
              onClick={() => {
                navigate("/your_session");
                setActive("YourSession");
              }}
            >
          <img style={{width:"120px",height:"30px"}} src={"https://z.nooncdn.com/s/app/com/noon/images/en_grocery_logo_gif_v3.gif"} />
            </p>
      </div>
    </Navbar>
  );
};

export default SecondNavbar;
