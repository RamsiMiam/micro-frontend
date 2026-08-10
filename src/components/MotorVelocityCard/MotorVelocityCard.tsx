import { useState } from "react";

import Card from "../Card/Card";
import MotorDiagnostics from "../MotorDiagnostics/MotorDiagnostics";
import MotorVelocityChart from "../MotorVelocityChart/MotorVelocityChart";
import type { MotorTelemetry } from "../../types/MotorTelemetry";

import "./MotorVelocityCard.css";


interface MotorVelocityCardProps {

    telemetry: MotorTelemetry;

}

function MotorVelocityCard({

    telemetry

}: MotorVelocityCardProps) {

    const [showDiagnostics, setShowDiagnostics] =
        useState(false);

    const currentVelocity =
        telemetry.currentVelocities
            ? telemetry.currentVelocities.reduce(
                (sum, velocity) => sum + velocity,
                0
            ) / telemetry.currentVelocities.length
            : 0;

    const desiredVelocity =
        telemetry.desiredVelocities
            ? telemetry.desiredVelocities.reduce(
                (sum, velocity) => sum + velocity,
                0
            ) / telemetry.desiredVelocities.length
            : 0;

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
                            {currentVelocity.toFixed(2)} m/s
                        </span>

                    </div>


                    <div className="velocity-item">

                        <span className="velocity-label">
                            Target Velocity
                        </span>

                        <span className="velocity-value">
                            {desiredVelocity.toFixed(2)} m/s
                        </span>

                    </div>

                </div>


                <div
                    className="velocity-chart-container"
                    onClick={() => setShowDiagnostics(true)}
                >
                    <MotorVelocityChart
                        data={telemetry.averageVelocityHistory} />
                </div>

            </Card>


            {
                showDiagnostics && (

                    <MotorDiagnostics

                        history={
                            telemetry.motorVelocityHistory
                        }

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