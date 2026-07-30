import { useEffect } from "react";

import type { VelocityPoint } from "../../types/VelocityPoint";
import MotorVelocityChart from "../MotorVelocityChart/MotorVelocityChart";
import "./MotorDiagnostics.css";

interface MotorDiagnosticsProps {
    onClose: () => void;
}

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

function MotorDiagnostics({
    onClose
}: MotorDiagnosticsProps) {

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
            className="motor-diagnostics-overlay"
            onClick={onClose}
        >

            <aside
                className="motor-diagnostics"
                onClick={(e) =>
                    e.stopPropagation()
                }
            >

                <div className="motor-diagnostics-header">

                    <h2>
                        Motor Diagnostics
                    </h2>

                </div>

                <div className="motor-diagnostics-content">

                    <div className="motor-grid">

                        <div className="motor-chart-card">

                            <h3>
                                Front Left
                            </h3>

                            <MotorVelocityChart
                                data={mockVelocityData}
                            />

                        </div>

                        <div className="motor-chart-card">

                            <h3>
                                Front Right
                            </h3>

                            <MotorVelocityChart
                                data={mockVelocityData}
                            />

                        </div>

                        <div className="motor-chart-card">

                            <h3>
                                Rear Left
                            </h3>

                            <MotorVelocityChart
                                data={mockVelocityData}
                            />

                        </div>

                        <div className="motor-chart-card">

                            <h3>
                                Rear Right
                            </h3>

                            <MotorVelocityChart
                                data={mockVelocityData}
                            />

                        </div>

                    </div>

                </div>

            </aside>

        </div>

    );

}

export default MotorDiagnostics;