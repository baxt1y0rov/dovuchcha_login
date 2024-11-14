import { useState } from 'react'
import './App.css'
import React from 'react';
import GoogleSignIn from './Pages/Start';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GoogleSignIn />
    </>
  )
}

export default App
