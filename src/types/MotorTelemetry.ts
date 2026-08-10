import type { VelocityPoint } from "./VelocityPoint";
import type { MotorVelocitySample } from "./MotorVelocitySample";


export interface MotorTelemetry {

    currentVelocities: [
        number,
        number,
        number,
        number
    ];

    desiredVelocities: [
        number,
        number,
        number,
        number
    ];

    averageVelocityHistory: VelocityPoint[];

    motorVelocityHistory: MotorVelocitySample[];

}