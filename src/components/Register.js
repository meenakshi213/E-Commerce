import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  './../css/Login.css'
import CommonContent from "./CommonContent";

const Register=()=>{

    const navigate = useNavigate();
    const [passwordType, setPasswordType] = useState("password");
    const [initialValues, setInitialValues] = useState({
      first_name: "",
      last_name: "",
      contact_number: "",
      email: "",
      password: "",
     
    });
    // const [formValues,setFormValues]=useState(initialValues)
    const [formError, setFormError] = useState({
      first_name: "",
      last_name: "",
      contact_number: "",
      email: "",
      password: "",
     
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInitialValues((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        let timeout;
        clearTimeout(timeout);
    
        timeout = setTimeout(() => {
          initialValues.name !== "" && onBlurCaptureHandler(e);
        }, 1000);
      };

      const onBlurCaptureHandler = (e, phone) => {
        if (phone) {
          if (phone == "contact_number") {
            if (e === "") {
              setFormError((prevState) => ({
                ...prevState,
                ["contact_number"]: "Number can't be empty ",
              }));
            } else
              setFormError((prevState) => ({
                ...prevState,
                ["contact_number"]: "",
              }));
          }
        } else {
          const { name, value } = e.target;
          if (name == "email") {
            let reg =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (value === "") {
              setFormError((prevState) => ({
                ...prevState,
                [name]: "Email can't be empty ",
              }));
            } else if (reg.test(value) === false) {
              setFormError((prevState) => ({
                ...prevState,
                [name]: "Email does not exist.",
              }));
            } else
              setFormError((prevState) => ({
                ...prevState,
                [name]: "",
              }));
          } else if (name == "first_name" || name == "last_name") {
            let reg = /^[A-Za-z][A-Za-z0-9_]{2,20}$/;
            if (value === "") {
              setFormError((prevState) => ({
                ...prevState,
                [name]: "Name can't be empty ",
              }));
            } else if (reg.test(value) === false) {
              setFormError((prevState) => ({
                ...prevState,
                [name]: "Please enter correct Name.",
              }));
            } else
              setFormError((prevState) => ({
                ...prevState,
                [name]: "",
              }));
          } else if (name == "password") {
            let reg =
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            if (value === "") {
              setFormError((prevState) => ({
                ...prevState,
                [name]: "Password can't be empty ",
              }));
            } else if (reg.test(value) === false) {
              setFormError((prevState) => ({
                ...prevState,
                [name]:
                  "Minimum eight characters, at least one letter, one number and one special character.",
              }));
            } else
              setFormError((prevState) => ({
                ...prevState,
                [name]: "",
              }));
          }
        }
      };

      function pass() {
        if (passwordType === "password") {
          setPasswordType("text");
        } else {
          setPasswordType("password");
        }
      }

      const handleSubmit = (e) => {
        e.preventDefault();
    
        let regEmail =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let regName = /^[A-Za-z][A-Za-z0-9_]{2,20}$/;
        let regPassword =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    
        if (initialValues.first_name === "") {
          setFormError((prevState) => ({
            ...prevState,
            ["first_name"]: "Name can't be empty ",
          }));
        } else if (regName.test(initialValues.first_name) === false) {
          setFormError((prevState) => ({
            ...prevState,
            ["first_name"]: "Please enter correct Name.",
          }));
        } else
          setFormError((prevState) => ({
            ...prevState,
            ["first_name"]: "",
          }));
    
        if (initialValues.last_name === "") {
          setFormError((prevState) => ({
            ...prevState,
            ["last_name"]: "Name can't be empty ",
          }));
        } else if (regName.test(initialValues.last_name) === false) {
          setFormError((prevState) => ({
            ...prevState,
            ["last_name"]: "Please enter correct Name.",
          }));
        } else
          setFormError((prevState) => ({
            ...prevState,
            ["last_name"]: "",
          }));
    
        if (initialValues.email === "") {
          setFormError((prevState) => ({
            ...prevState,
            ["email"]: "Email can't be empty ",
          }));
        } else if (regEmail.test(initialValues.email) === false) {
          setFormError((prevState) => ({
            ...prevState,
            ["email"]: "Email does not exist.",
          }));
        } else
          setFormError((prevState) => ({
            ...prevState,
            ["email"]: "",
          }));
    
        if (initialValues.password === "") {
          setFormError((prevState) => ({
            ...prevState,
            ["password"]: "Password can't be empty ",
          }));
        } else if (regPassword.test(initialValues.password) === false) {
          setFormError((prevState) => ({
            ...prevState,
            ["password"]:
              "Minimum eight characters, at least one letter, one \
                        number and one special character.",
          }));
        } else
          setFormError((prevState) => ({
            ...prevState,
            ["password"]: "",
          }));
    
        if (initialValues.contact_number === "") {
          setFormError((prevState) => ({
            ...prevState,
            ["contact_number"]: "Contact Number can't be empty ",
          }));
        } else
          setFormError((prevState) => ({
            ...prevState,
            ["contact_number"]: "",
          }));
    

    
        if (
          formError.first_name === "" &&
          formError.last_name === "" &&
          formError.email === "" &&
          formError.password === "" &&
          formError.contact_number === "" 
        ) {
         toast.info("You have succesfully registered with us. Please login.")
          setFormError((prevState) => ({
            ...prevState,
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            contact_number: "",
            master_course_id: "",
          }));
        }
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
          <p style={{ marginTop: "1%" }}>Already have an account? </p>
          <button className="registerButton" onClick={() => navigate("/login")}>
            {" "}
            Login
          </button>
        </div>

        <form onSubmit={handleSubmit} className="registerform">
          <div class="form-group">
            <label className="loginlabel" for="exampleInputFirstName1">
              First Name
            </label>
            <input
              type="name"
              name="first_name"
              value={initialValues.first_name}
              class="form-control"
              id="exampleInputFirstName1"
              // placeholder="Enter email"
              onChange={handleChange}
              onBlur={onBlurCaptureHandler}
            />
            <p className="loginFormError">{formError.first_name}</p>
          </div>
          <div class="form-group">
            <label className="loginlabel" for="exampleInputEmail1">
              Last Name
            </label>
            <input
              type="name"
              name="last_name"
              value={initialValues.last_name}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              // placeholder="Enter email"
              onChange={handleChange}
              onBlur={onBlurCaptureHandler}
            />
            <p className="loginFormError">{formError.last_name}</p>
          </div>

          <div class="form-group">
            <label className="loginlabel" for="exampleInputEmail1">
              Mobile Number
            </label>
            <input
              type="tel"
              maxLength={11}
              defaultCountry="IN"
              class="form-control"
              name="contact_number"
              value={initialValues.contact_number}
              onChange={handleChange}
              onBlur={() =>
                onBlurCaptureHandler(
                  initialValues.contact_number,
                  "contact_number"
                )
              }
            />
            <p className="loginFormError">{formError.contact_number}</p>
          </div>
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
              // placeholder="Enter email"
              onChange={handleChange}
              onBlur={onBlurCaptureHandler}
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
                // placeholder="Password"
                onChange={handleChange}
                onBlur={onBlurCaptureHandler}
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
            <p className="loginFormError">{formError.password}</p>
       
          </div>

          <button type="submit" className="loginButton">
            Sign Up
          </button>
        </form>
      </div>
      <CommonContent />
      <ToastContainer />
    </div>
    </>
)
}
export default Register