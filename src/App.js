import './App.css';
import About from './components/About/about';
import Codeforces from './components/codeforces/codeforces';
import Footer from './components/Footer/footer';
import Landing from './components/Landing/landing';
import Navbar from './components/navbar';
import Projects from './components/Projects/projects';
import Skills from './components/skills/skills';
import Timeline from './components/timeline/timeline';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Codeforces />
      <Footer />             
    </div>
  );
}

export default App;
