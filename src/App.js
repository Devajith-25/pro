
import './App.css';

import Login from './components/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
// import Dashboard from './components/Dashboard';


import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import Reservation from './components/Reservation';











function App() {
  return (
    <div className="App">
      {/* <Dialoge/> */}

      <Navbar/>

     
      <Routes>
  
      {/* <Route path='/dash' element={<Dashboard/>}/> */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/signin' element={<Signup/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/feedback'element={<Feedback/>}/>
      <Route path='/reservation'element={<Reservation/>}/>


      {/* <Route path='/home'element={<><Navbar/><Home/></>}/> */}
      <Route path='/' element={<><Home/><Footer/></>}/>
      <Route path='/' element={<Navigate to="/Home"/>}/>
      
      

    
     </Routes>
       {/* <Footer/> */}
    
    </div>
  );
}

export default App;
