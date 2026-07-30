import RobotTable from "../../components/RobotTable/RobotTable";
import type { Robot } from "../../types/Robot";
import RobotDetails from "../../components/RobotDetails/RobotDetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Robots.css";

const robots: Robot[] = [
    {
        id: "RBT-001",
        status: "online",
        lastSeen: "2s ago",
        battery: 87
    },
    {
        id: "RBT-002",
        status: "offline",
        lastSeen: "5m ago",
        battery: 45
    },
    {
        id: "RBT-003",
        status: "online",
        lastSeen: "10s ago",
        battery: 91
    }
];


function Robots() {

    const navigate = useNavigate();

    const [selectedRobot, setSelectedRobot] = useState<Robot | null>(null);

    return (

        <main className="robots-page">

            <RobotTable
                robots={robots}
                onDetails={setSelectedRobot}
            />


            {
                selectedRobot && (

                    <RobotDetails
                        robot={selectedRobot}
                        onClose={() => setSelectedRobot(null)}
                        onTelemetry={(robot) => {

                            navigate(`/robots/${robot.id}/telemetry`);

                        }}
                    />

                )
            }

        </main>

    );
}


export default Robots;