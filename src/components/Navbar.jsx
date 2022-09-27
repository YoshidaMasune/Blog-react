import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { IoBrushOutline } from "react-icons/io5";
import Nav from './Nav';
import { AppContext } from '../App'

function Navbar() {

  

  return (
    <>
      <nav className='bg-gray-900 text-white flex justify-between items-center h-10 py-7 px-4 md:px-70 sm:px-5 lg:px-80'>
        <Link to="/" className="logo">
          <i className=''><IoBrushOutline fontSize={30} /></i>
        </Link>
        <Nav />
      </nav>
    </>
  )
}

export default Navbar