import "./Features.scss";

import IconNotes from "../../assets/icons/IconNotes.svg?react";
import IconAutomation from "../../assets/icons/IconAutomation.svg?react";
import IconCollaboration from "../../assets/icons/IconCollaboration.svg?react";
import IconAnalytics from "../../assets/icons/IconAnalytics.svg?react";
import {
  AiMeetingNotes,
  Analytics,
  CoachingCollaboration,
  MeetingAutomation,
} from "../../data/Cards";
import Slider from "../../ui/Slider/Slider";

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
              <a className="features__card" href="#AiNotes">
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
              </a>
            </li>
            <li className="features__item">
              <a className="features__card" href="#MeetingAutomation">
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
              </a>
            </li>
            <li className="features__item">
              <a className="features__card" href="#Collaboration">
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
              </a>
            </li>
            <li className="features__item">
              <a className="features__card" href="#Analytics">
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
              </a>
            </li>
          </ul>
        </div>

        <Slider
          title="AI Meeting Notes"
          description="Stay fully present during meetings, note-taking is now automatic"
          icon={<IconNotes width={40} height={40} aria-hidden={true} />}
          array={AiMeetingNotes}
          id="AiNotes"
        />

        <Slider
          title="Meeting Automation"
          description="Skip the data entry, notes auto-sync to CRM Contact & Deal records"
          icon={<IconAutomation width={40} height={40} aria-hidden={true} />}
          array={MeetingAutomation}
          id="MeetingAutomation"
          reversed={true}
        />

        <Slider
          title="Coaching & Collaboration"
          description="Train and onboard reps faster, playlists and comments make coaching easy"
          icon={<IconCollaboration width={40} height={40} aria-hidden={true} />}
          array={CoachingCollaboration}
          id="Collaboration"
        />

        <Slider
          title="Deal Analytics & Insights"
          description="Close more deals, smart topics and key account alerts improve visibility"
          icon={<IconAnalytics width={40} height={40} aria-hidden={true} />}
          array={Analytics}
          id="Analytics"
          reversed={true}
        />
      </div>
    </section>
  );
};

export default Features;
