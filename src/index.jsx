import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Error from "./components/404";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import About from "./pages/About";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/Homepage" element={<Home />} />
                <Route path="/Fiche-Logement" element={<Logement />} />
                <Route path="/A-Propos" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);
