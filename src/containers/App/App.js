import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import Home from "../Home/Home";
import Favorites from "../Favorites/Favorites";

// import logo from './logo.svg';
import './App.css';
import Reddit from '../../utils/Reddit';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      favorites: Reddit.getFavorites()
    };
    this.updateHandler = this.updateHandler.bind(this);
  }

  updateHandler(e) {
    e.preventDefault();
    this.setState({ favorites: Reddit.getFavorites()});
    console.log('items:', this.state.items);
    console.log('favorites:', this.state.favorites);
  }

  componentDidMount() {
    Reddit.getPosts()
      .then(res => {
        const items = res.data.children.map(obj => obj.data);
        this.setState({ items:  items});
        this.setState({ favorites: Reddit.getFavorites()});
      });
  }

  render() {
    return (
    <IntlProvider locale="en">
      <div className="App">
        <Router>
            <div className="content">
              <nav className="NavBar">
                <ul>
                    <li>
                      <Link to='/'>
                        <i className="fa fa-reddit" aria-hidden="true"></i> Home
                      </Link>
                    </li>
                    <li>
                      <Link to='/favorites'>
                        <i className="fa fa-heart" aria-hidden="true"></i> Favorites ({this.state.favorites.length})
                      </Link>
                    </li>
                </ul>
              </nav>
              <Switch>
                <Route exact path="/" render={()=><Home items={this.state.items} updateHandler={this.updateHandler}/>}/>
                <Route render={() => <Favorites items={this.state.favorites} updateHandler={this.updateHandler}/>} />
              </Switch>
            </div>
          </Router>
      </div>
    </IntlProvider>
    );
  }
}

export default App;
