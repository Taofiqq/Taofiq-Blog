import React, {useState}from 'react';
import {useHistory}from 'react-router-dom';


const Create = () => {
    const [title, setTitile] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
       
        setIsLoading(true)
        fetch('https://taofiq-blog-api.herokuapp.com/blogs/', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(true)
        })
        history.push('/')
    } 
    return (
        <div className="create-container">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit} className="create-form">
                <label htmlFor="">Blog Title</label>
                <input type="text" value={title} onChange = {(e) => setTitile(e.target.value)} placeholder="Enter your blog title" required/>
                <label htmlFor="">Blog Body</label>
                <textarea value={body} onChange = {(e) => setBody(e.target.value)} required></textarea>
                <label>Blog Author</label>
               <select value={author} onChange = {(e) => setAuthor(e.target.value)}>
                   <option value="Taofiq">Taofiq</option>
                   <option value="Dami">Dami</option>
               </select>
               { !isLoading && <button className="createBtn">Add Blog</button>}
            </form>
        </div>
    )
}

export default Create;
