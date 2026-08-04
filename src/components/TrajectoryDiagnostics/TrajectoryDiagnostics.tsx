import { useEffect } from "react";

import TrajectoryComparisonChart from "../TrajectoryComparisonChart/TrajectoryComparisonChart";
import type { TrajectoryPoint } from "../../types/TrajectoryPoint";

import "./TrajectoryDiagnostics.css";

interface TrajectoryDiagnosticsProps {
    onClose: () => void;
}

export const mockTrajectoryData: TrajectoryPoint[] = [
    {
        time: "00:00",
        currentX: 0.00,
        currentY: 0.00,
        targetX: 0.00,
        targetY: 0.00
    },
    {
        time: "00:10",
        currentX: 0.48,
        currentY: 0.40,
        targetX: 0.50,
        targetY: 0.45
    },
    {
        time: "00:20",
        currentX: 0.98,
        currentY: 0.88,
        targetX: 1.00,
        targetY: 0.92
    },
    {
        time: "00:30",
        currentX: 1.45,
        currentY: 1.38,
        targetX: 1.50,
        targetY: 1.42
    },
    {
        time: "00:40",
        currentX: 2.01,
        currentY: 1.84,
        targetX: 2.00,
        targetY: 1.90
    },
    {
        time: "00:50",
        currentX: 2.55,
        currentY: 2.28,
        targetX: 2.50,
        targetY: 2.35
    }
];

function TrajectoryDiagnostics({
    onClose
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
                                0.08 m
                            </span>

                        </div>

                        <div className="trajectory-metric-card">

                            <span className="metric-label">
                                Average Error
                            </span>

                            <span className="metric-value">
                                0.11 m
                            </span>

                        </div>

                        <div className="trajectory-metric-card">

                            <span className="metric-label">
                                Maximum Error
                            </span>

                            <span className="metric-value">
                                0.32 m
                            </span>

                        </div>

                        <div className="trajectory-metric-card">

                            <span className="metric-label">
                                Heading Error
                            </span>

                            <span className="metric-value">
                                2.4°
                            </span>

                        </div>

                    </div>

                    <div className="trajectory-chart-card">

                        <h3>
                            Desired vs Current Trajectory
                        </h3>

                        <TrajectoryComparisonChart
                            data={mockTrajectoryData}
                        />

                    </div>

                </div>

            </aside>

        </div>

    );

}

export default TrajectoryDiagnostics;