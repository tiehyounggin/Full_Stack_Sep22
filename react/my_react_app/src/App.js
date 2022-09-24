import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';
import Contact from './Contact';

function App() {
  return (
    <>
    {/* <h1>Hello, this is from App.js</h1> */}
    <Header/>
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
