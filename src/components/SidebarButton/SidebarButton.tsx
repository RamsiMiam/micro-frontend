import "./SidebarButton.css";

interface SidebarButtonProps {

    label: string;
    icon: string;

}

function SidebarButton({ label, icon }: SidebarButtonProps) {

    return (

        <button className="sidebar-button">

            {icon} {label}

        </button>

    );

}

export default SidebarButton;