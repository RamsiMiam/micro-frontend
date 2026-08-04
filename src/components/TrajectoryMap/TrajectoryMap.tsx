import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

import "./TrajectoryMap.css";

import type { Pose } from "../../types/Pose";

interface TrajectoryMapProps {
    path: Pose[];
}

const ARROW_LENGTH = 16;
const ARROW_HEAD_LENGTH = 5;
const ARROW_HEAD_ANGLE = Math.PI / 7;

function PoseArrow(props: any) {

    const { cx, cy, payload } = props;
    const theta = payload?.theta ?? 0;

    // Screen Y grows downward, data Y grows upward,
    // so the vertical component of the direction is inverted.
    const dx = ARROW_LENGTH * Math.cos(theta);
    const dy = -ARROW_LENGTH * Math.sin(theta);

    const x2 = cx + dx;
    const y2 = cy + dy;

    const lineAngle = Math.atan2(dy, dx);

    const hx1 = x2 - ARROW_HEAD_LENGTH * Math.cos(lineAngle - ARROW_HEAD_ANGLE);
    const hy1 = y2 - ARROW_HEAD_LENGTH * Math.sin(lineAngle - ARROW_HEAD_ANGLE);
    const hx2 = x2 - ARROW_HEAD_LENGTH * Math.cos(lineAngle + ARROW_HEAD_ANGLE);
    const hy2 = y2 - ARROW_HEAD_LENGTH * Math.sin(lineAngle + ARROW_HEAD_ANGLE);

    return (
        <g>

            <circle
                cx={cx}
                cy={cy}
                r={2}
                fill="#00bfff"
            />

            <line
                x1={cx}
                y1={cy}
                x2={x2}
                y2={y2}
                stroke="#00bfff"
                strokeWidth={2}
            />

            <polygon
                points={`${x2},${y2} ${hx1},${hy1} ${hx2},${hy2}`}
                fill="#00bfff"
            />

        </g>
    );

}

function TrajectoryMap({
    path
}: TrajectoryMapProps) {

    return (

        <div className="trajectory-map">

            <div className="trajectory-axis-label y">
                Y [m]
            </div>

            <ResponsiveContainer
                width="100%"
                height="85%"
            >

                <ScatterChart
                    margin={{
                        top: 5,
                        right: 15,
                        bottom: 5,
                        left: 10
                    }}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                        opacity={0.15}
                    />

                    <XAxis
                        type="number"
                        dataKey="x"
                        name="X"
                        tick={{
                            fill: "#777",
                            fontSize: 9
                        }}
                    />

                    <YAxis
                        type="number"
                        dataKey="y"
                        name="Y"
                        tick={{
                            fill: "#777",
                            fontSize: 9
                        }}
                        width={30}
                    />

                    <Scatter
                        data={path}
                        fill="#00bfff"
                        shape={PoseArrow}
                    />

                </ScatterChart>

            </ResponsiveContainer>

            <div className="trajectory-axis-label x">
                X [m]
            </div>

        </div>

    );

}

export default TrajectoryMap;