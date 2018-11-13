import React, { Component } from 'react';
import Card from './Card';

export default class CardList extends Component {
  constructor(props) {
    super(props);

    this.deleteCard = this.deleteCard.bind(this);
  }
  deleteCard(id) {    
    this.props.deleteCard(id);
  }

  render() {
    return (
      <div className="card-columns">
        {this.props.cards.map((card) => <Card key={card.id} {...card} deleteCard={this.deleteCard} />)}
      </div>
    );
  }
}
