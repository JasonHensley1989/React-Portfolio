import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TopAnimation from './components/Top-Animation';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <TopAnimation />
      <Header />
      <Routes>
        <Route path='/About' element={<About />}/>
        <Route path='/Projects' element={<Projects />}/>
        <Route path='/Blog' element={<Blog />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
