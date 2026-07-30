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

const data = [
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

function MotorVelocityChart() {

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