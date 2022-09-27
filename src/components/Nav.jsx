import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from "../App"
import { signOut } from 'firebase/auth'

function Nav() {
   const { loginState, auth} = useContext(AppContext)
   const logOut = () => {
      signOut(auth)
   }
   return (
   <>
      <ul className='flex gap-10'>
         <li>
             <Link to="/">home</Link>
         </li>
         <li>
            <Link to='/addBlog' >AddBlog</Link>
         </li>
         { !loginState? (<li> <Link to='/login'>LogIn</Link> </li>) : (<button onClick={logOut}>LogOut</button>)}
         
      </ul>
   </>
   )
}

export default Nav