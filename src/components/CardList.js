import React, { Component } from 'react';
import Card from './Card'

export default class CardList extends Component {
  deleteCard = (id) => {    
    this.props.deleteCard(id);
  };

  render() {
    return (
      <div className="card-columns">
        {this.props.cards.map((card, index) => <Card key={card.id} {...card} deleteCard={this.deleteCard} />)}
      </div>
    );
  }
}
