import React, { useEffect, useEffectEvent, useState } from 'react'
import FormPage from './pages/FormPage'
import Navbar from './components/Navbar'
import { Route,  Routes } from 'react-router-dom'
import HeroSection from './pages/HeroSection'
import Admin from './pages/Admin'
import { getLocalStorage, setLocalStorage } from './pages/LocalStorage'
import AdminDashboard from './pages/AdminDashboard'


const App = () => {

  const [userData, setuserData] = useState(null)

   const handleLogin = (email,password)=>{
    if (email === 'admin@gmail.com' && password === '123') {
      console.log('AdminDashboard open');
      setuserData( <AdminDashboard/>)      
    }else{
      alert('Invalid Credientails')

    }
  
    }

     
  // useEffect(() => {
  //     // setLocalStorage()
  //     getLocalStorage()     
  // })
  

  return (
    <div>
    <Navbar/>
    

    <Routes>
   <Route path='/' element={<HeroSection/>} />   
  <Route path='/formpage'  element={<FormPage/>} />
  <Route path='/adminpage'  element={<Admin handleLogin={handleLogin}/> } />
    </Routes>
    
    
    </div>
  )
}

export default App

    // <Route path='/adminpage'  element={<Admin/>} />
