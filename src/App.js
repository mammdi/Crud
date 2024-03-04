import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/auth/Login";
import Signup from "./component/auth/Signup";
import Table from "./pages/table";
import Editcrud from "./pages/Editcrud";
import AddData from "./pages/AddData";


// import User from "./pages/User";

function App() {
  return (
    <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/table" element={<Table />} />
          <Route path="/table/editcrud/:id" element={<Editcrud />} />
          <Route path="/addcrud" element={<AddData />} />
        </Routes>
    </Router>
  );
}

export default App;
