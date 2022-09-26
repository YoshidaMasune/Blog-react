import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Container from '../components/layout/Container'
import{ auth } from '../fireBase-config';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom';
import FormControl from '../components/layout/FormControl';

function Login() {
  const [email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const LogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then( res => {
      window.location = "/addBlog"
    })
    .catch( err => alert(err))
  }
  return (
    <>
      <Navbar />
        <Container style={`w-auto mt-44`}>
          <form onSubmit={LogIn} className='mt-10 border w-fit mx-auto px-2 sm:p-5 lg:px-10 rounded-lg flex flex-col items-center '>
            <h2 className='text-5xl font-black'>login</h2>
            <div className="flex flex-col gap-4">

              <FormControl>
                <label>email</label>
                <input onChange={ (e) => {setEmail(e.target.value)}} type="email" />
              </FormControl>

              <FormControl>
                <label>password</label>
                <input onChange={(e) => {setPassword(e.target.value)}} type="password" /> 
              </FormControl>
            </div>

              <FormControl>
                <button type="submit" className='bg-blue-500 border-none text-white' >Login</button>
              </FormControl>

            <Link to="/register" className='self-end'>Sign Up</Link>
          </form>
        </Container>
    </>
  )
}

export default Login