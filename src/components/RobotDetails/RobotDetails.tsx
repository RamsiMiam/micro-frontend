import type { Robot } from "../../types/Robot";

import "./RobotDetails.css";


interface RobotDetailsProps {

    robot: Robot;

    onClose: () => void;

    onTelemetry: (robot: Robot) => void;

}


function RobotDetails({
    robot,
    onClose,
    onTelemetry
}: RobotDetailsProps) {


    return (

        <aside className="robot-details">


            <div className="robot-details-header">

                <h2>
                    {robot.id}
                </h2>


                <button
                    onClick={onClose}
                >
                    ×
                </button>

            </div>



            <div className="robot-details-content">


                <div className="detail-row">

                    <span>
                        Status
                    </span>

                    <span>
                        {robot.status}
                    </span>

                </div>



                <div className="detail-row">

                    <span>
                        Battery
                    </span>

                    <span>
                        {robot.battery}%
                    </span>

                </div>



                <div className="detail-row">

                    <span>
                        Last Seen
                    </span>

                    <span>
                        {robot.lastSeen}
                    </span>

                </div>


            </div>



            <div className="robot-details-actions">

                <button
                    className="telemetry-button"
                    onClick={() => onTelemetry(robot)}
                >
                    View Telemetry
                </button>

            </div>


        </aside>

    );

}


export default RobotDetails;