import React from 'react'

function Blog(props) {
  const { blog } = props;
  return (
    <>
      <article className='flex flex-col delay-50 duration-300 cursor-pointer hover:ease-out border mt-10 p-2 rounded-2xl bg-sky-200 hover:-translate-y-1 hover:translate-x-1'>
        <h2 className='text-2xl'>{blog.headLine==""? "no": blog.headLine} </h2>
        <h3 className='w-fit p-2 self-end bg-white rounded-2xl'>Topic {blog.topic}</h3>
        {/* <section dangerouslySetInnerHTML={{__html: blog.blog}} /> */}
      </article>
    </>
  )
}

export default Blog