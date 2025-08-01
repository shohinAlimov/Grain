import "./Integrations.scss";
import IconRight from "../../assets/icons/IconArrowRight.svg?react";
import { assets } from "../../assets/assets";

const Integrations = () => {
  return (
    <section className="integrations" id="integrations">
      <div className="container">
        <div className="integrations__wrapper">
          <span className="integrations__note">Integrations</span>
          <h2 className="integrations__title">
            Grain integrations + sharing destinations
          </h2>
          <p className="integrations__description">
            Native integrations with Hubspot, Salesforce, Zapier, Slack, and
            more means it’s <br /> effortless to share insights and enrich your
            communications with video
          </p>
          <a className="integrations__explore-link" href="#">
            Explore Integrations
            <IconRight width={23} height={16} />
          </a>
          <img src={assets.IntegrationsImage} alt="Image" />
        </div>
      </div>
    </section>
  );
};

export default Integrations;
