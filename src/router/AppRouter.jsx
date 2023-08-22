import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import NewBlog from "../pages/NewBlog";
import About from "../pages/About";
import PrivaterRouter from "./PrivaterRouter";
import Login from "../pages/Login";
import MyBlog from "../pages/MyBlog";
import Logout from "../pages/Logout";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Profile from "../pages/Profile";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="about" element={<About />} />
        <Route path="" element={<PrivaterRouter />}>
          <Route path="newblog" element={<NewBlog />} />
          <Route path="myblog" element={<MyBlog />} />
          <Route path="logout" element={<Logout />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
