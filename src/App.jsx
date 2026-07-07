// IMPORT FUNCTIONS HERE VIA 
import { Routes, Route, Link } from 'react-router-dom';
import './app.css';
import Home from './home';
import About from './about';
import Project from './projects';
import Certifications from './certification';
import Contact from './contact';
import Books from './books';

// PUT THE IMPORTED FUNCTIONS HERE
function App() {
  return (
    <div className="container">
      {/* Navigation (Stays on every page) */}
      <nav className="navbar">
        <div className="logo">Mage Pages</div>
        <ul className="nav-links">
          <li><Link className="nav-link" to="/">Home</Link></li>
          <li><Link className="nav-link" to="/about">About</Link></li>
          <li><Link className="nav-link" to="/projects">Project(s)</Link></li>
          <li><Link className="nav-link" to="/certification">Certification(s)</Link></li>
          <li><Link className="nav-link" to='/books'>Book(s)</Link></li>
          <li><Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* The Page Content (Changes based on URL) */}
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/certification" element={<Certifications />} />
        <Route path="/books" element={<Books />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </div>
  );
}

export default App
