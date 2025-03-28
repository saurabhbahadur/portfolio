import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { auth } from "../firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import AboutMe from "../components/AboutMe";
import Login from "../admin/pages/Login";
import Dashboard from "../admin/pages/Dashboard";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>; // Prevent flashing UI

  return user ? children : <Navigate to="/login" />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
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
      <Services/>
      <Project/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
