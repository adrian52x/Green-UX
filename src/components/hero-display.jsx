import "../styles/hero.css";

export default function Hero() {
  return (
    <div className="container-hero">
      <img
        src="/assets/bird-up.png"
        alt="bird"
        aria-hidden="true"
        className="bird__up1"
      />
      <img
        src="/assets/bird-up.png"
        alt="bird"
        aria-hidden="true"
        className="bird__up2"
      />
      <img
        src="/assets/bird-up.png"
        alt="bird"
        aria-hidden="true"
        className="bird__up3"
      />
      <img
        src="/assets/bird-up.png"
        alt="bird"
        aria-hidden="true"
        className="bird__up4"
      />

      <img
        src="/assets/bird-down.png"
        alt="bird"
        aria-hidden="true"
        className="bird__down1"
      />
      <img
        src="/assets/bird-down.png"
        alt="bird"
        aria-hidden="true"
        className="bird__down2"
      />
      <img
        src="/assets/bird-down.png"
        alt="bird"
        aria-hidden="true"
        className="bird__down3"
      />

      <img
        src="/assets/stone.png"
        alt="tree stumps"
        aria-hidden="true"
        className="stone1"
      />
      <img
        src="/assets/stone.png"
        alt="tree stump"
        aria-hidden="true"
        className="stone2"
      />
      <img
        src="/assets/stone.png"
        alt="tree stump"
        aria-hidden="true"
        className="stone3"
      />
      <img
        src="/assets/stone.png"
        alt="tree stump"
        aria-hidden="true"
        className="stone4"
      />

      <section className="hero-section">
        <div className="hero-left ">
          <img
            src="/assets/backtree.svg"
            alt="Back Tree"
            className="backtree"
          />
          <img
            src="/assets/tree.svg"
            alt="Tree"
            className="tree"
            aria-hidden="true"
          />
        </div>

        <div className="hero-right">
          <div className="hero-main-text">
            We’re losing <br />
            rainforest <br />
            every second.
          </div>
          <p className="hero-secondary-text">Act now to protect what’s left!</p>

          <a href="#form" className="primary-button">
            <span>Sign our petition!</span>
          </a>
        </div>
      </section>
    </div>
  );
}
