import "../styles/stats.css";

export default function StatsDisplay() {
  return (
    <section className="container-stats">
      <div
        className="stats-section section-padding"
        aria-labelledby="stats-heading"
      >
        <article className="stats-item">
          <span className="stat-number">85%</span>
          <span className="stat-label">of palm oil</span>
          <p className="stat-description">
            Is produced in regions where forests once stood
          </p>
        </article>

        <article className="stats-item">
          <span className="stat-number">28.3</span>
          <span className="stat-label">million</span>
          <p className="stat-description">
            Hectares of tree cover were lost worldwide in 2023, making a 24%
            increase from the previous year
          </p>
        </article>

        <article className="stats-item">
          <span className="stat-number">300</span>
          <span className="stat-label">football fields</span>
          <p className="stat-description">
            Of forests are cleared every hour to make way for palm oil
            plantations
          </p>
        </article>
      </div>
    </section>
  );
}
