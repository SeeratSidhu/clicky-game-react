import React, { Component } from 'react';
import Character from "./components/CharacterCard/index";
import Score from "./components/Header/index";
import characters from "./characters.json";
import Wrapper from"./components/Wrapper/Wrapper";

class App extends Component {
  state = {
    characters
  };

  render() {
    return (
      <Wrapper>
        {this.state.characters.map(element => 
          <Character
          key={element.id}
          image={element.image} />
        )}

      </Wrapper>
    )
  }

};


export default App;
