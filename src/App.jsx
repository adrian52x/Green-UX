
import './styles/Navbar.css'
import './styles/impact.css'

import StatsDisplay from './components/stats-display'
import ImpactDisplay from './components/impact-display'
import Navbar from './components/navbar'
import Hero from './components/hero-display'
import SolutionDisplay from './components/solution-display'

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
			{/* <div className="wrapper">
				<div className="container"> */}

					<Navbar/>

					<Hero />

					<StatsDisplay />

					<ImpactDisplay />

					<SolutionDisplay />



				{/* </div>
			</div> */}
			
		</>
	)
}

export default App
