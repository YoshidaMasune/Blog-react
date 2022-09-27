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
      <Container style="w-3/4 mt-10">
        <header>
          <h2 className='text-4xl'>Blogs</h2>
        </header>
        <div className="mt-10 flex flex-col items-center gap-5">
          <div className="flex flex-col gap-10">
            {checkBlogs(blogs)}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Blogs