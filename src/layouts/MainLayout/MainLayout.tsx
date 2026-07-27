import "./MainLayout.css";

interface MainLayoutProps {
    header: React.ReactNode;
    sidebar: React.ReactNode;
    children: React.ReactNode;
}

function MainLayout({ header, sidebar, children }: MainLayoutProps) {
    return (
        <div className="main-layout">
            {header}

            <div className="content">

                {sidebar}

                {children}
            </div>


        </div>
    );
}

export default MainLayout;