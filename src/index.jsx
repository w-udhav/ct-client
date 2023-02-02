import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./Container/Components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Footer />
    </Router>
  </React.StrictMode>
);
