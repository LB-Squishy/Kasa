import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./components/404";
import Homepage from "./pages/Homepage";
import Logement from "./pages/Logement";
import About from "./pages/About";

function Router() {
    return (
        <HashRouter>
            <Layout>
                <Routes>
                    <Route path="/Homepage" element={<Homepage />} />
                    <Route
                        path="/Fiche-Logement/:logementId"
                        element={<Logement />}
                    />
                    <Route path="/A-Propos" element={<About />} />
                    <Route path="/NotFound" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default Router;
