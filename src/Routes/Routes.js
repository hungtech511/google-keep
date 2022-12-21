import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";

function GoogleKeepCloneRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default GoogleKeepCloneRoutes;
