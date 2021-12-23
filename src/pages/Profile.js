import React from 'react'
import './Profile.css'

function Profile() {
    return (
        <div style={{maxWidth:  "550px",  margin: "0px  auto"}}>
            <div  className="profile-container">
                    <div>
                        <img  style={{width:  "160px",  height: "160px",  borderRadius:  "80px"}} src="https://i.imgur.com/Zl6sg1n.jpg?1"  alt="profile"/>
                    </div>
                        <div>
                                <h4>Jerathel Jean</h4>
                                <div  className="user-info">
                                        <h6>7k posts</h6>
                                        <h6>10M followers</h6>
                                        <h6>1500 following</h6>
                                </div>
                        </div>
                </div>
                <div  className="gallery-container">
                <img  className="gallery" src="https://images.unsplash.com/photo-1640086696455-89f74a12b549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=602"/>
                <img  className='gallery'src='https://images.unsplash.com/photo-1640195516482-aaab6c242863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'/>
                <img  className='gallery'src='https://images.unsplash.com/photo-1640194187638-5b6a260882f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'/>
                <img  className='gallery'src='https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
                <img  className='gallery'src='https://images.unsplash.com/photo-1640164823836-b815c0bce678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
                <img  className='gallery'src='https://images.unsplash.com/photo-1639758295963-88afd9ca9c82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
                <img  className='gallery'src='https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
                <img  className='gallery'src='https://images.unsplash.com/photo-1640174177278-626c26144e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
                <img  className='gallery'src='https://images.unsplash.com/photo-1640174177278-626c26144e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
                </div>
        </div>
    )
}

export default Profile
