import { useEffect } from "react";
import "../styles/hero.css";

export default function Hero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/website-carbon-badges@1.1.3/b.min.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container-hero">
      <img src="/assets/bird-up.png" alt="bird" className="bird__up1" />
      <img src="/assets/bird-up.png" alt="bird" className="bird__up2" />
      <img src="/assets/bird-up.png" alt="bird" className="bird__up3" />
      <img src="/assets/bird-up.png" alt="bird" className="bird__up4" />

      <img src="/assets/bird-down.png" alt="bird" className="bird__down1" />
      <img src="/assets/bird-down.png" alt="bird" className="bird__down2" />
      <img src="/assets/bird-down.png" alt="bird" className="bird__down3" />

      <img src="/assets/stone.png" alt="bird" className="stone1" />
      <img src="/assets/stone.png" alt="bird" className="stone2" />
      <img src="/assets/stone.png" alt="bird" className="stone3" />
      <img src="/assets/stone.png" alt="bird" className="stone4" />

      <div className="hero-section">
        <div className="hero-left ">
          <img
            src="/assets/backtree.svg"
            alt="Back Tree"
            className="backtree"
          />
          <img src="/assets/tree.svg" alt="Tree" className="tree" />
        </div>

        <div className="hero-right">
          <div className="hero-main-text">
            We’re losing <br />
            rainforest <br />
            every second.
          </div>
          <div className="hero-secondary-text">
            Act now to protect what’s left!.
          </div>
          <button className="primary-button">
            <span>Sign our petition!</span>
          </button>
        </div>
      </div>
    </div>
  );
}
