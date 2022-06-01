import './App.css';
import './About.css';
import './Contact.css';
import './Portfolio.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className='background'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
