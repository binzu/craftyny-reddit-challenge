import React from 'react';
import './Item.css';
import {FormattedRelative} from 'react-intl';
import Reddit from '../../utils/Reddit';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      active: false
    };
  }

  handleDelete(id, e) {
    e.preventDefault();
    console.log(id);
    Reddit.deleteFavorite(id);
    this.props.updateHandler(e);
  }

  handleFavorite(e) {
    e.preventDefault();
    if (this.state.active) return;
    Reddit.addFavorite(this.props.item);
    this.props.updateHandler(e);
    this.setState({active:true});
  }

  render() {
    let itemMenu = null;
    if (this.props.itemType === 'favorite') {
      itemMenu = (
        <div className="btn-trash" onClick={(e) => this.handleDelete(this.props.id, e)}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </div>
      )
    } else {
        itemMenu = (
          <div className={this.state.active ? "btn-favorite active" : "btn-favorite"} onClick={this.handleFavorite}>
            <i className="fa fa-heart" aria-hidden="true"></i>
          </div>
        )
    }
    return (
      <div className="item">
        <div className="image-container">
          {itemMenu}
          <img src={this.props.item.url} alt=''/>
        </div>
        <h2>{this.props.item.title}</h2>
        <div className="item-footer">
          <span><i className="fa fa-user" aria-hidden="true"></i> /u/{this.props.item.author} • </span>
          <span><i className="fa fa-clock-o" aria-hidden="true"></i> <FormattedRelative value={Date.now()}/> • </span>
          <span><i className="fa fa-bolt" aria-hidden="true"></i> {this.props.item.score}</span>
        </div>
      </div>
    )
  }
}

export default Item;
