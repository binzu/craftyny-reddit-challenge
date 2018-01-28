import React from 'react';
import './NavBar.css';

export class NavBar extends React.Component {
  render() {
    return (
      <nav className="NavBar">
        <ul>
            <li>
              <a href='/'>
                <i className="fa fa-reddit" aria-hidden="true"></i> Home
              </a>
            </li>
            <li>
              <a href='/favorites'>
                <i className="fa fa-heart" aria-hidden="true"></i> Favorites ({this.props.favorites.length})
              </a>
            </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;
