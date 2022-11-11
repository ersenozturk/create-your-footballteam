import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTeam from "../pages/CreateTeam";
import ShowTeam from '../pages/ShowTeam'
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CreateTeam />} />
          <Route path="/showTeam" element={<ShowTeam/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
