import React from "react";
import "./style.css"

function CharacterCard(props) {
    return (
        <div className="container">
            <img src={props.image} id="image" className="img-thumbnail" alt="PokemonImage" width="200" height="200"
            onClick={() => props.clickCounter(props.id)}/> 
        </div>
    );
};
        
export default CharacterCard;