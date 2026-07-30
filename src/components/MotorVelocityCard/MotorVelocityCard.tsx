import { useState } from "react";

import Card from "../Card/Card";
import MotorDiagnostics from "../MotorDiagnostics/MotorDiagnostics";
import MotorVelocityChart from "../MotorVelocityChart/MotorVelocityChart";

import "./MotorVelocityCard.css";


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
                    <MotorVelocityChart />
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