import React, { useState } from 'react'
import './Post.css'

function Post() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const[image, setImage] = useState("")
    return (
        <div  className="card  input-field  post-container">
            <input  type="text" placeholder="Post title"  value={title} onChange={(event)=>setTitle(event.target.value)}/>
            <input  type="text" placeholder="Post content"  value={content} onChange={(event)=>setContent(event.target.value)}/>
            <div className="file-field input-field">
            <div className="btn  green">
                <span>Upload  image</span>
                <input type="file" onChange={(event)=>console.log(event.target.files[0])} />
            </div>
            <div className="file-path-wrapper"/>
                <input className="file-path validate" type="text"/>
            </div>
            <button  className='btn-large  waves-effect waves-light  green'>Post</button>
    </div>
        
    )
}

export default Post
