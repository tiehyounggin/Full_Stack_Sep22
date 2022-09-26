import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';
import Contact from './Contact';
import Homework2609 from './Homework2609';

function App() {
  return (
    <>
    {/* <h1>Hello, this is from App.js</h1> */}
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/homework2609" element={<Homework2609/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
