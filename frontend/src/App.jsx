import React from 'react';
 import AboutUs from './pages/aboutus.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from  './pages/home.jsx';
import ServicesPage from './pages/Services.jsx';
import ContactPage from './pages/contactus.jsx';

function App() {
  return (
    

     
     <div>
          <BrowserRouter>
          <Routes>
            <Route index element = {<Home />} ></Route>
            <Route path='/home'  element = {<Home />}></Route>
            <Route path='/about-us'  element = {<AboutUs />}></Route>
            <Route path='/syscare-services'  element = {<ServicesPage />}></Route>
            <Route path='/contact-Us'  element = {<ContactPage />}></Route>
          </Routes>
          </BrowserRouter>
     </div>

  );
}
 
export default App;