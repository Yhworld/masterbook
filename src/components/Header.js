import React from 'react'
import style from '../App.css'
import {Link} from "react-router-dom"
let headerPic = require("../Woman reading (1).gif")


const Header = () => {
  return (
    <div className='header' style={style}>
        <div className='headertext'>
            <p>
                Books of 
                <br />
                all kinds of <span>genres</span>
            </p>
            <p className='quotes'>“Fairy tales are more than true: not because
                <br />
                 they tell us that dragons exist, 
                 <br />
                 but because they tell us that dragons 
                 <br />
                 can be beaten.”
           <sub>― Neil Gaiman, Coraline </sub>
           </p>
            <div className='search-box'>
            <Link to="/search" className='start'>Let's Explore</Link>
            </div>
            <br />
        </div>
    <div className='headerImage'>
        <img src={headerPic} alt={headerPic}></img>
    </div>
    </div>
  )
}
export default Header