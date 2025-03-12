import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { auth } from "../firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../components/navbar";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Login from "../admin/pages/Login";
import Dashboard from "../admin/pages/Dashboard";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>; // Prevent flashing UI

  return user ? children : <Navigate to="/login" />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Protect Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
