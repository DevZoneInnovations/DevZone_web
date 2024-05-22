import "./App.css";
import About from "./components/About/About";
import HowWork from "./components/HowWork/HowWork";
import WhyDevZone from "./components/WhyDevZone/WhyDevZone";
import Projects from "./components/Projects/Projects";
import Plans from "./components/Plans/Plans";
import PlansUpdate from "./components/PlansUpdate/PlansUpdate";
import Footer from "./components/Footer/Footer";
import ExtraPlans from "./components/ExtraPlans/ExtraPlans";
import ZapButton from "./components/ZapButton/ZapButton";

function App() {
  return (
    <div className="App">
      <ZapButton />
      <About />
      <HowWork />
      <WhyDevZone />
      <Plans />
      <PlansUpdate />
      <ExtraPlans />
      <Footer />
    </div>
  );
}

export default App;
