import './App.css';
import Main from './screens/Main';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from './screens/Signup';
import Login from './screens/Login';
import MyBlogs from './screens/MyBlogs';
import Blog from './screens/Blog';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import Profile from './screens/Profile';

function App() {
  let rou = <Route path="/blog" element={<Blog/>}/>
  let route1;
  let route2;
  let user = useSelector(selectUser)
  if(user.userReducer.email != null){
    route1 =  <Route path="/profile/" element={<Profile/>}/>
    route2 =   <Route path="/myblogs/" element={<MyBlogs/>}/>
  }else{
    route1 =  <Route path="/login/" element={<Login/>}/>
    route2 =   <Route path="/signup/" element={<Signup/>}/>
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>}/>
          {route1}
          {route2}
          {rou}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
