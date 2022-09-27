import React from 'react'
import Blogs from '../components/Blogs'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <Navbar />
      <div className="">
        <Blogs />
      </div>
    </>
  )
}

export default Home