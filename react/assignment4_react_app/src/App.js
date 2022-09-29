import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Product from './Product';
import Blog from './Blog';
import Singlepost from './Singlepost';
import Contact from './Contact';

function App() {
  return (
    <>
      <div id="page">
        <Header/>
            <Router>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/product' element={<Product/>}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
                <Route path='/singlepost' element={<Singlepost/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
              </Routes>
            </Router>
          <Footer/>
      </div>
    </>
  );
}

export default App;
