import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class LeftNav extends Component {
  render() {
    return (
      <div className="Card LeftNav_Card">
          <ul className='leftNav'>
              <NavLink activeStyle={{ color: 'Teal' }} to="/profile"><li>  <i class="material-icons">person</i> Posts </li> </NavLink>
              <NavLink activeStyle={{ color: 'Teal' }} to="/galleries"><li>  <i class="material-icons">collections</i> Life Highlights </li> </NavLink>
              <NavLink activeStyle={{ color: 'Teal' }} to="/recipies"><li>  <i class="material-icons">fastfood</i> Recipies </li> </NavLink>
              <NavLink activeStyle={{ color: 'Teal' }} to="/tree"><li>  <i class="material-icons">device_hub</i> Family Tree </li> </NavLink>
              <NavLink activeStyle={{ color: 'Teal' }} to="/health-watch"> <li> <i class="material-icons">local_hospital</i> Health Watch</li></NavLink>
          </ul>
      </div>
    )
  }
}
