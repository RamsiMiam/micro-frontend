import type { RobotState } from "./RobotState";

export interface TelemetrySample {

    timestamp: number;

    state: RobotState;

}