import './App.css';
import About from './components/About/about';
import Landing from './components/Landing/landing';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
    </div>
  );
}

export default App;
