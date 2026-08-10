import type { Pose } from "./Pose";
import type { TelemetrySample } from "./TelemetrySample";

export interface TrajectoryTelemetry {
    currentPose: Pose;
    trajectoryHistory: TelemetrySample[];
}