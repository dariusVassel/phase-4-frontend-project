import React, {useEffect, useState} from 'react';
import Navbar from './components/Navigation/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Static/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import { baseUrl, headers, getToken } from './Globals'


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] =useState(false);

  function loginUser(user){
    setCurrentUser(user)
    setLoggedIn(true)
  }

  function logOutUser(){
    setCurrentUser({})
    setLoggedIn(false)
    localStorage.removeItem('jwt')

  }

  useEffect(()=> {
    const token = localStorage.getItem('jwt')
    if (token && !loggedIn){
      fetch(baseUrl + '/get-current-user', {
        method: "GET",
        headers: {
          ...headers,
          ...getToken()
        }
      })
        .then(resp => resp.json())
        .then(user => {
          loginUser(user)
        })
    }
  }, [])


  return (
    <div className="App">
      <Router>
        <Navbar loggedIn ={loggedIn} logOutUser={logOutUser}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup loginUser= {loginUser}/>}/>
          <Route path="/login" element={<Login loginUser= {loginUser}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
