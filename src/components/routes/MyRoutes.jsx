import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Homepage from "../../pages/homepage.jsx";
import Test from "../../pages/Test.jsx";
import Experience from "../../pages/Experience.jsx";
import Projects from "../../pages/Projects.jsx";
import Contact from "../../pages/Contact.jsx";
import Navbar from "./Navbar.jsx";

export default function MyRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="test" element={<Test />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
