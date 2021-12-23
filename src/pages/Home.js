import React from 'react'
import './Home.css'
function Home() {
    return (
        <div  className="home-container">
            <div className="card home-card">
                    <h5>Karl Czerny</h5>
                    <div className="card-image">
                            <img src="https://images.unsplash.com/photo-1507090960745-b32f65d3113a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"   alt=""/>
                    </div>
                    <div  className="card-content">
                        <h6>Post Title</h6>
                        <p>Awesome post content</p>
                        <input type="text" placeholder="add comment"/>
                    </div>
            </div>
        </div>
    )
}

export default Home
