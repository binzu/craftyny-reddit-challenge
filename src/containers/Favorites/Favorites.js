import React, { Component } from "react";
import ItemList from '../../components/ItemList/ItemList';

class Favorites extends Component {
  render() {
    return (
      <div>
        <h2>Favorites</h2>
          <ItemList items={this.props.items} updateHandler={this.props.updateHandler} />
      </div>
    );
  }
}

export default Favorites;
