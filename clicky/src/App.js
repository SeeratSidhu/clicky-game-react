import React, { Component } from 'react';
import Character from "./components/CharacterCard/index";
import Header from "./components/Header/index";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper/Wrapper";

class App extends Component {
  state = {
    characters,
    score: 0,
    topscore: 0
  };

  endGame() {
    //set new top score 
    if (this.state.score > this.state.topscore) {
      this.setState({ topscore: this.state.score });
    }
    
    this.state.characters.forEach(element => {
      element.count = 0;
    });
    alert(`Wrong guess \nScore: ${this.state.score}`);
    this.setState({score: 0});
    this.shuffleCharacters();
    console.log(this.state.score);
    return true;
  };

  clickCounter = id => {
    
    for (var i = 0; i< this.state.characters.length; i ++) {
      console.log(id + "and" + this.state.characters[i].id);
      if (this.state.characters[i].id === id) {
        
        if (characters[i].count === 0) {
          characters[i].count = characters[i].count + 1;
          this.setState({score: this.state.score + 1}, function() {
            console.log(this.state.score);
          });
          this.shuffleCharacters();
          return true;
        } else{
          this.endGame();
        }
      }
      
    }
      
  };

  shuffleCharacters() {
    this.setState({characters: this.shuffle(this.state.characters)});
    console.log(this.state.characters);
  };

  shuffle = a => {
    var j, x;
    for (var i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} topscore={this.state.topscore}>CLICKY GAME</Header>
        {this.state.characters.map(element =>
          <Character
            key={element.id}
            id={element.id}
            image={element.image}
            clickCounter={this.clickCounter} />
        )}

      </Wrapper>
    )
  }

};


export default App;
