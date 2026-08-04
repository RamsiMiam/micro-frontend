import { useState } from "react";

import Card from "../Card/Card";
import TrajectoryMap from "../TrajectoryMap/TrajectoryMap";
//import TrajectoryDiagnostics from "../TrajectoryDiagnostics/TrajectoryDiagnostics";
import MotorDiagnostics from "../MotorDiagnostics/MotorDiagnostics";

import type { Pose } from "../../types/Pose";

import "./RobotPositionCard.css";


const mockTrajectory: Pose[] = [
    { x: 0, y: 0, theta: 0 },
    { x: 0.5, y: 0.1, theta: 0.2 },
    { x: 1.0, y: 0.4, theta: 0.5 },
    { x: 1.5, y: 0.9, theta: 0.8 },
    { x: 2.0, y: 1.5, theta: 1.1 }
];


function TrajectoryCard() {

    const [showDiagnostics, setShowDiagnostics] =
        useState(false);


    return (

        <>

            <Card
                title="Position Tracking"
                className="robot-trajectory-card"
            >

                <div className="trajectory-summary">

                    <div className="trajectory-item">

                        <span className="trajectory-label">
                            Current X
                        </span>

                        <span className="trajectory-value">
                            2.00 m
                        </span>

                    </div>

                    <div className="trajectory-item">

                        <span className="trajectory-label">
                            Current Y
                        </span>

                        <span className="trajectory-value">
                            1.50 m
                        </span>

                    </div>

                    <div className="trajectory-item">

                        <span className="trajectory-label">
                            Heading
                        </span>

                        <span className="trajectory-value">
                            63°
                        </span>

                    </div>

                </div>

                <div
                    className="robot-trajectory-chart-container"
                    onClick={() =>
                        setShowDiagnostics(true)
                    }
                >

                    <TrajectoryMap
                        path={mockTrajectory}
                    />

                </div>

            </Card>

            {
                showDiagnostics && (
                    <MotorDiagnostics
                        onClose={() =>
                            setShowDiagnostics(false)
                        }
                    />
                    // <TrajectoryDiagnostics
                    //     onClose={() =>
                    //         setShowDiagnostics(false)
                    //     }
                    // />

                )
            }

        </>

    );

}

export default TrajectoryCard;