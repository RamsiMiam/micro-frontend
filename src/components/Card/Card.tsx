import "./Card.css";

interface CardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

function Card({ title, children, className }: CardProps) {
    return (
        <section className={`card ${className ?? ""}`}>

            <div className="card-header">
                <h2>{title}</h2>
            </div>

            <div className="card-content">
                {children}
            </div>

        </section>
    );
}

export default Card;