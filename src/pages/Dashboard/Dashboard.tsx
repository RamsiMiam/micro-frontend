import "./Dashboard.css";
import StatusBadge from "../../components/StatusBadge/StatusBadge";
import Card from "../../components/Card/Card";

import useDashboard from "../../hooks/useDashboard";

function Dashboard() {

    const { data, loading, error } = useDashboard();
    return (
        <main className="dashboard">

            <Card
                title="Robots Online"
                className="metric-card"
            >
                <div className="metric-value">
                    {loading ? "—" : data?.robotsOnline ?? "—"}
                </div>
            </Card>


            <Card
                title="MQTT Status"
                className="metric-card"
            >
                <StatusBadge status={loading ? "offline" : data?.mqttStatus ?? "offline"} />
            </Card>


            <Card
                title="Backend Status"
                className="metric-card"
            >
                <StatusBadge status={error ? "offline" : data?.backendStatus ?? "offline"} />
            </Card>


            <Card
                title="Last Event"
                className="event-card"
            >
                {loading ? "Loading..." : data?.lastEvent ?? "No events"}
            </Card>

        </main>
    );
}

export default Dashboard;