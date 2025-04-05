import '../styles/solution.css'

export default function SolutionDisplay() {
    return (
        <div className="container-solution">
            <img src="./src/assets/backtree.svg" alt="backtree" className="backtree-solution-section__1" />
            <div className="solution-section section-padding">
                <h2 className="solution-title">What can you do?</h2>
                <div className="solution-grid">
                    <div className="solution-item">
                        <h3 className="solution-item-title">Support Sustainable Brands</h3>
                        <p className="solution-item-text">Choose companies committed to deforestation-free supply chains. Supporting brands that prioritize environmental responsibility encourages industry-wide change.</p>
                    </div>
                    <div className="solution-item">
                        <img src="./src/assets/solution-img1.svg" alt="Item 2" className="solution-item-image" />
                    </div>
                    <div className="solution-item">
                        <img src="./src/assets/solution-img2.svg" alt="Item 3" className="solution-item-image" />
                    </div>
                    <div className="solution-item">
                        <h3 className="solution-item-title">Check Product Labels</h3>
                        <p className="solution-item-text">Many everyday products contain palm oil. By scrutinizing ingredient lists and opting for items free from palm oil or those certified as sustainable, consumers can drive demand for responsible sourcing.</p>
                    </div>
                    <div className="solution-item">
                        <h3 className="solution-item-title">Advocate for Change</h3>
                        <p className="solution-item-text">Share information about the impacts of deforestation and palm oil production with your community. Raising awareness fosters a more informed and proactive society.​</p>
                    </div>
                    <div className="solution-item">
                        <img src="./src/assets/solution-img3.svg" alt="Item 6" className="solution-item-image" />
                    </div>
                </div>


                {/* Mobile View */}
                <div className="solution-grid-mobile">
                    <div className="solution-item-mobile">
                        <img src="./src/assets/solution-img1.svg" alt="Icon 1" className="solution-item-mobile-icon" />
                        <h3 className="solution-item-mobile-title">Support Sustainable Brands</h3>
                        <p className="solution-item-mobile-text">Choose companies committed to deforestation-free supply chains. Supporting brands that prioritize environmental responsibility encourages industry-wide change.</p>
                    </div>
                    <div className="solution-item-mobile">
                        <img src="./src/assets/solution-img2.svg" alt="Icon 2" className="solution-item-mobile-icon" />
                        <h3 className="solution-item-mobile-title">Check Product Labels</h3>
                        <p className="solution-item-mobile-text">Many everyday products contain palm oil. By scrutinizing ingredient lists and opting for items free from palm oil or those certified as sustainable, consumers can drive demand for responsible sourcing.</p>
                    </div>
                    <div className="solution-item-mobile">
                        <img src="./src/assets/solution-img3.svg" alt="Icon 3" className="solution-item-mobile-icon" />
                        <h3 className="solution-item-mobile-title">Advocate for Change</h3>
                        <p className="solution-item-mobile-text">Share information about the impacts of deforestation and palm oil production with your community. Raising awareness fosters a more informed and proactive society.​</p>
                    </div>
                </div>


            </div>
        </div>
    )
}