import "./FeatureCard.scss";

interface FeatureCardProps {
  id: number;
  title: string;
  desc: string;
  color: "purple" | "blue" | "orange" | "green";
}

const FeatureCard = ({ id, title, desc, color }: FeatureCardProps) => {
  return (
    <div className={`feature-card ${color}`} key={id}>
      <span className="feature-card__title">{title}</span>
      <p className="feature-card__desc">{desc}</p>
    </div>
  );
};

export default FeatureCard;
