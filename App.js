import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TopAnimation from './components/Top-Animation';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <TopAnimation />
      <Header />
      <Routes>
        <Route path='/About' element={<About />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
