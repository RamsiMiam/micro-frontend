import { useEffect } from "react";

import "./MotorDiagnostics.css";

interface MotorDiagnosticsProps {
    onClose: () => void;
}

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

                    Front Left Chart

                    <br />

                    Front Right Chart

                    <br />

                    Rear Left Chart

                    <br />

                    Rear Right Chart

                </div>

            </aside>

        </div>

    );

}

export default MotorDiagnostics;