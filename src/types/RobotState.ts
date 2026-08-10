import type { Pose } from './Pose';

export interface RobotState {

    id: string;

    currentPose: Pose;

    desiredPose: Pose;

    currentMotorVelocities: [
        number,
        number,
        number,
        number
    ];

    desiredMotorVelocities: [
        number,
        number,
        number,
        number
    ];

}