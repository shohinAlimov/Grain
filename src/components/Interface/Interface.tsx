import InterfaceImage from "../../assets/images/InterfaceImage.png";
import "./Interface.scss";
const Interface = () => {
  return (
    <section className="interface">
      <div className="container">
        <div className="interface__wrapper">
          <img
            className="interface__image"
            src={InterfaceImage}
            width={1140}
            height={713}
            alt="Application Interface"
          />
          <div className="interface__gradient green"></div>
          <div className="interface__gradient gray"></div>
        </div>
      </div>
    </section>
  );
};

export default Interface;
