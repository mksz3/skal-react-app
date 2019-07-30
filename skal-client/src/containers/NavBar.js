import React from 'react'
import '../App.css';
import UserInfo from '../components/UserInfo'
import Favorites from './Favorites'
import DrinkCardsContainer from './DrinkCardsContainer'

class NavBar extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div>
        <nav>
          <ul id = "nav-bar" >
            <li> <button href='#' className="nav-bar-button" onClick={this.props.handleHomePage}> Home </button>
            </li>
            <li>
            <button href='#' className="nav-bar-button" onClick={this.props.handleProfileClick}> Profile </button>
            </li>
            <li> <button href='#' className="nav-bar-button" onClick={this.props.handleFavoritesClick}> Favorites </button>
            </li>
            <li> <button href='#' className="nav-bar-button" onClick={this.props.handleCocktailsClick}> Cocktails </button>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar;
