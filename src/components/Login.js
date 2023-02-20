import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./../css/Login.css";
import CommonContent from "./CommonContent";

import { ToastContainer, toast } from "react-toastify";

const Login=()=>{
    const navigate = useNavigate();
    const [passwordType, setPasswordType] = useState("password");
    const [initialValues, setInitialValues] = useState({
      email: "",
      password: "",
    });
    const [initialValues2, setInitialValues2] = useState({
      email: "",
      password: "",
      master_course_id: "",
    });
  
    // const [formValues,setFormValues]=useState(initialValues)
    const [formError, setFormError] = useState({
      email: "",
      password: "",
      master_course_id: "",
    });

    function pass() {
        if (passwordType === "password") {
          setPasswordType("text");
        } else {
          setPasswordType("password");
        }
      }
      const handleChange = (e) => {
        const { name, value } = e.target;
        setInitialValues((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        setInitialValues2((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (initialValues.email === "")
          setFormError((prevState) => ({
            ...prevState,
            email: "Email is mandatory",
            password: "",
          }));
        else if (initialValues.password === "")
          setFormError((prevState) => ({
            ...prevState,
            password: "Password is mandatory",
            email: "",
          }));
       
        else {navigate('/dashboard')
      localStorage.setItem('token',initialValues.email)}
      };
    
    return(
        <>
         <div className="outercontainer">
      <div className="container1" style={{ backgroundColor: "#F5E216" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            float: "right",
            marginTop: "2%",
          }}
        >
          <p style={{ marginTop: "1%" }}>Don't have an account? </p>
          <button className="registerButton" onClick={() => navigate("/")}>
            {" "}
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="loginform" autoComplete="off">
          <div class="form-group">
            <label className="loginlabel" for="exampleInputEmail1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={initialValues.email}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={handleChange}
              autoComplete="off"
            />
            <p className="loginFormError">{formError.email}</p>
          </div>
          <div class="form-group">
            <label className="loginlabel" for="exampleInputPassword1">
              Password
            </label>
            <div class="input-group">
              <input
                type={passwordType}
                name="password"
                value={initialValues.password}
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={handleChange}
                autoComplete="off"
              />
              <div
                onClick={() => {
                  pass();
                }}
                class="input-group-addon"
              >
                {passwordType === "password" ? (
                  <i class="fas fa-eye-slash"></i>
                ) : (
                  <i class="fas fa-eye"></i>
                )}
              </div>
            </div>
          </div>

          <p className="loginFormError">{formError.password}</p>
         
          <p
            className="loginForgotPass"
            onClick={() => navigate("/forgot_password")}
          >
            Forgot Password
          </p>
          <button type="submit" className="loginButton">
            Log In
          </button>
        </form>
      </div>
      <CommonContent />
      <ToastContainer />
    </div>
        
        </>
    )
    }
    export default Login