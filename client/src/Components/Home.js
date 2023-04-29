import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import './Home.css'
// This is where the blog title and body will be. Also the submit button
const Home = () => {
   const [blogSubject, setBlogSubject] = useState("")
   const [blogBody, setBlogBody] = useState("")
   const [blogPost, setBlogPost] = useState([])

   // const link = 'http://localhost:3000/blogs'

   useEffect(() => {
      fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((newDataArray) => {setBlogPost(newDataArray)})
   }, [])

   console.log(blogPost)

   // console.log('post',blogPost)

   const handleAddPost = (newPost) => {
      const updatedBlogPost = [...blogPost, newPost]
      setBlogPost(updatedBlogPost)
   }

   const handleBlogSubmit = ((e) => {
      e.preventDefault()
      fetch("http://localhost:3000/blogs", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            blogSubject:blogSubject,
            blogBody: blogBody
         }),
      })
      .then((res) => res.json())
      .then((newPost) => handleAddPost(newPost))
   })

   return (
      <div className="home">
         <div className="home-body-input">
            <form className="blog-form-container">
               <span>
                  <input
                     type="text"
                     placeholder="Subject"
                     value={blogSubject}
                     onChange={(e) => setBlogSubject(e.target.value)}
                     className="form-subject"
                  />
               </span>
               <span>
                  <input
                     type="text"
                     placeholder="Write what you're feeling, thinking, anything you can think of"
                     value={blogBody}
                     onChange={(e) => setBlogBody(e.target.value)}
                     className="form-body"
                  />
               </span>
               <span>
                  <button onClick={handleBlogSubmit} className="form-button"> Submit </button>
               </span>
            </form>
         </div>
         <div>
            {
               blogPost.map((dataPost) => {
                  return <BlogList key={dataPost.id} dataPost={dataPost}/>
               })
            }
         </div>
      </div>
   )
}

export default Home;