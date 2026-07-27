import "./StatusBadge.css";

interface StatusBadgeProps {

    status: "online" | "offline" | "warning";

}

function StatusBadge({
    status
}: StatusBadgeProps) {

    return (

        <span className={`status-badge ${status}`}>

            {status.toUpperCase()}

        </span>

    );

}

export default StatusBadge;