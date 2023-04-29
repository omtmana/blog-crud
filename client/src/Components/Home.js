import React, { useState } from "react";
import './Home.css'
// This is where the blog title and body will be. Also the submit button
const Home = () => {
   const [blogSubject, setBlogSubject] = useState("")
   const [blogBody, setBlogBody] = useState("")

   const handleBlogSubmit = ((e) => {
      e.preventDefault()
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
         {/* I need an input field for the subject and body */}
      </div>
   )
}

export default Home;