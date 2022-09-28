import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { query, where, collection, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../fireBase-config'
import Navbar from '../components/Navbar'
import Container from '../components/layout/Container'
import Footer from '../components/Footer'

const blogRef = collection(db, "blogs")
function DisplayBlog() {
   const [blog, setBlog] = useState({})
   let { id } = useParams();
   useEffect( () => {
      const q = query(blogRef, where("headLine", "==", id))
      getDocs(q).then(res => setBlog(res.docs[0].data()))
      
   }, [])
   return (
      <>
         <main>
            <Navbar />
            <Container style='h-screen'>
             <div className="box flex flex-col p-4 sm:p-0 ">
               <h2>{blog.headLine}</h2>
               <section dangerouslySetInnerHTML={{__html: blog.blog}} />
             </div>  
            </Container>
         </main>

         <Footer />
      </>
   )
}

export default DisplayBlog