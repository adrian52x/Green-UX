import '../styles/impact.css'



export default function ImpactDisplay() {
    return (
        <div className='impact-section section-padding'>
        <h2 className="impact-title">The Hidden Cost of Palm Oil</h2>
        <div className="impact-subsection">
            {/* Left: Image */}
            <div className="impact-image">
                <img src="./src/assets/impact.webp" alt="Palm Oil Impact" />
            </div>
            {/* Right: Text */}
            <div className="impact-content">
                <div className="impact-content-item">
                    <div className="impact-content-item-icon">
                        <img src="./src/assets/icon1-small.svg" alt="Icon" />
                    </div>
                    <div className="impact-content-item-text">
                        <h3>Biodiversity Loss</h3>
                        <p>
                            Expanding palm oil plantations often replace rich tropical forests, leading to the loss of habitat for countless species. This habitat destruction threatens biodiversity and disrupts ecosystems.
                        </p>
                    </div>
                </div>
                <div className="impact-content-item">
                    <div className="impact-content-item-icon">
                        <img src="./src/assets/icon2-small.svg" alt="Icon" />
                    </div>
                    <div className="impact-content-item-text">
                        <h3>Climate Impact</h3>
                        <p>
                            Deforestation for palm oil releases significant amounts of carbon dioxide into the atmosphere, contributing to climate change. The removal of trees diminishes the planet's capacity to absorb CO₂, exacerbating global warming.										
                        </p>
                    </div>
                </div>
                <div className="impact-content-item">
                    <div className="impact-content-item-icon">
                        <img src="./src/assets/icon3-small.svg" alt="Icon" />
                    </div>
                    <div className="impact-content-item-text">
                        <h3>Soil and Water Pollution</h3>
                        <p>
                            Palm oil production generates substantial waste and can lead to the pollution of freshwater sources. The use of pesticides and fertilizers further contaminates soil and water, affecting both biodiversity and human communities.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    )
}