import "./RobotTelemetry.css";

import { useParams } from "react-router-dom";

import Card from "../../components/Card/Card";

import MotorVelocityCard from "../../components/MotorVelocityCard/MotorVelocityCard";

import type { Pose } from "../../types/Pose";

import TrajectoryCard from "../../components/RobotPositionCard/RobotPositionCard";

const mockTrajectory: Pose[] = [
    { x: 0, y: 0, theta: 0 },
    { x: 0.5, y: 0.1, theta: 0.2 },
    { x: 1.0, y: 0.4, theta: 0.5 },
    { x: 1.5, y: 0.9, theta: 0.8 },
    { x: 2.0, y: 1.5, theta: 1.1 }
];

function RobotTelemetry() {

    const { id } = useParams();


    return (

        <main className="robot-telemetry-page">


            <header className="telemetry-header">

                <h1>
                    Robot Telemetry
                </h1>


                <span>
                    {id}
                </span>

            </header>



            <section className="telemetry-grid">


                <Card title="Robot State">


                    <div className="telemetry-data">

                        <p>
                            Status
                            <span>
                                Online
                            </span>
                        </p>


                        <p>
                            Battery
                            <span>
                                87%
                            </span>
                        </p>


                        <p>

                            <span>
                                Linear Speed
                            </span>

                            <span>
                                0.45 m/s
                            </span>

                        </p>


                    </div>


                </Card>



                <Card title="Position">


                    <div className="telemetry-data">


                        <p>
                            X
                            <span>
                                2.35 m
                            </span>
                        </p>


                        <p>
                            Y
                            <span>
                                1.20 m
                            </span>
                        </p>

                        <p>

                            <span>
                                Theta
                            </span>

                            <span>
                                45°
                            </span>

                        </p>


                    </div>


                </Card>



                <MotorVelocityCard />

                <TrajectoryCard />


            </section>


        </main>

    );

}


export default RobotTelemetry;