import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import AddBlog from './pages/Addblog'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/addBlog' element={ <AddBlog /> } />
      </Routes>
    </div>
  )
}

export default App
