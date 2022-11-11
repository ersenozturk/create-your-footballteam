import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTeam from "../pages/CreateTeam";
import GroupedTeam from '../pages/GroupedTeam'
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "../pages/NotFound";
import Info from "../components/Info";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Info/>
        <Routes>
          <Route path="/" element={<CreateTeam />} />
          <Route path="/groupedTeam" element={<GroupedTeam/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
