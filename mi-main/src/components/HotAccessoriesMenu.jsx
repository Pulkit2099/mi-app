import React from 'react'
import "../styles/HotAccessoriesMenu.css"
import { Link } from 'react-router-dom'

const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
<Link className='HotAccessoriesLink' to="/music">Music Store</Link>
<Link className='HotAccessoriesLink' to="/music">Smart Devices</Link>
<Link className='HotAccessoriesLink' to="/music">Home</Link>
<Link className='HotAccessoriesLink' to="/music">Lifestyle</Link>   
<Link className='HotAccessoriesLink' to="/music">Mobile Accessories</Link> 
   
   
    </div>
  )
}

export default HotAccessoriesMenu
