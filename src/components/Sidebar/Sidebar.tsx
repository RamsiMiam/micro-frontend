import "./Sidebar.css";

import SidebarButton from "../SidebarButton/SidebarButton";
import type { SidebarOption } from "../../types/SidebarOption";

const options: SidebarOption[] = [
    {
        id: "dashboard",
        icon: "🏠",
        label: "Dashboard"
    },
    {
        id: "robots",
        icon: "🤖",
        label: "Robots"
    },
    {
        id: "telemetry",
        icon: "📡",
        label: "Telemetry"
    },
    {
        id: "settings",
        icon: "⚙️",
        label: "Settings"
    }
];

function Sidebar() {
    return (
        <aside className="sidebar">

            {
                options.map(option => (

                    <SidebarButton
                        key={option.id}
                        icon={option.icon}
                        label={option.label}
                    />

                ))
            }

        </aside>
    );
}

export default Sidebar;