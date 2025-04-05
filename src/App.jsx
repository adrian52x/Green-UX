import StatsDisplay from "./components/stats-display";
import ImpactDisplay from "./components/impact-display";
import Navbar from "./components/navbar";
import Hero from "./components/hero-display";
import SolutionDisplay from "./components/solution-display";
import FormDisplay from "./components/form-display";
import FooterDisplay from "./components/footer-display";

function App() {
  return (
    <>
      {/* <div className="wrapper">
				<div className="container"> */}

      <Navbar />

      <Hero />

      <StatsDisplay />

      <ImpactDisplay />

      <SolutionDisplay />

      <FormDisplay />

      <FooterDisplay />
    </>
  );
}

export default App;
