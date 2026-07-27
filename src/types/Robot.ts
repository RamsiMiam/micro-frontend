export type RobotStatus = 
    | "online"
    | "offline"
    | "warning";


export interface Robot {
    id: string;
    status: RobotStatus;
    lastSeen: string;
    battery: number;
}