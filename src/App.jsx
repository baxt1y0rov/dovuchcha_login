import { useState } from 'react'
import './App.css'
import React from 'react';
import DovuchchaSignIn from './Pages/Signin';
import DovuchchaNameAsk from './Pages/SurNameAsk';
import { Routes, Route } from 'react-router-dom';
import BasicAsk from './Pages/BasicAsk';
import EmailAsk from './Pages/EmailAsk';
import PasswordAsk from './Pages/PasswordAsk';
import SucceedAcc from './Pages/SucceedAcc';
import VerifyPassword from './Pages/VerifyPassword';
import SucceedLogAcc from './Pages/SucceedLogAcc';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes> 
        <Route path="/" element={<DovuchchaSignIn/>} />{} 
        <Route path="/NameAsk" element={<DovuchchaNameAsk/>} />{}
        <Route path="/BasicAsk" element={<BasicAsk/>} />{}
        <Route path="/EmailAsk" element={<EmailAsk/>} />{}
        <Route path="/PasswordAsk" element={<PasswordAsk/>} />{}
        <Route path="/SucceedAcc" element={<SucceedAcc/>} />{}
        <Route path="/VerifyPassword" element={<VerifyPassword/>} />{}
        <Route path="/SucceedLogAcc" element={<SucceedLogAcc/>} />{}

      </Routes>
      
      
    </>
  )
}

export default App
