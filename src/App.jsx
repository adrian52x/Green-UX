
import './styles/Navbar.css'
import './styles/impact.css'

import StatsDisplay from './components/stats-display'
import ImpactDisplay from './components/impact-display'

const enums = {
	NAVBAR: {
		LOGO: {
			SRC: "./src/assets/logo-tree.svg",
			ALT: "Logo",
			CLASS: "logo-image"
		},
		LINKS: [
			{ TEXT: "Palm oil costs", CLASS: "link" },
			{ TEXT: "How To Help", CLASS: "link" }
		],
		BUTTON: {
			TEXT: "Make a change!",
			CLASS: "secondary-button"
		}
	}
}

function App() {
	return (
		<>
			<div className="wrapper">
				<div className="container">

					<div className="navbar section-padding">
						<div className="logo">
							<img src="./src/assets/logo-tree.svg" alt="Logo" className="logo-image" />
							<span className="logo-text">BreatheForForests</span>
						</div>
						<div className="items">
							<div className="link">Palm oil costs</div>
							<div className="link">How To Help</div>
							<button className="secondary-button">Make a change!</button>
						</div>
					</div>	

					{/* Hero Section */}
					<div className="hero-section section-padding">
						{/* Left Side: Trees */}
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

						{/* Right Side: Text Frame */}
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

					<StatsDisplay />

					<ImpactDisplay />



				</div>
			</div>
			
		</>
	)
}

export default App
