import { useEffect } from "react";

import TrajectoryComparisonChart from "../TrajectoryComparisonChart/TrajectoryComparisonChart";
import type { TrajectoryPoint } from "../../types/TrajectoryPoint";

import "./TrajectoryDiagnostics.css";
import type { TrajectoryTelemetry } from "../../types/TrajectoryTelemetry";

interface TrajectoryDiagnosticsProps {
    telemetry: TrajectoryTelemetry;
    onClose: () => void;
}

function TrajectoryDiagnostics({
    telemetry, onClose
}: TrajectoryDiagnosticsProps) {

    useEffect(() => {

        const handleEscape = (
            e: KeyboardEvent
        ) => {

            if (e.key === "Escape") {
                onClose();
            }

        };

        window.addEventListener(
            "keydown",
            handleEscape
        );

        return () =>
            window.removeEventListener(
                "keydown",
                handleEscape
            );

    }, [onClose]);

    const trajectoryData: TrajectoryPoint[] =
        telemetry.trajectoryHistory.map(sample => ({
            time: new Date(sample.timestamp).toLocaleTimeString(),
            currentX: sample.state.currentPose.x,
            currentY: sample.state.currentPose.y,
            targetX: sample.state.desiredPose.x,
            targetY: sample.state.desiredPose.y
        })
        );
    const currentPose = telemetry.currentPose;

    const desiredPose =
        telemetry.trajectoryHistory.length > 0
            ? telemetry.trajectoryHistory[
                telemetry.trajectoryHistory.length - 1
            ].state.desiredPose
            : currentPose;

    const currentErrorX = currentPose.x - desiredPose.x;

    const currentErrorY = currentPose.y - desiredPose.y;

    const currentError = Math.sqrt(currentErrorX ** 2 + currentErrorY ** 2);

    const errors =
        telemetry.trajectoryHistory.map(
            sample => {
                const errorX = sample.state.currentPose.x -
                    sample.state.desiredPose.x;
                const errorY = sample.state.currentPose.y -
                    sample.state.desiredPose.y;
                return Math.sqrt(errorX ** 2 + errorY ** 2);
            });

    const averageError =
        errors.length > 0
            ? errors.reduce((sum, error) =>
                sum + error, 0) / errors.length : 0;

    const maximumError = errors.length > 0 ? Math.max(...errors) : 0;

    const headingError = (currentPose.theta - desiredPose.theta) * 180 / Math.PI;

    return (

        <div
            className="trajectory-diagnostics-overlay"
            onClick={onClose}
        >

            <aside
                className="trajectory-diagnostics"
                onClick={(e) =>
                    e.stopPropagation()
                }
            >

                <div className="trajectory-diagnostics-header">

                    <h2>
                        Trajectory Diagnostics
                    </h2>

                </div>

                <div className="trajectory-diagnostics-content">

                    <div className="trajectory-metrics">

                        <div className="trajectory-metric-card">

                            <span className="metric-label">
                                Current Error
                            </span>

                            <span className="metric-value">
                                {currentError.toFixed(2)} m
                            </span>

                        </div>

                        <div className="trajectory-metric-card">

                            <span className="metric-label">
                                Average Error
                            </span>

                            <span className="metric-value">
                                {averageError.toFixed(2)} m
                            </span>

                        </div>

                        <div className="trajectory-metric-card">

                            <span className="metric-label">
                                Maximum Error
                            </span>

                            <span className="metric-value">
                                {maximumError.toFixed(2)} m
                            </span>

                        </div>

                        <div className="trajectory-metric-card">

                            <span className="metric-label">
                                Heading Error
                            </span>

                            <span className="metric-value">
                                {Math.abs(headingError).toFixed(1)}°
                            </span>

                        </div>

                    </div>

                    <div className="trajectory-chart-card">

                        <h3>
                            Desired vs Current Trajectory
                        </h3>

                        <TrajectoryComparisonChart
                            data={trajectoryData}
                        />

                    </div>

                </div>

            </aside>

        </div>

    );

}

export default TrajectoryDiagnostics;