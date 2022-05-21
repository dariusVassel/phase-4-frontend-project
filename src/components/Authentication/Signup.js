import React, { useState } from 'react'
import { baseUrl, headers } from '../../Globals'

export default function Signup({loginUser}) {
    const [signupInfo, setSignupInfo] = useState(false)
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        bio: "",
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        country: "",
        image_url: ""
    })

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
        
        const strongParams = {
            user: {
                username: userData.username,
                password: userData.password,
                bio: userData.bio,
                first_name: userData.first_name,
                last_name: userData.last_name,
                phone: userData.phone,
                email: userData.email,
                country: userData.country,
                image_url: userData.image_url
            }
        }

        fetch(baseUrl + '/users',{
            method: "POST",
            headers,
            body: JSON.stringify(strongParams)
        })
        .then(resp => resp.json())
        .then(data => {
            loginUser(data.user)
            localStorage.setItem('jwt', data.token)
        })

        setUserData({
            username: "",
            password: "",
            bio: "",
            first_name: "",
            last_name: "",
            phone: "",
            email: "",
            country: "",
            image_url: ""
        })
    }

    function toggleForm() {
        setSignupInfo(!signupInfo);
    }

    return (
    <div>
        <h1>Create Account:</h1>
        <form onSubmit = {handleSubmit}>
            {!signupInfo ?
            <div>
            <div>
                <label htmlFor='username'>Username: </label>
                <input type="text"  value={userData.username} name="username" id="username" onChange={handleUserData}></input>
            </div>
            <div>
                <label htmlFor='password ' >Password: </label>
                <input type="password" value={userData.password} name="password" id="password" onChange={handleUserData}></input>
            </div> 
            </div>
            : 
            <div>
            <div>
                <label htmlFor='first_name' >First Name: </label>
                <input type="text" value={userData.first_name} name="first_name" id="first_name" onChange={handleUserData}></input>
            </div> 
            <div>
                <label htmlFor='last_name' >Last Name: </label>
                <input type="text" value={userData.last_name} name="last_name" id="last_name" onChange={handleUserData}></input>
            </div> 
            <div>
                <label htmlFor='bio'>Bio: </label>
                <input type="text" value={userData.bio} name="bio" id="bio" onChange={handleUserData}></input>
            </div> 
            <div>
                <label htmlFor='phone'>Phone Number: </label>
                <input type="text" value={userData.phone} name="phone" id="phone" onChange={handleUserData}></input>
            </div> 
            <div>
                <label htmlFor='email'>Email: </label>
                <input type="text" value={userData.email} name="email" id="email" onChange={handleUserData}></input>
            </div> 
            <div>
                <label htmlFor='country'>Country: </label>
                <input type="text" value={userData.country} name="country" id="country" onChange={handleUserData}></input>
            </div> 
            <div>
                <label htmlFor='image_url'>Profile Picture: </label>
                <input type="text" value={userData.country} name="image_url" id="image_url" onChange={handleUserData}></input>
            </div> 
            <input type="submit" value="Create Account" ></input> 
            </div> 
        }
        </form>
        {!signupInfo?<button onClick ={toggleForm}>Continue</button>:<button onClick ={toggleForm}>Back</button>}
    </div>
  )
}
