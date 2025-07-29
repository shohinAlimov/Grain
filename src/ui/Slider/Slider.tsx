import { useState } from "react";
import type { CardProps } from "../../data/Cards";
import FeatureCard from "../FeatureCard/FeatureCard";
import "./Slider.scss";
import { assets } from "../../assets/assets";

interface SliderProps {
  array: CardProps[];
  title: string;
  description: string;
  icon?: React.ReactNode;
  id: string;
  reversed?: boolean;
}

const Slider = ({
  array,
  title,
  description,
  icon,
  id,
  reversed = false,
}: SliderProps) => {
  // Состояние для активной карточки
  const [activeCardId, setActiveCardId] = useState(1);

  // анимация
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Функция для смены активной карточки
  const handleCardClick = (cardId: number) => {
    setActiveCardId(cardId);
    setIsAnimating(true);

    setTimeout(() => {
      setActiveCardId(cardId);
      setIsAnimating(false);
    }, 150);
  };

  const activeCard = array.find((item) => item.id === activeCardId);

  return (
    <div className="slider" id={`${id}`}>
      <div className="slider__top">
        {icon && icon}
        <span className="slider__top-title">{title}</span>
      </div>
      <h2 className="slider__desc">{description}</h2>
      {/* Колонка с интерактивными карточками */}
      <div className={`slider__wrapper ${reversed ? "reversed" : ""}`}>
        <div className="slider__col">
          {array.map((item) => (
            <>
            <FeatureCard
              key={item.id}
              className={activeCardId === item.id ? "active" : ""}
              id={item.id}
              title={item.title}
              desc={item.desc}
              color={item.color}
              onMouseEnter={() => handleCardClick(item.id)}
              />
              {/* 
              {item.color === "blue" && (<img className="slider__gradient" src={ assets.gradientBlue} />)}
              {item.color === "green" && (<img className="slider__gradient" src={ assets.gradientGreen} />)}
              {item.color === "orange" && (<img className="slider__gradient slider__gradient--right" src={ assets.gradientOrange} />)}
              {item.color === "purple" && (<img className="slider__gradient slider__gradient--right" src={ assets.gradientPurple} />)} */}
            </>
          ))}
        </div>

        {/* Область для отображения фотографий активной карточки */}
          {activeCard && (
              <img
                className={`slider__image ${isAnimating ? "animating" : ""}`}
                src={activeCard.img}
                alt={activeCard.title}
                key={`${activeCard.id}-img1`}
              />
          )}
      </div>
    </div>
  );
};

export default Slider;