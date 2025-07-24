import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
 import AboutUs from './pages/aboutus.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from  './pages/home.jsx';

function App() {
  return (
    

     
     <div>
          <BrowserRouter>
          <Routes>
            <Route index element = {<Home />} ></Route>
            <Route path='/home'  element = {<Home />}></Route>
            <Route path='/about-us'  element = {<AboutUs />}></Route>
          </Routes>
          </BrowserRouter>
     </div>

  );
}
 
export default App;