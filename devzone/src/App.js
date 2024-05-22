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
import Segurança from "./components/Segurança/Segurança";
import Footer2 from "./components/Footer2/Footer2";

function App() {
  return (
    <div className="App">
      <ZapButton />
      <About />
      <HowWork />
      <WhyDevZone />
      <Segurança />
      <Plans />
      <PlansUpdate />
      <ExtraPlans />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
