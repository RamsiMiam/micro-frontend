import "./Sidebar.css";

import SidebarButton from "../SidebarButton/SidebarButton";
import type { SidebarOption } from "../../types/SidebarOption";

const options: SidebarOption[] = [

    {
        id: "dashboard",
        icon: "🏠",
        label: "Dashboard",
        path: "/"
    },

    {
        id: "robots",
        icon: "🤖",
        label: "Robots",
        path: "/robots"
    },

    {
        id: "telemetry",
        icon: "📡",
        label: "Telemetry",
        path: "/telemetry"
    },

    {
        id: "settings",
        icon: "⚙️",
        label: "Settings",
        path: "/settings"
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
                        path={option.path}
                    />

                ))
            }

        </aside>
    );
}

export default Sidebar;