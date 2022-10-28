import React from 'react';
import Navbar from './Compo/navbar';
import Main from './Compo/html';
import Logindetails from './Compo/form handling';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App (){
    return  <><div>
        <Router>
        <Navbar />
        <Routes>
            <Route path='/home' element={<home />} />
            <Route path="/about" element={<about />} />
            <Route path="/contact" element={<contact />} />
            <Route path="/services" element={<services />} />
            <Route path="/rate-up" element={<rate-up />} />
            <Route path="/login" element={<login />} />
        </Routes>
        </Router>
        <Main />
        <Logindetails />
            </div></>

}
export default App