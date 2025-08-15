import React from "react";
import Header from "../others/Header";
import AllTask from "../others/AllTask";
import CreateTask from "../others/CreateTask";

const AdminDashboard = () => {
  return (
    <div className="w-full h-screen p-7">
      <Header />
      <CreateTask />
      <AllTask />
      
    </div>
  );
};

export default AdminDashboard;
