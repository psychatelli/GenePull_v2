import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

const LeftNav = () => { 
  return(
    <div className="Card LeftNav_Card">
    <ul className='leftNav'>
    <NavLink activeStyle={{ color: 'Teal' }} to="/profile"><li>  <i class="material-icons">person</i> Posts </li> </NavLink>
    <NavLink activeStyle={{ color: 'Teal' }} to="/profile/galleries"><li>  <i class="material-icons">collections</i> Life Highlights </li> </NavLink>
    <NavLink activeStyle={{ color: 'Teal' }} to="/profile/recipies"><li>  <i class="material-icons">fastfood</i> Recipies </li> </NavLink>
    <NavLink activeStyle={{ color: 'Teal' }} to="/profile/tree"><li>  <i class="material-icons">device_hub</i> Family Tree </li> </NavLink>
    <NavLink activeStyle={{ color: 'Teal' }} to="/profile/health-watch"> <li> <i class="material-icons">local_hospital</i> Health Watch</li></NavLink>
    </ul>
</div>
  )
};



export default LeftNav; 



