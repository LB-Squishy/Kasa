import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./components/404";
import Homepage from "./pages/Homepage";
import Logement from "./pages/Logement";
import About from "./pages/About";
import "./styles/base/normalize.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Router>
            <Layout>
                <Routes>
                    <Route path="/Homepage" element={<Homepage />} />
                    <Route path="/Fiche-Logement" element={<Logement />} />
                    <Route path="/A-Propos" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </Router>
    </React.StrictMode>
);
