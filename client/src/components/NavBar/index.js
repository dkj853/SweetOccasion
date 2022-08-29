import { React } from 'react'
import "../NavBar/navBar.css"
// import Bootstrap from "bootstrap"


const NavBar = () => {
    return (

        <div className="nav_bar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Items">Items</a></li>
                <li><a href="/Order">Order</a></li>
                <li><a href="/Contact">Contact</a></li>
                {/* <li><a href="/Comments">Comments</a></li> */}
           
               
            </ul>
        </div>




    )
}

export default NavBar