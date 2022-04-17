import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from './screens/Signup';
import Login from './screens/Login';
import MyBlogs from './screens/MyBlogs';
import Blog from './screens/Blog';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import Profile from './screens/Profile';
import Main from './screens/Main';
import EditBlog from './screens/EditBlog';
import AddBlog from './screens/AddBlog';

function App() {
  let data = useSelector(selectUser)
  let path = `/blog/${data.userReducer.urlindex}`
  console.log(path)
  let rou = <Route path={path} element={<Blog/>}/>
  let route1;
  let route2;
  let route3;
  let user = useSelector(selectUser)
  if(user.userReducer.email != null){
    route1 =  <Route path="/profile/" element={<Profile/>}/>
    route2 =   <Route path="/myblogs/" element={<MyBlogs/>}/>
    route3 = <Route path="/addblog" element={<AddBlog/>}/>
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
          {route3}
        </Routes>
      </div>
    </Router>
  );
}

export default App;