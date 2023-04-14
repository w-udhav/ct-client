import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./Container/Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Container/Layout/Login";
import PageNotFound from "./Container/Layout/PageNotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  </React.StrictMode>
);
