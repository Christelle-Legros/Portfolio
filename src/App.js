import "./styles/styles.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Realisations from "./components/Realisations";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Realisations />
      <Contact />
    </div>
  );
}

export default App;
