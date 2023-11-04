import './App.css';
// for navigation
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Post_List from './components/home';
import Login from './components/login';
import Post from './components/create-post';
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { ChakraProvider } from "@chakra-ui/react";
import IntroPage from './components/intro';
import bloatBabeBlack from "./components/BloatBabeBlack.png";


function App() {
  // state variable about whether user is signed in or not
  // start with isAuth being false
  const [isAuth, setIsAuth] = useState(false);

  // function that signs user out
  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false);
      window.location.pathname = "/login";
    })

  }
  return (
    <ChakraProvider>
      <img className="bloat-babe-nav-pic" src={bloatBabeBlack} />
    <Router >
      <ul className="nav-bar">
      
      <div className="links">
        <Link to="/home"> Feed </Link>
        { /* conditional statement: if user not authenticated, show login button on navbar, else logout button */
        !isAuth ? <Link  to="/login"> Login </Link> : <button className="logout-button" onClick={ logOut }>Log Out</button>}
        { isAuth && <Link  to="/create-post"> Create Post </Link>}
        </div>
      </ul>
      <Routes>
      <Route path="/" element={ <IntroPage />} /* path for home screen *//> 
        <Route path="/home" element={ <Post_List isAuth={isAuth} />} /* path for home screen *//> 
        <Route path="/login" element={ <Login setIsAuth={setIsAuth} />} /* path to login *//>
        <Route path="/create-post" element={ <Post isAuth={isAuth} />} /* path to create post *//>
      </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;


