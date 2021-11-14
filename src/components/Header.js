import React from 'react'
import '../Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import IconButton from '@mui/material/IconButton';


function Header() {

   
    return (
        <div className="header">
         <IconButton>
         <PersonIcon fontSize= "large" className="header__icon"/>
         </IconButton>

        <img
         className="header_logo"
         src="https://cdn2.iconfinder.com/data/icons/social-media-icons-23/800/tinder-512.png"alt=""></img>

        <IconButton>
        <ForumRoundedIcon  fontSize= "large" className="header__icon"/>
         </IconButton>
 
        </div>

        
    )
}

export default Header
