import React from "react";

function CharacterCard(props) {
    return (
        <div className="container">
            <img src={props.image} className="img-thumbnail" alt="PokemonImage" width="200" height="200"
            onClick={() => props.clickCount(props.id)}/> 
        </div>
    );
};
        
export default CharacterCard;