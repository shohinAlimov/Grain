import "./Privacy.scss";
import IconArrow from "../../assets/icons/IconArrowRight.svg?react";
import { assets } from "../../assets/assets";

const Privacy = () => {
  return (
    <section className="privacy" id="PrivacySecurity">
      <div className="container">
        <div className="privacy__wrapper">
          <div className="privacy__note">Privacy & Security</div>
          <div className="privacy__slide">
            <div>
              <h2 className="privacy__slide-title">
                It's your data, you're in control.
              </h2>
              <p className="privacy__slide-desc">
                Grain ensures the privacy of every call participant above all
                else.Prioritizing your privacy is a core value that has
                influenced everything we’ve made since day one.
              </p>
              <a className="privacy__slide-link-more" href="#">
                Learn about Privacy
                <IconArrow width={23} height={16} />
              </a>
            </div>
            <img src={assets.PrivacySecurity} alt="" />
          </div>

          <div className="privacy__slide reversed">
            <div>
              <h2 className="privacy__slide-title">
                Your security is our top priority
              </h2>
              <p className="privacy__slide-desc">
                Data protection is a vital for every business, but especially
                yours. At Grain, we take every measure possible to ensure your
                data is protected and safe.
              </p>
              <a className="privacy__slide-link-more" href="#">
                Learn about Security
                <IconArrow width={23} height={16} />
              </a>
            </div>
            <img src={assets.PrivacySecurity2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
