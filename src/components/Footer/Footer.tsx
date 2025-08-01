import "./Footer.scss";
import IconEmail from "../../assets/icons/IconEmail.svg?react";
import IconLinkedin from "../../assets/icons/IconLinkedin.svg?react";
import IconTwitter from "../../assets/icons/IconTwitter.svg?react";
import IconYouTube from "../../assets/icons/IconYouTube.svg?react";
import IconFacebook from "../../assets/icons/IconFacebook.svg?react";
import IconLogo from "../../assets/icons/IconLogo.svg?react";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__contacts">
            <div className="footer__email">
              <IconEmail width={24} height={24} />
              hello@grain.com
            </div>
            <ul className="footer__socials">
              <li>
                <a href="#" className="footer__socials-link">
                  <IconLinkedin width={22} height={22} />
                </a>
              </li>
              <li>
                <a href="#" className="footer__socials-link">
                  <IconTwitter width={22} height={22} />
                </a>
              </li>
              <li>
                <a href="#" className="footer__socials-link">
                  <IconYouTube width={22} height={22} />
                </a>
              </li>
              <li>
                <a href="#" className="footer__socials-link">
                  <IconFacebook width={22} height={22} />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__navigation">
            <div>
              <h5 className="footer__nav-title">Product</h5>
              <ul className="footer__nav-list">
                <li>
                  <a href="#Integrations" className="footer__nav-link">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__nav-link">
                    Product Updates
                  </a>
                </li>
                <li>
                  <a href="#PrivacySecurity" className="footer__nav-link">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__nav-link">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="footer__nav-title">Use Cases</h5>
              <ul className="footer__nav-list">
                <li>
                  <a href="#Integrations" className="footer__nav-link">
                    Sales
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__nav-link">
                    Product & Research
                  </a>
                </li>
                <li>
                  <a href="#PrivacySecurity" className="footer__nav-link">
                    Customer Success
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__nav-link">
                    Hiring & Recruiting
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__nav-link">
                    Remote Teams
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="footer__nav-title">Company</h5>
              <ul className="footer__nav-list">
                <li>
                  <a href="#Integrations" className="footer__nav-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__nav-link">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#PrivacySecurity" className="footer__nav-link">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__nav-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="footer__nav-title">Resources</h5>
              <ul className="footer__nav-list">
                <li>
                  <a href="#Integrations" className="footer__nav-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__nav-link">
                    Self-guided Product Tour
                  </a>
                </li>
                <li>
                  <a href="#PrivacySecurity" className="footer__nav-link">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__nav-link">
                    Sales Coaching Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__nav-link">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__downpage">
          <IconLogo />
          <span>© 2024 Grain Intelligence Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
