import React, { Component } from "react";
import ItemList from '../../components/ItemList/ItemList';

class Home extends Component {
  render() {
    return (
      <div>
        <ItemList items={this.props.items} itemType='post' updateHandler={this.props.updateHandler} />
      </div>
    );
  }
}

export default Home;
