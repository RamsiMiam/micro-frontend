import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Robots from "../pages/Robots/Robots";
import Telemetry from "../pages/Telemetry/Telemetry";
import Settings from "../pages/Settings/Settings";

function AppRouter() {
    return (
        <Routes>

            <Route
                path="/"
                element={<Dashboard />}
            />

            <Route
                path="/robots"
                element={<Robots />}
            />

            <Route
                path="/telemetry"
                element={<Telemetry />}
            />

            <Route
                path="/settings"
                element={<Settings />}
            />

        </Routes>
    );
}

export default AppRouter;