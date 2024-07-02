import React from "react";
import "./Admin.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Addproduct from "../../components/Addproduct/Addproduct";
import Listproduct from "../../components/Listproduct/Listproduct";
import Order from "../../components/Ordered/Order";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<Addproduct />}></Route>
        <Route path="/listproduct" element={<Listproduct />}></Route>
        <Route path="/ordered" element={<Order />}></Route>
      </Routes>
    </div>
  );
};

export default Admin;
