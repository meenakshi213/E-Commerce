import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const MainNavbar = (props) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(props.active);

  return (
    <Navbar collapseOnSelect expand="lg" className="NavBox" sticky="top">
      <div style={{height:"55px"}} class="container-fluid">
        <Nav style={{ paddingTop: "1%" }}>
          <p>
            <img
              src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
              alt="noon"
              class="sc-b51db3f-1 iCVkuj"
            />
          </p>
        </Nav>
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
              Delivery to Dubai
            </p>
            <input
              type="text"
              name="search"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="What are you looking for?"
            />

          </Nav>
          <NavDropdown
            title={<i class="fa-regular fa-user"></i>}
            id="collasible-nav-dropdown"
            style={{ marginRight: "8%" }}
          >
            <NavDropdown.Item
              onClick={() => {
                navigate("/student_profile", {
                  state: { id: "" },
                });
                setActive("Profile");
              }}
            >
              Profile
            </NavDropdown.Item>
            {localStorage.getItem("token") ? (
              <NavDropdown.Item
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                  setActive("Profile");
                }}
              >
                Logout
              </NavDropdown.Item>
            ) : (
              <NavDropdown.Item
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </NavDropdown.Item>
            )}
          </NavDropdown>
        </Navbar.Collapse>
        <p
              className={active === "YourSession" ? "NavTextActive" : "NavText"}
              onClick={() => {
                navigate("/your_session");
                setActive("YourSession");
              }}
            >
              Cart
            </p>
      </div>
    </Navbar>
  );
};

export default MainNavbar;
