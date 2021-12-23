import NavBar from './components/NavBar'
import './App.css';
import {Routes,  Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Post from './pages/Post';

function App() {
  // const URL = 'https://creepee-app.herokuapp.com/home'

  return (
  // <Routes>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path='/login'  element={<Login/>}/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/post' element={<Post/>} />
        </Routes>
      </div>
    // <Route  path="/">
    // </Route>
  //   <Route path='/login'>
  //   </Route>
  //   <Route  path='/signup'>
  //     <Signup />
  //   </Route>
  //   <Route  path='/profile'>
  //     <Profile />
  //   </Route>
  // </Routes>
      
  );
}

export default App;
