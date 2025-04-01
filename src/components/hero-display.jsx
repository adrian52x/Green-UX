import '../styles/hero.css'

export default function Hero() {
    return (
        <div className="hero-section">
            <div className="hero-left ">
                <img
                    src="./src/assets/backtree.svg"
                    alt="Back Tree"
                    className="backtree"
                />
                <img
                    src="./src/assets/tree.svg"
                    alt="Tree"
                    className="tree"
                />
            </div>

            <div className="hero-right">
                <div className="hero-main-text">
                    We’re losing rainforest every second.
                </div>
                <div className="hero-secondary-text">
                    Act now to protect what’s left!.
                </div>
                <button className="primary-button">
                    <span>Make a change!</span>
                </button>
            </div>
        </div>
    )
}