import './App.css';
import About from './components/About/about';
import Landing from './components/Landing/landing';
import Navbar from './components/navbar';
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
    </div>
  );
}

export default App;
