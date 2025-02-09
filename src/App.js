import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import RainEffect from "./components/RainEffect"; // Importa o efeito de chuva
import About from "./components/About";
import Work from "./components/Work";

function App() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#202020] to-[#111119]">
      <RainEffect /> {/* Chuva cobrindo todo o site */}

      {/* Conteúdo do site com um z-index maior */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <About/>
        <Work/>
      </div>
    </div>
  );
}

export default App;
