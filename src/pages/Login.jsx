import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Container from '../components/layout/Container'
import{ auth } from '../fireBase-config';
import { signInWithEmailAndPassword } from 'firebase/auth'

const FormControl = (props) => {
  return (
    <div className=''>
      { props.children }
    </div>
  )
}

function Login() {
  const [email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const LogIn = () => {
    signInWithEmailAndPassword(auth, email, password);
  }
  return (
    <>
      <Navbar />
        <Container style={`w-3/5`}>
          <h2>login</h2>

          <form>
            <FormControl>
              <label></label>
            </FormControl>
          </form>

        </Container>
    </>
  )
}

export default Login