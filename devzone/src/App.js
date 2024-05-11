import zap_img from "./whatsapp.png";
import "./App.css";
import About from "./components/About/About";
import HowWork from "./components/HowWork/HowWork";

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
    </div>
  );
}

export default App;
