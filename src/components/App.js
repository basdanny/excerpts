import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import AddCard from './AddCard';
import CardList from './CardList';
import Footer from './Footer';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { /* fallback state */
      cards: [{ id: '0', title: 'Ooops! Something got wrong.', text: 'Stub. Appears when API not available' }]
    };

    this.addNewCard = this.addNewCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidMount() {
    //init state
    axios.get('https://api.icndb.com/jokes/random/3')
      .then(
        (response) => {
          let randomCards = response.data.value.map(joke => (
            { id: '' + joke.id, title: 'Norris Joke ' + joke.id, text: joke.joke }
          ));
          this.setState({ cards: randomCards });
        },
        (error) => { console.log(error); }
      );
  }

  addNewCard(cardInfo) {
    cardInfo.id = Math.random().toString(36).substr(2, 9);
    this.setState(prevState => {
      return { cards: [].concat(cardInfo, prevState.cards) };
    });
  }

  deleteCard(id) {
    this.setState(prevState => {
      return { cards: prevState.cards.filter(elm => elm.id !== id) };
    });
  }

  render() {
    return (
      <div>
        <Header />
        <AddCard onSubmit={this.addNewCard} />
        <main role="main" className="container pt-4"><CardList deleteCard={this.deleteCard} cards={this.state.cards} /></main>
        <Footer />
      </div>
    );
  }
}

export default App;
