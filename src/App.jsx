import { useState, createContext, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { auth } from "./fireBase-config"
import { onAuthStateChanged } from 'firebase/auth';
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import AddBlog from './pages/Addblog'
import DisplayBlog from './pages/DisplayBlog';

const AppContext = createContext();

function App() {
  const [loginState, setLoginState] = useState();
  useEffect( () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoginState(true);
      }else{
        setLoginState(false)
      }
    })
  }, [])
  return (
    <div className="App min-h-screen flex flex-col justify-between">
      <AppContext.Provider value={{"loginState": loginState, auth: auth}} >
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='/addBlog' element={ <AddBlog /> } />
          <Route path='/blog/:id' element={ <DisplayBlog /> } />
        </Routes>
      </AppContext.Provider>
    </div>
  )
}

export default App
export { AppContext }