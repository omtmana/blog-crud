import React, { useState, useEffect } from "react";
// import axios from 'axios'
import BlogList from "./BlogList";

import './Home.css'
// This is where the blog title and body will be. Also the submit button
const Home = () => {
   const [blogSubject, setBlogSubject] = useState("")
   const [blogBody, setBlogBody] = useState("")
   const [blogPost, setBlogPost] = useState([])

   // const link = 'http://localhost:3000/blogs'

   // GET the data from json file
   useEffect(() => {
      fetch("http://localhost:3000/posts")
         .then((res) => res.json())
         .then((blogPost) => { setBlogPost(blogPost) })
   }, [])

   console.log('post', blogPost)
   // updating the json file displayed
   const handleAddPost = (newPost) => {
      const updatedBlogPost = [...blogPost, newPost]
      setBlogPost(updatedBlogPost)
   }

   // POST new data to json file
   const handleBlogSubmit = ((e) => {
      e.preventDefault()
      fetch("http://localhost:3000/posts", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            blogSubject: blogSubject,
            blogBody: blogBody
         }),
      })
         .then((res) => res.json())
         .then((newPost) => handleAddPost(newPost))
   })

   return (
      <div className="home">
         <div className="home-body-input">
            <form className="blog-form-container" onSubmit={handleBlogSubmit}>
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
                  <button className="form-button"> Submit </button>
               </span>
            </form>
         </div>
         <div className="home-blogs">
            <h1> Blogs </h1>
            <div className="home-blogs-container">
               {
                  blogPost.map((dataPost) => {
                     return <BlogList key={dataPost.id} dataPost={dataPost} />
                  })
               }
            </div>

         </div>
      </div>
   )
}

export default Home;