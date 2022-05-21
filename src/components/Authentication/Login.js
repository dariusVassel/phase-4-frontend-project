import React, { useState, useEffect } from 'react'
import { baseUrl, headers } from '../../Globals'
import { useNavigate } from 'react-router-dom'

export default function Login({loginUser, loggedIn}) {
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate()


    useEffect(()=> {
        if (loggedIn){
            navigate("/orders")
        }
      }, [loggedIn])

    function handleUserData(e){
        const name = e.target.name
        const value = e.target.value

        setUserData({
            ...userData,
            [name] : value
        })
    }


    function handleSubmit(e){
        e.preventDefault();
        const username = userData.username
        const password = userData.password
        
        const strongParams = {
            username,
            password
        }

        fetch(baseUrl + '/login',{
            method: "POST",
            headers,
            body: JSON.stringify(strongParams)
        })
        .then(resp => resp.json())
        .then(data => {
            loginUser(data.user)
            localStorage.setItem('jwt', data.token)
            navigate('/orders')
        })

        setUserData({
            username: "",
            password: ""
        })
    }


    return (
    <div>
        <h1>Login:</h1>
        <form onSubmit = {handleSubmit}>
            <div>
            <div>
                <label htmlFor='username'>Username: </label>
                <input type="text"  value={userData.username} name="username" id="username" onChange={handleUserData}></input>
            </div>
            <div>
                <label htmlFor='password ' >Password: </label>
                <input type="password" value={userData.password} name="password" id="password" onChange={handleUserData}></input>
            </div> 
            <input type="submit" value="Login" ></input> 
            </div> 
        </form>
    </div>
  )
}

