import "./Features.scss";
import "./MeetingNotes.scss";

import IconNotes from "../../assets/icons/IconNotes.svg?react";
import IconAutomation from "../../assets/icons/IconAutomation.svg?react";
import IconCollaboration from "../../assets/icons/IconCollaboration.svg?react";
import IconAnalytics from "../../assets/icons/IconAnalytics.svg?react";
import FeatureCard from "../../ui/FeatureCard/FeatureCard";
import { AiMeetingNotes } from "../../data/AiMeetingNotes";
import { assets } from "../../assets/assets";

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features__wrapper">
          <span className="features__note">Features</span>
          <h3 className="features__title">
            Everything you need, nothing you don't
          </h3>
          <p className="features__description">
            Double your revenue without doubling your budget. Grain is the
            easy-to-use <br /> conversation intelligence platform for growing
            revenue teams.
          </p>
          <ul className="features__list">
            <li className="features__item">
              <div className="features__card">
                <IconNotes
                  className="features__card-icon"
                  width={74}
                  height={74}
                  aria-hidden={true}
                />
                <h4 className="features__card-title">
                  AI Meeting <br /> Notes
                </h4>
                <p className="features__card-desc">
                  Stay fully present during meetings, note-taking is now fully
                  automatic
                </p>
              </div>
            </li>
            <li className="features__item">
              <div className="features__card">
                <IconAutomation
                  className="features__card-icon"
                  width={74}
                  height={74}
                  aria-hidden={true}
                />
                <h4 className="features__card-title">
                  Meeting
                  <br /> Automation
                </h4>
                <p className="features__card-desc">
                  Skip the data entry, notes auto-sync to CRM Contact & Deal
                  records
                </p>
              </div>
            </li>
            <li className="features__item">
              <div className="features__card">
                <IconCollaboration
                  className="features__card-icon"
                  width={74}
                  height={74}
                  aria-hidden={true}
                />
                <h4 className="features__card-title">
                  Coaching & <br /> Collaboration
                </h4>
                <p className="features__card-desc">
                  Train and onboard faster, playlists and comments make coaching
                  easy
                </p>
              </div>
            </li>
            <li className="features__item">
              <div className="features__card">
                <IconAnalytics
                  className="features__card-icon"
                  width={74}
                  height={74}
                  aria-hidden={true}
                />
                <h4 className="features__card-title">
                  Deal Analytics & <br /> Insights
                </h4>
                <p className="features__card-desc">
                  Close more deals, smart topics and key account alerts improve
                  visibility
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="meeting-notes">
          <div className="meeting-notes__top">
            <IconNotes width={40} height={40} aria-hidden={true} />
            <span className="meeting-notes__top-text">AI Meeting Notes</span>
          </div>
          <h2 className="meeting-notes__title">
            Stay fully present during meetings, <br /> note-taking is now
            automatic
          </h2>

          <div className="meeting-notes__slider">
            <div className="meeting-notes__col">
              {AiMeetingNotes.map((item) => (
                <FeatureCard
                  id={item.id}
                  title={item.title}
                  desc={item.desc}
                  color={item.color}
                />
              ))}
            </div>
            <img className="meeting-notes__image" alt="" />
            {/* 
            <img src={assets.aiMeetingNotes1_2} alt="" />
             */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
