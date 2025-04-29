import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
