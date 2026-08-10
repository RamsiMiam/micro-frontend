import { useEffect } from "react";

import MotorVelocityChart from "../MotorVelocityChart/MotorVelocityChart";
import type { VelocityPoint } from "../../types/VelocityPoint";
import "./MotorDiagnostics.css";
import type { MotorVelocitySample } from "../../types/MotorVelocitySample";


interface MotorDiagnosticsProps {

    onClose: () => void;

    history: MotorVelocitySample[];

}

function MotorDiagnostics({
    onClose,
    history
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

    const frontLeftData: VelocityPoint[] =
        history.map(sample => ({

            time:
                new Date(
                    sample.timestamp
                ).toLocaleTimeString(),

            current:
                sample.current[0],

            target:
                sample.desired[0]

        }));


    const frontRightData: VelocityPoint[] =
        history.map(sample => ({

            time:
                new Date(
                    sample.timestamp
                ).toLocaleTimeString(),

            current:
                sample.current[1],

            target:
                sample.desired[1]

        }));


    const rearLeftData: VelocityPoint[] =
        history.map(sample => ({

            time:
                new Date(
                    sample.timestamp
                ).toLocaleTimeString(),

            current:
                sample.current[2],

            target:
                sample.desired[2]

        }));


    const rearRightData: VelocityPoint[] =
        history.map(sample => ({

            time:
                new Date(
                    sample.timestamp
                ).toLocaleTimeString(),

            current:
                sample.current[3],

            target:
                sample.desired[3]

        }));

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
                                data={frontLeftData}
                            />

                        </div>

                        <div className="motor-chart-card">

                            <h3>
                                Front Right
                            </h3>

                            <MotorVelocityChart
                                data={frontRightData}
                            />

                        </div>

                        <div className="motor-chart-card">

                            <h3>
                                Rear Left
                            </h3>

                            <MotorVelocityChart
                                data={rearLeftData}
                            />

                        </div>

                        <div className="motor-chart-card">

                            <h3>
                                Rear Right
                            </h3>

                            <MotorVelocityChart
                                data={rearRightData}
                            />

                        </div>

                    </div>

                </div>

            </aside>

        </div>

    );

}

export default MotorDiagnostics;