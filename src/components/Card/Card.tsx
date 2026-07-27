import "./Card.css";

interface CardProps {
    title: string;
    children: React.ReactNode;
}

function Card({ title, children }: CardProps) {
    return (
        <section className="card">

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