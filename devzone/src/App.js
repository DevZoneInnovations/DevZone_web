import "./App.css";
import About from "./components/About/About";
import HowWork from "./components/HowWork/HowWork";
import WhyDevZone from "./components/WhyDevZone/WhyDevZone";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import ZapButton from "./components/ZapButton/ZapButton";
import Segurança from "./components/Segurança/Segurança";
import Footer2 from "./components/Footer2/Footer2";
import Inicio from "./components/Inicio/Inicio";
import Plans2 from "./components/Plans2/Plans2";

function App() {
  return (
    <div className="App">
      <Inicio />
      <ZapButton />
      <About />
      <HowWork />
      <WhyDevZone />
      <Segurança />
      <Plans2 />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
