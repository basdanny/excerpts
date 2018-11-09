import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import AddCard from './AddCard'
import CardList from './CardList';
import Footer from './Footer';
import axios from 'axios'

class App extends Component {
  
  state = {
    cards: [
      { title: '', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' },
      { title: 'title B', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia ' },
      { title: 'http://google.com', text: '' },
      { title: 'title F', text: 'Phasellus quis sem ullamcorper risus ornare malesuada. Fusce nunc massa, fermentum id ex nec' },
    ]
  };

  constructor(props) {
    super(props);

    //init state
    axios.get('http://api.icndb.com/jokes/random/12')
            .then(
                (response) => {
                  let randomCards = response.data.value.map(joke => (
                    {id: joke.id, title: 'Norris Joke '+joke.id, text: joke.joke }
                  ));                                    
                  this.setState({ cards: randomCards });
                },
               	(error) => { console.log(error) }
            );
  }

  addNewCard = cardInfo => {
    cardInfo.id = Math.random().toString(36).substr(2, 9);
    this.setState(prevState => {
      return { cards: [].concat(cardInfo, prevState.cards) };
    });
  };

  deleteCard = id => {    
    this.setState(prevState => {
      return { cards: prevState.cards.filter(elm => elm.id !== id) };
    });
  };

  render() {
    return ([      
        <Header></Header>,
        <AddCard onSubmit={this.addNewCard}></AddCard>,
        <main role="main" className="container pt-4"><CardList deleteCard={this.deleteCard} cards={this.state.cards}></CardList></main>,
        <Footer></Footer>
    ]
    );
  }
}

export default App;
