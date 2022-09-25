import React from 'react'
import Navbar from '../components/Navbar'
import { auth } from "../fireBase-config"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

function Register() {

  return (
    <>
      <Navbar />
    </>
  )
}

export default Register