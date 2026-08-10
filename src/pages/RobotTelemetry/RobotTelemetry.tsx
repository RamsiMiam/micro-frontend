import "./RobotTelemetry.css";

import { useParams } from "react-router-dom";

import Card from "../../components/Card/Card";

import MotorVelocityCard from "../../components/MotorVelocityCard/MotorVelocityCard";

import TrajectoryCard from "../../components/RobotPositionCard/RobotPositionCard";
import useRobotTelemetry from "../../hooks/useRobotTelemetry";

function RobotTelemetry() {

    const { id } = useParams();

    const telemetry = useRobotTelemetry(id ?? "");

    const motorTelemetry =
        telemetry.state
            ? {

                currentVelocities:
                    telemetry.state.currentMotorVelocities,

                desiredVelocities:
                    telemetry.state.desiredMotorVelocities,

                averageVelocityHistory:
                    telemetry.averageVelocityHistory,

                motorVelocityHistory:
                    telemetry.motorVelocityHistory

            }
            : null;

    const trajectoryTelemetry =
        telemetry.state
            ? {
                currentPose:
                    telemetry.state.currentPose,

                trajectoryHistory:
                    telemetry.trajectoryHistory
            }
            : null;

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
                                {
                                    telemetry.connected
                                        ? "Online"
                                        : "Offline"
                                }
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
                                {
                                    telemetry.state?.currentPose?.x.toFixed(2)
                                } m
                            </span>
                        </p>


                        <p>
                            Y
                            <span>
                                {
                                    telemetry.state?.currentPose?.y.toFixed(2)
                                } m
                            </span>
                        </p>

                        <p>

                            <span>
                                Theta
                            </span>

                            <span>
                                {
                                    telemetry.state?.currentPose?.theta.toFixed(2)
                                }°
                            </span>

                        </p>


                    </div>


                </Card>



                {
                    motorTelemetry && (

                        <MotorVelocityCard
                            telemetry={motorTelemetry}
                        />

                    )
                }

                {
                    trajectoryTelemetry && (

                        <TrajectoryCard
                            telemetry={trajectoryTelemetry}
                        />

                    )
                }


            </section>


        </main>

    );

}


export default RobotTelemetry;