import "./Dashboard.css";
import Card from "../../components/Card/Card";

function Dashboard() {
    return (
        <main className="dashboard">

            <Card title="Robot Status">
                <p>No robots connected.</p>
            </Card>

            <Card title="Robot Status2">
                <p>No robots connected.</p>
            </Card>

        </main>
    );
}

export default Dashboard;