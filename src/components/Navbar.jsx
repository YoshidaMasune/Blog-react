import React from 'react'
import { Link } from 'react-router-dom'

const Link_li = (...routes) => {
  let style = ``;
  return routes.map(route => {
    return (
      <li key={route} className={style}> 
        <Link to={`/${route}`}>
          { route }
        </Link>
      </li>
    )
  })
}

function Navbar() {
  return (
    <>
      <nav className='bg-blue-300 flex justify-between items-center h-10 px-80'>
        <Link to="/" className="logo">
          <img src="https://cdn-icons-png.flaticon.com/128/1/1905.png" alt="blog icons" className='w-[30px]' />
        </Link>
        <ul className='flex gap-2'>
          <li>
            <Link to="/">home</Link>
          </li>
          {Link_li("addBlog", "login")}
        </ul>
      </nav>
    </>
  )
}

export default Navbar