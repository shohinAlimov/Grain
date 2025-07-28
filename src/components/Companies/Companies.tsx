import "./Companies.scss";

import Company1 from "../../assets/images/company-1.png";
import Company2 from "../../assets/images/company-2.png";
import Company3 from "../../assets/images/company-3.png";
import Company4 from "../../assets/images/company-4.png";
import Company5 from "../../assets/images/company-5.png";
import Company6 from "../../assets/images/company-6.png";
import Company7 from "../../assets/images/company-7.png";
import Company8 from "../../assets/images/company-8.png";
import Company9 from "../../assets/images/company-9.png";
import Company10 from "../../assets/images/company-10.png";

const Companies = () => {
  return (
    <section className="companies">
      <div className="container">
        <div className="companies__wrapper">
          <h3 className="companies__title">10k+ companies trust Grain</h3>
          <ul className="companies__list">
            <li className="companies__item">
              <img src={Company1} alt="Company 1" />
            </li>
            <li className="companies__item">
              <img src={Company2} alt="Company 2" />
            </li>
            <li className="companies__item">
              <img src={Company3} alt="Company 3" />
            </li>
            <li className="companies__item">
              <img src={Company4} alt="Company 4" />
            </li>
            <li className="companies__item">
              <img src={Company5} alt="Company 5" />
            </li>
            <li className="companies__item">
              <img src={Company6} alt="Company 6" />
            </li>
            <li className="companies__item">
              <img src={Company7} alt="Company 7" />
            </li>
            <li className="companies__item">
              <img src={Company8} alt="Company 8" />
            </li>
            <li className="companies__item">
              <img src={Company9} alt="Company 9" />
            </li>
            <li className="companies__item">
              <img src={Company10} alt="Company 10" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Companies;
