import StatusBadge from "../StatusBadge/StatusBadge";
import type { Robot } from "../../types/Robot";

import "./RobotTable.css";


interface RobotTableProps {
    robots: Robot[];
    onDetails: (robot: Robot) => void;
}


function RobotTable({ robots, onDetails }: RobotTableProps) {

    return (
        <table className="robot-table">

            <thead>
                <tr>
                    <th>Robot ID</th>
                    <th>Status</th>
                    <th>Last Seen</th>
                    <th>Battery</th>
                    <th></th>
                </tr>
            </thead>


            <tbody>

                {
                    robots.map(robot => (

                        <tr key={robot.id}>

                            <td>
                                {robot.id}
                            </td>

                            <td>
                                <StatusBadge status={robot.status}/>
                            </td>

                            <td>
                                {robot.lastSeen}
                            </td>

                            <td>
                                {robot.battery}%
                            </td>

                            <td>
                                <button
                                    onClick={() => onDetails(robot)}
                                >
                                    Details
                                </button>
                            </td>

                        </tr>

                    ))
                }

            </tbody>

        </table>
    );
}


export default RobotTable;