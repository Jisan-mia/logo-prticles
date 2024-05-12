import BgParticleContainer from "./components/Bg-particles";
import LogoParticles from "./components/LogoParticles";

function App() {
  return (
    <div className="app-main-content" style={{
      position: 'relative',
      overflow: 'hidden',
      width: '100vw',
      height: '100vh'
    }}>
      <LogoParticles />
      <BgParticleContainer />
    </div>
  );
}

export default App;
