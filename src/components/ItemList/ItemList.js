import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';


class ItemList extends React.Component {
  render() {
    return (
      <div className="ItemList">
        {
          this.props.items.map((item, index) =>
            <Item key={index} id={index} item={item} itemType={this.props.itemType} updateHandler={this.props.updateHandler}/>
          )
        }
      </div>
    )
  }
}

export default ItemList;
