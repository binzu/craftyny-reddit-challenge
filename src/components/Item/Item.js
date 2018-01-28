import React from 'react';
import './Item.css';
import {FormattedRelative} from 'react-intl';
import Reddit from '../../utils/Reddit';


class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
  }

  handleFavoriteClick(e) {
    e.preventDefault();
    Reddit.addFavorite(this.props.item);
    this.props.updateHandler(e);
  }

  render() {
    return (
      <div className="item">
        <div className="image-container">
          <div className="btn-favorite" onClick={this.handleFavoriteClick}><i className="fa fa-heart" aria-hidden="true"></i></div>
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
