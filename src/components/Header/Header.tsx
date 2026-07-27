import "./Header.css";

interface HeaderProps {
    title: string;
}

function Header(props: HeaderProps) {
    return (
<header className="header">

    <h1>{props.title}</h1>

    <span>Offline</span>

</header>
    );
}

export default Header;