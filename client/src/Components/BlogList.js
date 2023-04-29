import React from "react";
import './BlogList.css'

const BlogList = ({ dataPost }) => {
   const { blogSubject, blogBody } = dataPost

   return (
      <div className="blog">
         <h1 className="blog-subject"> {blogSubject} </h1>
         <p className="blog-body"> {blogBody} </p>
      </div>
   )
}

export default BlogList;



// const BlogList = () => {
//    return (
//       <div>
//          <h1>Blog List</h1>
//       </div>
//    )
// }

// export default BlogList