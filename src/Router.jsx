import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Logement from "./pages/Logement";
import About from "./pages/About";
import NotFound from "./components/404";

function Router() {
    return (
        <HashRouter>
            <Layout>
                <Routes>
                    <Route path="/homepage" element={<Homepage />} />
                    <Route
                        path="/fiche-logement/:logementId"
                        element={<Logement />}
                    />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default Router;
