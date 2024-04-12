import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import MainLayout from './layouts/MainLayout'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout><LandingPage /></MainLayout>} />
      </Routes>
    </>
  )
}

export default App
