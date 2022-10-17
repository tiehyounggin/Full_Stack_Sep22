import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';
import Contact from './Contact';
import Homework2609 from './Homework2609';
import Homework2709 from './Homework2709';
import Register from './Register';
import Login from './Login';
import Update from './Update';
import Login2 from './Login2';
import Logout from './Logout';

function App() {
  return (
    <>
    {/* <h1>Hello, this is from App.js</h1> */}
    {/* <Header/> */}
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/homework2609" element={<Homework2609/>}></Route>
        <Route path="/homework2709" element={<Homework2709/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Update" element={<Update/>}></Route>
        <Route path="/Login2" element={<Login2/>}></Route>
        <Route path="/Logout" element={<Logout/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
