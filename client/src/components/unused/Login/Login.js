import { React, useState } from 'react'
import './Login.css'
import { axios } from 'axios'


const Login = () => {
    const [userState, setUserState] = useState({
        username: "",
        password: "",
        
        //this could be many things
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserState({ ...userState, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitty");
        axios.post('/user/Login', userState)
            .then((response) => {
                console.log(response);
                // This is where we want to take the server
                // response and do something with the state
                // But we don't know that quite yet
            })

    }
    return (
        <div className='LoginDiv'>
            <form id='LoginForm'>
                <h1>Login Here</h1>

                <input type="text" placeholder='username' name='username' onChange={handleChange} required></input>
                <br />
                <input type="password" placeholder='password' name='password' onChange={handleChange} required></input>
                <br />
                <button id="submit" name="submit" type='submit' onClick={handleSubmit}>Login</button>

            </form>
        </div>
    )
}
export default Login;