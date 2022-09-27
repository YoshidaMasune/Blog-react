import React, { useState } from 'react'
import Container from '../components/layout/Container'
import Navbar from '../components/Navbar'
import FormControl from '../components/layout/FormControl'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { db } from '../fireBase-config';
import { addDoc, collection } from '@firebase/firestore';

const topics_func = (...topics) => {
  return topics.map( topic => {
    return (
      <option key={topic} value={topic}>{topic}</option>
    )
  })
}

function Addblog() {
  const [ blog, setBlog ] = useState(``);
  const [ headLine, setHeadLine ] = useState('')
  const [ topic, setTopic ] = useState('general');
  const blogsRef = collection(db, "blogs")
  const topics = ["general", "Dev", "tech", "js"]
  const editorConfiguration = {
    // toolbar: [ 'bold', 'italic' ]
  };
  const createBlog = async (e) => {
    e.preventDefault();
    await addDoc(blogsRef, {blog,headLine,topic})
    .then( () => window.location = '/')
    .catch( err => alert(err))
  }

  return (
    <>
      <Navbar />
        <Container style={`w-3/4 h-screen`}>
          <form onSubmit={createBlog}>
            <h2>Create Your Blog</h2>
            <div className="">
              <FormControl>
                <label>headLine</label>
                <input type="text" onChange={ (e) => {setHeadLine(e.target.value)}} />
              </FormControl>

              <FormControl>
                <label>topic</label>
                <select name="topic" onChange={(e) => {setTopic(e.target.value)}}>
                  {topics_func(...topics)}
                </select>
              </FormControl>

              <FormControl>
                <div className="blog mx-auto">
                  <label>Write Yore Blog This Here..</label>
                  <CKEditor
                    config={editorConfiguration}
                    editor={ ClassicEditor }
                    data="<p>Write Here..</p>"
                    onReady={ editor => {
                        setBlog(editor.getData())
                    } }
                    onChange={ ( event, editor ) => {
                      const data = editor.getData();
                      setBlog(data)
                    } }
                    onBlur={ ( event, editor ) => {
                      setBlog(editor.getData())
                    } }
                    onFocus={ ( event, editor ) => {
                      setBlog(editor.getData())
                    } }
                  />
                  </div>
              </FormControl>
            </div>

            <FormControl>
              <button type="submit" className="mx-auto border-none bg-blue-500 text-white">Create Blog</button>
            </FormControl>
          </form>
        </Container>
    </>
  )
}

export default Addblog