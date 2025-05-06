import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import WorksPage from "./pages/WorksPage";
import ProcessPage from "./pages/ProcessPage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/services" element={<ServicesPage />}></Route>
          <Route path="/work" element={<WorksPage />}></Route>
          <Route path="/process" element={<ProcessPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/careers" element={<CareersPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
