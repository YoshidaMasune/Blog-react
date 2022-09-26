import { useState, createContext, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { auth } from "./fireBase-config"
import { onAuthStateChanged } from 'firebase/auth';
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import AddBlog from './pages/Addblog'

const AppContext = createContext();

function App() {
  const [loginState, setLoginState] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoginState(true);
    }else{
      setLoginState(auth)
    }
  })
  useEffect( () => {

  }, [])
  return (
    <div className="App">
      <AppContext.Provider value={{"loginState": loginState}} >
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='/addBlog' element={ <AddBlog /> } />
        </Routes>
      </AppContext.Provider>
    </div>
  )
}

export default App
export { AppContext }