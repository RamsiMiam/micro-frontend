import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

import "./MotorVelocityChart.css";
import type { VelocityPoint } from "../../types/VelocityPoint";

interface MotorVelocityChartProps {
    data: VelocityPoint[];
}

function MotorVelocityChart({
    data
}: MotorVelocityChartProps) {

    return (

        <div className="velocity-chart">

            <div className="chart-y-label">
                Speed [m/s]
            </div>

            <ResponsiveContainer
                width="100%"
                height="85%"
            >

                <LineChart
                    data={data}
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
                        dataKey="time"
                        tick={{
                            fill: "#777",
                            fontSize: 9
                        }}
                    />

                    <YAxis
                        domain={[0, 1]}
                        tick={{
                            fill: "#777",
                            fontSize: 9
                        }}
                        width={30}
                    />

                    <Tooltip
                        contentStyle={{
                            background: "#111",
                            border: "1px solid #333",
                            fontSize: "11px"
                        }}
                    />

                    <Line
                        type="monotone"
                        dataKey="current"
                        name="Current"
                        stroke="#00bfff"
                        strokeWidth={2}
                        dot={false}
                    />

                    <Line
                        type="monotone"
                        dataKey="target"
                        name="Target"
                        stroke="#ffd700"
                        strokeWidth={1.5}
                        strokeDasharray="4 4"
                        dot={false}
                    />

                </LineChart>

            </ResponsiveContainer>

            <div className="chart-x-label">
                Time [s]
            </div>

        </div>

    );

}

export default MotorVelocityChart;