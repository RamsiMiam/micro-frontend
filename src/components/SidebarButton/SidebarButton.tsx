import { NavLink } from "react-router-dom";
import "./SidebarButton.css";

interface SidebarButtonProps {

    label: string;
    icon: string;
    path: string;

}

function SidebarButton({
    label,
    icon,
    path
}: SidebarButtonProps) {

    return (

        <NavLink
            to={path}
            className={({ isActive }) =>
                isActive
                    ? "sidebar-button active"
                    : "sidebar-button"
            }
        >

            <span>{icon}</span>

            <span>{label}</span>

        </NavLink>

    );

}

export default SidebarButton;