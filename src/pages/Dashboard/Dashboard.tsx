import "./Dashboard.css";
import StatusBadge from "../../components/StatusBadge/StatusBadge";
import Card from "../../components/Card/Card";

function Dashboard() {
    return (
        <main className="dashboard">

            <Card 
                title="Robots Online"
                className="metric-card"
            >
                <div className="metric-value">
                    3
                </div>
            </Card>


            <Card 
                title="MQTT Status"
                className="metric-card"
            >
                <StatusBadge status="online" />
            </Card>


            <Card 
                title="Backend Status"
                className="metric-card"
            >
                <StatusBadge status="online" />
            </Card>


            <Card 
                title="Last Event"
                className="event-card"
            >
                Robot 1 Connected
            </Card>

        </main>
    );
}

export default Dashboard;