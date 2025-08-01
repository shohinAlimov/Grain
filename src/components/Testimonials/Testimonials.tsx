import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__wrapper">
          <span className="testimonials__note">Testimonials</span>
          <div className="testimonials__card">
            <h4 className="testimonials__card-title">
              “We love Grain and use it to
              <span>
                surface key <br /> insights from our video meetings
              </span>
              , whether it’s product discovery or one of our sellers who engage
              with a prospect.”
            </h4>
            <div className="testimonials__user">
              <div className="testimonials__user-logo"></div>
              <div className="testimonials__user-info">
                <span className="testimonials__user-name">Martin Matuš</span>
                <span className="testimonials__user-job">Product Manager</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
