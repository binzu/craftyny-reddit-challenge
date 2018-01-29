import React, { Component } from "react";
import ItemList from '../../components/ItemList/ItemList';

class Favorites extends Component {
  render() {
    return (
      <div>
          <ItemList items={this.props.items} itemType='favorite' updateHandler={this.props.updateHandler} />
      </div>
    );
  }
}

export default Favorites;
