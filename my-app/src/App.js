import NavBar from "./navbar/NavBar";
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate,
  Link
} from "react-router-dom";



function App() {
  const user=false
  return (
  <Router>
    <NavBar></NavBar>
  
      <Routes >
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="register" element={user?<Home></Home>:<Register></Register>}></Route>
        <Route path="login" element={user?<Home></Home>: <Login></Login>}></Route>
        <Route path="write" element={user?<Write></Write>:<Register></Register>}></Route>
        <Route path="settings" element={user?<Settings></Settings>:<Register></Register>}></Route>
        <Route path="post/:postId" element={<Single></Single>}></Route>
      </Routes>
    
   
  </Router>
  );
}

export default App;
