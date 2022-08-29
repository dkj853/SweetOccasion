import { React, useState } from 'react'
import './Register.css'
import { axios } from 'axios'


const Register = () => {
    const [userState, setUserState] = useState({
        username: "",
        password: "",
        confirm: ""
        //this could be many things
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserState({ ...userState, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitty");
        axios.post('/user/register', userState)
            .then((response) => {
                console.log(response);
                // This is where we want to take the server
                // response and do something with the state
                // But we don't know that quite yet
            })

    }
    return (
        <div className='RegisterDiv'>
            <form id='registerForm'>
                <h1>Register Here</h1>

                <input type="text" placeholder='username' name='username' onChange={handleChange} required></input>
                <br />
                <input type="password" placeholder='password' name='password' onChange={handleChange} required></input>
                <br />
                <input type="confirm" placeholder='confirm' name='confirm' onChange={handleChange} required></input>
                <br />
                <button id="submit" name="submit" type='submit' onClick={handleSubmit}>Register</button>

            </form>
        </div>
    )
}
export default Register;