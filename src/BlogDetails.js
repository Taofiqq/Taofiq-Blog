import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, isLoading, error} = useFetch('https://taofiq-blog-api.herokuapp.com/blogs/' + id);
    const history =  useHistory()  

    const handleDelete = () => {
        fetch('https://taofiq-blog-api.herokuapp.com/blogs/' + blog.id, {
            method: "DELETE"
        }).then(() => {
          history.push('/')
        })
    }
    return (
        <div className="blogdetails-container">
            {isLoading && <div className="isLoading">Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <h2>{blog.body}</h2>
                    <button onClick={handleDelete} className="btn-grad">delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails
