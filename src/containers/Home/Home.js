import React, { Component } from "react";
import ItemList from '../../components/ItemList/ItemList';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <ItemList items={this.props.items} updateHandler={this.props.updateHandler} />
      </div>
    );
  }
}

export default Home;
