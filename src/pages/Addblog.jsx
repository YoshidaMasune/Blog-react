import React, { useState } from 'react'
import Container from '../components/layout/Container'
import Navbar from '../components/Navbar'
import Blogs from "../components/Blogs"
import FormControl from '../components/layout/FormControl'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Addblog() {
  const [ Blog, setBlog ] = useState(``);
  const [ headLine, setHeadLine ] = useState('')
  const [ topic, setTopic ] = useState('');

  const editorConfiguration = {
    toolbar: [ 'bold', 'italic' ]
};
  console.log(Blog)
  return (
    <>
      <Navbar />
        <Container style={`w-3/4 h-screen`}>
          <form>
            <h2>Create Your Blog</h2>
            <div className="">
              <FormControl>
                <label>headLine</label>
                <input type="text" />
              </FormControl>

              <FormControl>
                <label>topic</label>
                <select name="topic">
                
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
                        // You can store the "editor" and use when it is needed.
                        // console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        // console.log( { event, editor, data } );
                        setBlog(data)
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                  />
                  </div>
              </FormControl>
            </div>
          </form>
        </Container>
    </>
  )
}

export default Addblog