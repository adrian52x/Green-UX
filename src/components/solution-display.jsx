import "../styles/solution.css";

export default function SolutionDisplay() {
  return (
    <section className="container-solution" aria-labelledby="solution-title">
      <img
        src="/assets/backtree.svg"
        alt="backtree"
        className="backtree-solution-section__1"
        aria-hidden="true"
      />
      <div className="solution-section section-padding">
        <header className="solution-header">
          <span className="solution-tag">The solution</span>
          <h2 className="solution-title">What can you do?</h2>
        </header>

        <ul className="solution-grid">
          <li className="solution-item">
            <h3 className="solution-item-title">Support Sustainable Brands</h3>
            <p className="solution-item-text">
              Choose companies committed to deforestation-free supply chains.
              Supporting brands that prioritize environmental responsibility
              encourages industry-wide change.
            </p>
          </li>
          <li className="solution-item">
            <img
              src="/assets/solution-img1.svg"
              alt="Harvesting vegetables from a sustainable farm"
              className="solution-item-image"
              aria-hidden="true"
            />
          </li>

          <li className="solution-item">
            <img
              src="/assets/solution-img2.svg"
              alt="A person holding a basket and checking product labels"
              className="solution-item-image"
              aria-hidden="true"
            />
          </li>
          <li className="solution-item">
            <h3 className="solution-item-title">Check Product Labels</h3>
            <p className="solution-item-text">
              Many everyday products contain palm oil. By scrutinizing
              ingredient lists and opting for items free from palm oil or those
              certified as sustainable, consumers can drive demand for
              responsible sourcing.
            </p>
          </li>

          <li className="solution-item">
            <h3 className="solution-item-title">Advocate for Change</h3>
            <p className="solution-item-text">
              Share information about the impacts of deforestation and palm oil
              production with your community. Raising awareness fosters a more
              informed and proactive society.​
            </p>
          </li>
          <li className="solution-item">
            <img
              src="/assets/solution-img3.svg"
              alt="Hand holding a tree"
              className="solution-item-image"
              aria-hidden="true"
            />
          </li>
        </ul>

        {/* Mobile View */}
        <div className="solution-grid-mobile">
          <div className="solution-item-mobile">
            <img
              src="/assets/solution-img1.svg"
              alt="Icon 1"
              className="solution-item-mobile-icon"
            />
            <h3 className="solution-item-mobile-title">
              Support Sustainable Brands
            </h3>
            <p className="solution-item-mobile-text">
              Choose companies committed to deforestation-free supply chains.
              Supporting brands that prioritize environmental responsibility
              encourages industry-wide change.
            </p>
          </div>
          <div className="solution-item-mobile">
            <img
              src="/assets/solution-img2.svg"
              alt="Icon 2"
              className="solution-item-mobile-icon"
            />
            <h3 className="solution-item-mobile-title">Check Product Labels</h3>
            <p className="solution-item-mobile-text">
              Many everyday products contain palm oil. By scrutinizing
              ingredient lists and opting for items free from palm oil or those
              certified as sustainable, consumers can drive demand for
              responsible sourcing.
            </p>
          </div>
          <div className="solution-item-mobile">
            <img
              src="/assets/solution-img3.svg"
              alt="Icon 3"
              className="solution-item-mobile-icon"
            />
            <h3 className="solution-item-mobile-title">Advocate for Change</h3>
            <p className="solution-item-mobile-text">
              Share information about the impacts of deforestation and palm oil
              production with your community. Raising awareness fosters a more
              informed and proactive society.​
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
