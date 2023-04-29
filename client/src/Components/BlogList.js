import React from "react";
import './BlogList.css'

const BlogList = ({ dataPost }) => {
   const { blogSubject, blogBody } = dataPost

   return (
      <div className="blogList">
         <div className="blog-item">
            <h1> {blogSubject} </h1>
            <p> {blogBody} </p>
         </div>
      </div>
   )
}

export default BlogList;