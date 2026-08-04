import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Robots from "../pages/Robots/Robots";
import Settings from "../pages/Settings/Settings";
import RobotTelemetry from "../pages/RobotTelemetry/RobotTelemetry";

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
                path="/settings"
                element={<Settings />}
            />

            <Route
                path="/robots/:id/telemetry"
                element={<RobotTelemetry />}
            />

        </Routes>
    );
}

export default AppRouter;