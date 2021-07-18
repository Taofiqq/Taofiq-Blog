import React from 'react'
import {Link} from 'react-router-dom'

const BlogList = ({blogs, title}) => {
    
    return (
        <div className = "blog-list" >
            <div>
            <h1 className="blog-list-title">{title}</h1>
            </div>

            <div className="blog-list-item">
            {blogs.map((blog) => (
                <div key={blog.id} >
                    <Link to={`blogs/${blog.id}`} className="blog-list-link">
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))} 
            </div>
           
        </div>
    )
}

export default BlogList
