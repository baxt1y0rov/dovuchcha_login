import { useState } from 'react'
import './App.css'
import React from 'react';
import DovuchchaSignIn from './Pages/Signin';
import DovuchchaNameAsk from './Pages/SurNameAsk';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DovuchchaSignIn />
      <Routes> 
        <Route path="/" element={<DovuchchaSignIn/>} />{} 
        <Route path="/NameAsk" element={<DovuchchaNameAsk/>} />{} 
      </Routes>
      
      
    </>
  )
}

export default App
