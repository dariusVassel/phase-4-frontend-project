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
import ContactList from './components/Contacts/ContactList';
import NewOrder from './components/Orders/NewOrder';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [orders, setOrders] = useState([])
  const [products, setProducts] = useState([])
  const [contacts, setContacts] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [loggedIn, setLoggedIn] =useState(false);

  const [individualOrder, setIndividualOrder] = useState(
  {
    id: 10,
    PO: 2568,
    cases: 1500,
    kilos: 6,
    price_kg: 4,
    price_total: null,
    product_id: 49,
    contact_id: 920,
    user_id: 9,
    payment_id: 89,
    packing_id: 244,
    port_from: "Cochin",
    port_to: "Valencia",
    selected_size: "5/7",
    selected_freeze: "Blocks",
    selected_glaze: "20%",
    catching_method: "Trawler",
    shipment_date: "2020-03-14",
    PO_date: "2019-11-25",
    order_ref_number: 1577,
    order_status: "Complete",
    total_kilos: 9000,
    specifications: null,
    product: {
        id: 49,
        name: "Cuttlefish Whole Cleaned",
        image_url: "https://img1.exportersindia.com/product_images/bc-full/dir_97/2888653/frozen-whole-cleaned-baby-octopus-2186493.jpg",
        specification: "Frozen Whole Cleaned"
    },
    contact: {
        id: 920,
        first_name: "Rohit",
        last_name: "Khetalpar",
        phone: "9879580340",
        email: "rohitkhetalpar@gmail.com",
        company: "Raunaq/JJ",
        notes: null,
        country: "India",
        user_designation: "seller"
    }
})

  function toggleSideBar(e){
    setIsOpen(!isOpen)
  }

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
          setCurrentUser(user)
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
      // console.log(data)
      setProducts(data)
  })}

  function handleGetContacts(e){
    fetch(baseUrl + '/contacts', {
      headers: {
        ...headers,
        ...getToken()
      }
    })
    .then(resp => resp.json())
    .then(data => {
      // console.log(data)
      setContacts(data)
  })}

  function handleGetOrders(e){
    fetch(baseUrl + '/orders', {
      headers: {
        ...headers,
        ...getToken()
      }
    })
    .then(resp => resp.json())
    .then(data => {
      // console.log(data)
      setOrders(data)
  })}

  function handleDeleteOrder(id) {
    fetch(baseUrl + `/orders/${id}`, {
      method: "DELETE",
      headers: {
        ...headers,
        ...getToken()
      }
    }).then((r) => {
      if (r.ok) {
        setOrders((orders) =>
          orders.filter((order) => order.id !== id)
        );
      }
    });
  }




  function handleGetOrder(data){
    console.log("before", data)
    setIndividualOrder(data)
    console.log("after", individualOrder)
  }

  




  return (
    <div className="App">
      <Router>
        <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} loggedIn ={loggedIn} logOutUser={logOutUser} currentUser={currentUser}/>
        <Navbar toggleSideBar={toggleSideBar} loggedIn ={loggedIn} logOutUser={logOutUser} currentUser={currentUser} handleGetProducts={handleGetProducts} handleGetContacts={handleGetContacts} handleGetOrders={handleGetOrders}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup loginUser= {loginUser} loggedIn = {loggedIn} handleGetOrders={handleGetOrders}/>}/>
          <Route path="/login" element={<Login loginUser= {loginUser} loggedIn = {loggedIn} handleGetOrders={handleGetOrders}/>}/>
          <Route path="/orders" element={<OrdersList  loggedIn = {loggedIn} orders={orders} handleDeleteOrder={handleDeleteOrder} currentUser ={currentUser} handleGetOrder={handleGetOrder} />} />
          <Route path="/new_order" element={<NewOrder loggedIn = {loggedIn} contacts={contacts} currentUser={currentUser} handleGetOrders={handleGetOrders}/>}/>
          <Route path="/orders/:id" element={<Order loggedIn = {loggedIn} order={individualOrder} orders={orders} handleDeleteOrder={handleDeleteOrder} currentUser ={currentUser} handleGetOrders={handleGetOrders}/>}/>
          <Route path="/products" element={<ProductsList loggedIn = {loggedIn} products ={products}/>}/>
          <Route path="/contacts" element={<ContactList loggedIn = {loggedIn} contacts={contacts}/>}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
