import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <h2 className="hero__title">Conversation Intelligence</h2>
          <span className="hero__title accent">Made Simple</span>
          <p className="hero__description">
            Grain automates note-taking, record-keeping, and insight-capture so
            you can spend your <br /> time where it matters most — coaching your
            team and closing deals.
          </p>
          <div className="hero__actions">
            <button className="btn hero__try">Try for Free</button>
            <button className="btn hero__book">Book a Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
