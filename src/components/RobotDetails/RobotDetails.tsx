import type { Robot } from "../../types/Robot";

import "./RobotDetails.css";


interface RobotDetailsProps {

    robot: Robot;

    onClose: () => void;

}


function RobotDetails({ robot, onClose }: RobotDetailsProps) {

    return (

        <aside className="robot-details">

            <div className="robot-details-header">

                <h2>
                    {robot.id}
                </h2>

                <button onClick={onClose}>
                    ×
                </button>

            </div>


            <div className="robot-details-content">

                <p>
                    Status:
                    <span>{robot.status}</span>
                </p>


                <p>
                    Battery:
                    <span>{robot.battery}%</span>
                </p>


                <p>
                    Last Seen:
                    <span>{robot.lastSeen}</span>
                </p>

            </div>

        </aside>

    );
}


export default RobotDetails;