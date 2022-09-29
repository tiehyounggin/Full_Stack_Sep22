import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './PRoduct';
import Service from './Service';
import Gallery from './Gallery';
import Contact from './Contact';

function App() {
  return (
    <>
      <div className="container-fluid bg-primary py-3 d-none d-md-block">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-white pr-3" href="">FAQs</a>
                        <span className="text-white">|</span>
                        <a className="text-white px-3" href="">Help</a>
                        <span className="text-white">|</span>
                        <a className="text-white pl-3" href="">Support</a>
                    </div>
                  </div>
                  <div className="col-md-6 text-center text-lg-right">
                      <div className="d-inline-flex align-items-center">
                          <a className="text-white px-3" href="">
                              <i className="fab fa-facebook-f"></i>
                          </a>
                          <a className="text-white px-3" href="">
                              <i className="fab fa-twitter"></i>
                          </a>
                          <a className="text-white px-3" href="">
                              <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a className="text-white px-3" href="">
                              <i className="fab fa-instagram"></i>
                          </a>
                          <a className="text-white pl-3" href="">
                              <i className="fab fa-youtube"></i>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
