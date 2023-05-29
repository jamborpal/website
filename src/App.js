import './App.css';
import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Projects from './pages/projects';
import Studies from './pages/studies';
import WorkExperience from './pages/workexperience';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/studies' component={Studies} />
        <Route path='/workexperience' component={WorkExperience} />
      </Routes>
    </Router>)
}

export default App;
