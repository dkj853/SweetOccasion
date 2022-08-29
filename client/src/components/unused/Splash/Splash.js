import { React } from 'react'
import './Splash.css'
import Register from '../../Register/Register'
import Login from '../../Login/Login'


const Splash = () => {
    return (
        <div className='splashDiv'>
          <Register/>
          <Login/>
        </div>
    )
}
export default Splash;