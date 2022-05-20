import React, { useState } from 'react'

export default function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [signupInfo, setSignupInfo] = useState(false)

    function handleSubmit(e){
        e.preventDefault();

        const strongParams = {
            user: {
                username,
                password
            }
        }

        fetch('http://localhost:3001')
    }

    function toggleForm() {
        setSignupInfo(!signupInfo);
    }

    return (
    <div>
        <h1>Create Account:</h1>
        <form>
            {!signupInfo ?
            <div>
            <div>
                <label for='username'>Username: </label>
                <input type="text"  value="username" name="username" id="username" onChange={e => setUsername(e.target.value)}></input>
            </div>
            <div>
                <label for='password ' >Password: </label>
                <input type="text" value="password" name="password" id="password" onChange={e => setPassword(e.target.value)}></input>
            </div> 
            </div>
            : 
            <div>
            <div>
                <label for='first_name' >First Name: </label>
                <input type="text" value="first_name" name="first_name" id="first_name" onChange={e => setPassword(e.target.password)}></input>
            </div> 
            <div>
                <label for='last_name' >Last Name: </label>
                <input type="text" value="last_name" name="last_name" id="last_name" onChange={e => setPassword(e.target.password)}></input>
            </div> 
            <div>
                <label for='bio'>Bio: </label>
                <input type="text" value="bio" name="bio" id="bio" onChange={e => setPassword(e.target.password)}></input>
            </div> 
            <div>
                <label for='phone_number'>Phone Number: </label>
                <input type="text" value="phone_number" name="phone_number" id="phone_number" onChange={e => setPassword(e.target.password)}></input>
            </div> 
            <div>
                <label for='email'>Email: </label>
                <input type="text" value="email" name="email" id="email" onChange={e => setPassword(e.target.password)}></input>
            </div> 
            <div>
                <label for='email'>Country: </label>
                <input type="text" value="country" name="country" id="country" onChange={e => setPassword(e.target.password)}></input>
            </div> 
            <div>
                <label for='image_url'>Profile Picture: </label>
                <input type="text" value="image_url" name="image_url" id="image_url" onChange={e => setPassword(e.target.password)}></input>
            </div> 
            <input type="submit" value="Create Account" onSubmit = {handleSubmit}></input> 
            </div> }
        </form>
        {!signupInfo?<button onClick ={toggleForm}>Continue</button>:<button onClick ={toggleForm}>Back</button>}
    </div>
  )
}
