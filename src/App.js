import React, {useState} from 'react';
import Navbar from './components/Navigation/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Static/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] =useState(false);

  function loginUser(user){
    setCurrentUser(user)
    setLoggedIn(true)
  }


  return (
    <div className="App">
      <Router>
        {loggedIn? <h1>Hey we are logged in</h1>:null}
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup loginUser= {loginUser}/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
