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
        <div>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.author}</h2>
                    <p>Written by {blog.author}</p>
                    <h2>{blog.body}</h2>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails
