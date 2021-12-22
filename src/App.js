import NavBar from './components/NavBar'
import './App.css';
import {Routes,  Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

function App() {
  return (
  // <Routes>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path='/login'  element={<Login/>}/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile/>} />
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
