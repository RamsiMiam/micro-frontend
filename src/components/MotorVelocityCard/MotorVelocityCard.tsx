import { useState } from "react";

import Card from "../Card/Card";
import MotorDiagnostics from "../MotorDiagnostics/MotorDiagnostics";
import MotorVelocityChart from "../MotorVelocityChart/MotorVelocityChart";
import type { VelocityPoint } from "../../types/VelocityPoint";

import "./MotorVelocityCard.css";


export const mockVelocityData: VelocityPoint[] = [
    { time: "00:00", current: 0.10, target: 0.50 },
    { time: "00:10", current: 0.18, target: 0.50 },
    { time: "00:20", current: 0.27, target: 0.50 },
    { time: "00:30", current: 0.35, target: 0.50 },
    { time: "00:40", current: 0.42, target: 0.50 },
    { time: "00:50", current: 0.47, target: 0.50 },
    { time: "01:00", current: 0.52, target: 0.50 },
    { time: "01:10", current: 0.49, target: 0.50 },
    { time: "01:20", current: 0.51, target: 0.50 },
    { time: "01:30", current: 0.48, target: 0.50 },
    { time: "01:40", current: 0.50, target: 0.50 },
    { time: "01:50", current: 0.53, target: 0.50 },
    { time: "02:00", current: 0.50, target: 0.50 }
];

function MotorVelocityCard() {

    const [showDiagnostics, setShowDiagnostics] =
        useState(false);


    return (
        <>

            <Card
                title="Motor Velocity"
                className="motor-velocity-card"
            >

                <div className="velocity-summary">

                    <div className="velocity-item">

                        <span className="velocity-label">
                            Current Velocity
                        </span>

                        <span className="velocity-value">
                            0.45 m/s
                        </span>

                    </div>


                    <div className="velocity-item">

                        <span className="velocity-label">
                            Target Velocity
                        </span>

                        <span className="velocity-value">
                            0.50 m/s
                        </span>

                    </div>

                </div>


                <div
                    className="velocity-chart-container"
                    onClick={() => setShowDiagnostics(true)}
                >
                    <MotorVelocityChart
                        data={mockVelocityData} />
                </div>

            </Card>


            {
                showDiagnostics && (

                    <MotorDiagnostics
                        onClose={() =>
                            setShowDiagnostics(false)
                        }
                    />

                )
            }

        </>
    );
}


export default MotorVelocityCard;