export interface DashboardState { 
    robotsOnline: number; 
    mqttStatus: "online" | "offline"; 
    backendStatus: "online" | "offline"; 
    lastEvent: string; 
}