import React, { useState, useEffect } from 'react'
import Container from './layout/Container'
import { db } from '../fireBase-config'
import { collection, getDocs } from 'firebase/firestore'
import Blog from './Blog';

const getBlogs = (blogsRef, setBlogs) => {
  getDocs(blogsRef)
  .then(res => setBlogs(res.docs.map( doc => ({...doc.data(), id: doc.id}))))
}
const checkBlogs = (blogs) => {
  if (blogs){
    return mapBlogs(blogs)
  }else {
    return
  }
} 
const mapBlogs = (blogs) => {
  return blogs.map( blog => {
    return (
      <Blog blog={blog} key={blog.id} />
    )
  })
}

function Blogs() {
  const [ blogs, setBlogs ] = useState([]);
  const blogsRef = collection(db, "blogs")
  useEffect( () => {
    getBlogs(blogsRef, setBlogs)
  }, [])

  return (
    <>
      <Container style="w-3/4">
        <header className='border-b-2'>
          <h2 className='text-4xl mt-10 text-slate-800 font-black'>Blogs</h2>
          <p className='indent-8 pt-3'>เรื่องราวของการเดินทาง</p>
        </header>
        <div className="mt-10 mx-2 sm:ml-10">
          <div className="grid gap-x-5 grid-cols-1 sm:grid-cols-2">
            {checkBlogs(blogs)}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Blogs