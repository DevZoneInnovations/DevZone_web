import zap_img from "./whatsapp.png";
import "./App.css";
import About from "./components/About/About";
import HowWork from "./components/HowWork/HowWork";
import WhyDevZone from "./components/WhyDevZone/WhyDevZone";
import Projects from "./components/Projects/Projects";
import Plans from "./components/Plans/Plans";
import PlansUpdate from "./components/PlansUpdate/PlansUpdate";
import Footer from "./components/Footer/Footer";
import ExtraPlans from "./components/ExtraPlans/ExtraPlans";

function App() {
  return (
    <div className="App">
      {/* Botão flutuante whatsapp */}
      <div className="btn-zap">
        <a href="https://wa.me/5511985050470">
          <img src={zap_img} alt="Whatsapp icone"></img>
        </a>
      </div>
      <About />
      <HowWork />
      <WhyDevZone />
      <Projects />
      <Plans />
      <PlansUpdate />
      <ExtraPlans />
      <Footer />
    </div>
  );
}

export default App;
