import React from 'react'
import Navbar from '../components/Navbar'
import { auth } from "../fireBase-config"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import Container from '../components/layout/Container'
import FormControl from '../components/layout/FormControl'

function Register() {

  const register = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value
    createUserWithEmailAndPassword(auth, email, password)
  }

  return (
    <>
      <Navbar />
      <Container>
        <form onSubmit={register} className='mt-10 border w-fit mx-auto px-2 sm:p-5 lg:px-10 rounded-lg flex flex-col items-center '>
          <h2>register</h2>
          <div className="">
            <FormControl>
              <label>username</label>
              <input type="text" />
            </FormControl>

            <FormControl>
              <label>email</label>
              <input type="email" name='email' placeholder="Example@email.com"/>
            </FormControl>

            <FormControl>
              <label>password</label>
              <input type="password" name='password' />
            </FormControl>
          </div>
          
          <FormControl>
            <button>Register</button>
          </FormControl>
        </form>
      </Container>
    </>
  )
}

export default Register