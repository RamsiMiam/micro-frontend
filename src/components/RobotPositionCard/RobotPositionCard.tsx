import { useState } from "react";

import Card from "../Card/Card";
import TrajectoryMap from "../TrajectoryMap/TrajectoryMap";
import TrajectoryDiagnostics from "../TrajectoryDiagnostics/TrajectoryDiagnostics";

import type { TrajectoryTelemetry } from "../../types/TrajectoryTelemetry";
import type { Pose } from "../../types/Pose";

import "./RobotPositionCard.css";

interface TrajectoryCardProps {
    telemetry: TrajectoryTelemetry;
}

function TrajectoryCard({
    telemetry
}: TrajectoryCardProps) {

    const [showDiagnostics, setShowDiagnostics] =
        useState(false);

    const trajectory: Pose[] =
        telemetry.trajectoryHistory.map(
            sample => sample.state.currentPose
        );

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
                            {telemetry.currentPose.x.toFixed(2)} m
                        </span>

                    </div>

                    <div className="trajectory-item">

                        <span className="trajectory-label">
                            Current Y
                        </span>

                        <span className="trajectory-value">
                            {telemetry.currentPose.y.toFixed(2)} m
                        </span>

                    </div>

                    <div className="trajectory-item">

                        <span className="trajectory-label">
                            Heading
                        </span>

                        <span className="trajectory-value">
                            (
                            telemetry.currentPose.theta
                            * 180
                            / Math.PI
                            ).toFixed(0)
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
                        path={trajectory}
                    />

                </div>

            </Card>

            {
                showDiagnostics && (

                    <TrajectoryDiagnostics
                        telemetry={telemetry}
                        onClose={() =>
                            setShowDiagnostics(false)
                        }
                    />

                )
            }

        </>

    );

}

export default TrajectoryCard;