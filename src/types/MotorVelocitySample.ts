export interface MotorVelocitySample {

    timestamp: number;

    current: [
        number,
        number,
        number,
        number
    ];

    desired: [
        number,
        number,
        number,
        number
    ];

}