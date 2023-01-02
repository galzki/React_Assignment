import './App.css';
import Navbar from './Navbar' 

import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Students from './components/pages/Students';
import Registration from './components/pages/Registration';
import Login from './components/pages/Login';
import Features from './components/pages/Features';

function App() {
  return (
    <div>
      <Navbar/>
        <div>
          <Routes>
          <Route path= "/React_Assignment" element={<Home/>}/>
            <Route path= "/students" element={<Students/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/features" element={<Features/>}/>
          </Routes>
        </div>
      
    
      <Footer/>
   
      
      
    </div>
  )
}

export default App;
