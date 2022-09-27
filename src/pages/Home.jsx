import React from 'react'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <main className='h-screen'>
      <Navbar />
      <div className="h-full mx-4 lg:mx-64 pt-4">
        <div className="border h-[100%] rounded">
          <Blogs />
        </div>
      </div>

      </main>
      <Footer />
    </>
  )
}

export default Home