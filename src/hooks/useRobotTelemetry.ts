import {
    useEffect,
    useState
} from "react";

import type { RobotState } from "../types/RobotState";
import type { TelemetrySample } from "../types/TelemetrySample";
import type { VelocityPoint } from "../types/VelocityPoint";
import type { MotorVelocitySample } from "../types/MotorVelocitySample";


interface RobotTelemetry {

    connected: boolean;

    state: RobotState | null;

    trajectoryHistory: TelemetrySample[];

    averageVelocityHistory: VelocityPoint[];

    motorVelocityHistory: MotorVelocitySample[];

}


const MAX_HISTORY = 500;


export default function useRobotTelemetry(
    robotId: string
): RobotTelemetry {


    const [
        connected,
        setConnected
    ] = useState(false);


    const [
        state,
        setState
    ] = useState<RobotState | null>(null);


    const [
        trajectoryHistory,
        setTrajectoryHistory
    ] = useState<TelemetrySample[]>([]);


    const [
        averageVelocityHistory,
        setAverageVelocityHistory
    ] = useState<VelocityPoint[]>([]);


    const [
        motorVelocityHistory,
        setMotorVelocityHistory
    ] = useState<MotorVelocitySample[]>([]);



    useEffect(() => {


        const ws = new WebSocket(
            "ws://localhost:3000/ws"
        );


        ws.onopen = () => {

            console.log(
                "WebSocket connected"
            );

            setConnected(true);

        };



        ws.onclose = () => {

            console.log(
                "WebSocket disconnected"
            );

            setConnected(false);

        };



        ws.onerror = (error) => {

            console.error(
                "WebSocket error:",
                error
            );

        };



        ws.onmessage = (event) => {


            try {


                const robot =
                    JSON.parse(
                        event.data
                    ) as RobotState;



                if (
                    robot.id !== robotId
                ) {
                    return;
                }



                setState(robot);



                /*
                 * Trajectory history
                 */
                setTrajectoryHistory(previous => {


                    const sample: TelemetrySample = {

                        timestamp:
                            Date.now(),

                        state:
                            robot

                    };


                    const next = [

                        ...previous,

                        sample

                    ];


                    return next.slice(
                        -MAX_HISTORY
                    );


                });



                /*
                 * Individual motor history
                 * Used by MotorDiagnostics
                 */
                setMotorVelocityHistory(previous => {


                    const sample: MotorVelocitySample = {

                        timestamp:
                            Date.now(),

                        current:
                            robot.currentMotorVelocities,

                        desired:
                            robot.desiredMotorVelocities

                    };


                    const next = [

                        ...previous,

                        sample

                    ];


                    return next.slice(
                        -MAX_HISTORY
                    );


                });



                /*
                 * Average velocity history
                 * Used by MotorVelocityCard
                 */
                setAverageVelocityHistory(previous => {


                    const currentAverage =
                        robot.currentMotorVelocities.reduce(
                            (
                                sum,
                                value
                            ) =>
                                sum + value,
                            0
                        )
                        /
                        robot.currentMotorVelocities.length;



                    const desiredAverage =
                        robot.desiredMotorVelocities.reduce(
                            (
                                sum,
                                value
                            ) =>
                                sum + value,
                            0
                        )
                        /
                        robot.desiredMotorVelocities.length;



                    const point: VelocityPoint = {

                        time:
                            new Date()
                                .toLocaleTimeString(),

                        current:
                            currentAverage,

                        target:
                            desiredAverage

                    };



                    const next = [

                        ...previous,

                        point

                    ];



                    return next.slice(
                        -MAX_HISTORY
                    );


                });


            }

            catch(error) {

                console.error(
                    "Invalid telemetry message:",
                    error
                );

            }


        };



        return () => {

            ws.close();

        };


    }, [robotId]);



    return {

        connected,

        state,

        trajectoryHistory,

        averageVelocityHistory,

        motorVelocityHistory

    };

}