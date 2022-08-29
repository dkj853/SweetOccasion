import React from 'react'
// import './Media/style.css'
import facebook from './icons/facebook.png'
import twitter from './icons/twitter.png'
import instagram from './icons/instagram.png'




const Media = () => {
    return (
        <div className="icon-bar">

           <img src={facebook} style={{ height: 40, width: 40 }}/>
           <img src={twitter} style={{ height: 40, width: 40 }}/>
           <img src={instagram} style={{ height: 40, width: 40 }}/>
           
        </div>

    )
}

export default Media