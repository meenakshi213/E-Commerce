import {  
    Routes,
    Route,
  } from "react-router-dom";
  import Register from "./Register";
  import Login from "./Login";
  import MainNavbar from "./MainNavbar";
  import Dashboard from "./Dashboard";

  const RoutesComp=()=> {
    return (
      <Routes>
       
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/navbar" element={<MainNavbar />} />

        </Routes>
  );
}

export default RoutesComp;