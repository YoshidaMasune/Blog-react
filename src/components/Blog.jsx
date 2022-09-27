
import React from 'react'
import Navbar from './Navbar'

function Blog(props) {

  const { blog } = props;
  console.log(blog.blog.slice(1, blog.blog.length - 1))
  return (
    <>
      <article>
        <h2>{blog.headLine}</h2>
        <section dangerouslySetInnerHTML={{__html: blog.blog}} />
      </article>
    </>
  )
}

export default Blog