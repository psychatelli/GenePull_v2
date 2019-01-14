import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class LeftNav extends Component {
  render() {
    return (
      <div className="Card LeftNav_Card">
          <ul className='leftNav'>
              <Link to="/#"><li>  <i class="material-icons">person</i> Life Posts (might remove this. Life highlights are all posts) </li> </Link>
              <Link to="/galleries"><li>  <i class="material-icons">collections</i> Life Highlights </li> </Link>
              <Link to="/recipies"><li>  <i class="material-icons">fastfood</i> Recipies </li> </Link>
              <Link to="/#"><li>  <i class="material-icons">device_hub</i> Family Tree </li> </Link>
              <Link to="/health-watch"> <li> <i class="material-icons">local_hospital</i> Health Watch</li></Link>
          </ul>
      </div>
    )
  }
}
