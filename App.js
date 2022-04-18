import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TopAnimation from './components/Top-Animation';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <TopAnimation />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
