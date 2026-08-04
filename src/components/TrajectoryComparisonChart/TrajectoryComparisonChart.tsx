import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

import type { TrajectoryPoint } from "../../types/TrajectoryPoint";

interface Props {
    data: TrajectoryPoint[];
}

function TrajectoryComparisonChart({
    data
}: Props) {

    return (

        <ResponsiveContainer
            width="100%"
            height="100%"
        >

            <LineChart
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    left: 10,
                    bottom: 10
                }}
            >

                <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#2c313c"
                />

                <XAxis
                    dataKey="currentX"
                    type="number"
                    domain={["auto", "auto"]}
                    tick={{
                        fill: "#888",
                        fontSize: 11
                    }}
                    label={{
                        value: "X (m)",
                        position: "insideBottom",
                        offset: -5,
                        fill: "#888",
                        fontSize: 11
                    }}
                />

                <YAxis
                    dataKey="currentY"
                    type="number"
                    domain={["auto", "auto"]}
                    tick={{
                        fill: "#888",
                        fontSize: 11
                    }}
                    label={{
                        value: "Y (m)",
                        angle: -90,
                        position: "insideLeft",
                        fill: "#888",
                        fontSize: 11
                    }}
                />

                <Tooltip />

                <Legend />

                <Line
                    dataKey="targetY"
                    data={data}
                    xAxisId={0}
                    yAxisId={0}
                    stroke="#4da3ff"
                    strokeWidth={2}
                    dot={false}
                    name="Desired"
                />

                <Line
                    dataKey="currentY"
                    stroke="#2ecc71"
                    strokeWidth={2}
                    dot={false}
                    name="Current"
                />

            </LineChart>

        </ResponsiveContainer>

    );

}

export default TrajectoryComparisonChart;