import React, {useEffect, useState} from 'react';
import Navbar from './components/Navigation/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Static/Home';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import { baseUrl, headers, getToken } from './Globals'
import OrdersList from './components/Orders/OrdersList';
import ProductsList from './components/Products/ProductsList';
import Order from './components/Orders/Order';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [orders, setOrders] = useState([])
  const [products, setProducts] = useState([])
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

        if (!loggedIn){
          fetch(baseUrl + '/orders', {
            headers: {
              ...headers,
              ...getToken()
            }
          })
          .then(resp => resp.json())
          .then(data => {
            console.log(data)
            setOrders(data)
            
        })
        }
    }
  }, [loggedIn])

  function handleGetProducts(e){
    fetch(baseUrl + '/products', {
      headers: {
        ...headers,
        ...getToken()
      }
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setProducts(data)
  })}


  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Navbar loggedIn ={loggedIn} logOutUser={logOutUser} currentUser={currentUser} handleGetProducts={handleGetProducts}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup loginUser= {loginUser} loggedIn = {loggedIn}/>}/>
          <Route path="/login" element={<Login loginUser= {loginUser} loggedIn = {loggedIn}/>}/>
          <Route path="/orders" element={<OrdersList loggedIn = {loggedIn} orders={orders}/>}/>
          <Route path="/orders/:id" element={<Order loggedIn = {loggedIn} orders={orders}/>}/>
          <Route path="/products" element={<ProductsList loggedIn = {loggedIn} products ={products}/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
