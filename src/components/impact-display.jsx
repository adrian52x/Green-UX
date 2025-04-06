import "../styles/impact.css";

export default function ImpactDisplay() {
  return (
    <section className="container-impact" aria-labelledby="impact-heading">
      <img
        src="/assets/backtree.svg"
        alt="backtree"
        className="backtree-impact-section__1"
        aria-hidden="true"
      />
      <img
        src="/assets/backtree.svg"
        alt="backtree"
        className="backtree-impact-section__2"
        aria-hidden="true"
      />

      <div className="impact-section section-padding">
        <header className="impact-header">
          <span className="impact-tag">The problem</span>
          <h2 className="impact-title">The Hidden Cost of Palm Oil</h2>
        </header>

        <div className="impact-subsection">
          {/* Left: Image */}
          <figure className="impact-image">
            <img
              src="/assets/impact.webp"
              alt="Deforestation due to palm oil"
            />
          </figure>

          {/* Right: Text */}
          <div className="impact-content">
            <article className="impact-content-item">
              <header className="impact-content-item-header">
                <img
                  src="/assets/icon1-small.svg"
                  alt="Icon"
                  aria-hidden="true"
                />
                <h3>Biodiversity Loss</h3>
              </header>
              <div className="impact-content-item-text">
                <p>
                  Expanding palm oil plantations often replace rich tropical
                  forests, leading to the loss of habitat for countless species.
                  This habitat destruction threatens biodiversity and disrupts
                  ecosystems.
                </p>
              </div>
            </article>

            <article className="impact-content-item">
              <header className="impact-content-item-header">
                <img
                  src="/assets/icon2-small.svg"
                  alt="Icon"
                  aria-hidden="true"
                />
                <h3>Climate Impact</h3>
              </header>
              <div className="impact-content-item-text">
                <p>
                  Deforestation for palm oil releases significant amounts of
                  carbon dioxide into the atmosphere, contributing to climate
                  change. The removal of trees diminishes the planet's capacity
                  to absorb CO₂, exacerbating global warming.
                </p>
              </div>
            </article>

            <article className="impact-content-item">
              <header className="impact-content-item-header">
                <img
                  src="/assets/icon3-small.svg"
                  alt="soil and water icon"
                  aria-hidden="true"
                />
                <h3>Soil and Water Pollution</h3>
              </header>
              <div className="impact-content-item-text">
                <p>
                  Palm oil production generates substantial waste and can lead
                  to the pollution of freshwater sources. The use of pesticides
                  and fertilizers further contaminates soil and water, affecting
                  both biodiversity and human communities.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
