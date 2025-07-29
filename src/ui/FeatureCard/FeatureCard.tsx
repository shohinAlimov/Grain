import "./FeatureCard.scss";

interface FeatureCardProps {
  id: number;
  title: string;
  desc: string;
  color: "purple" | "blue" | "orange" | "green";
  onMouseEnter: () => void;
  className?: string;
}

const FeatureCard = ({
  id,
  title,
  desc,
  color,
  className,
  onMouseEnter,
}: FeatureCardProps) => {
  return (
    <div
      className={`feature-card ${color} ${className}`}
      key={id}
      onMouseEnter={onMouseEnter}
    >
      <span className="feature-card__title">{title}</span>
      <p className="feature-card__desc">{desc}</p>
    </div>
  );
};

export default FeatureCard;
