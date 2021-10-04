import { mockPokemonData } from "../mock/pokeData";
import React, { Component } from "react";

export class PokeCard extends Component {
  render() {
    return (
      <div className="card-item">
        <h2>{mockPokemonData.name}</h2>
        <img src={mockPokemonData.sprites.front_default} alt="pokemon" />
        <br />
        <img src={mockPokemonData.sprites.front_shiny} alt="pokemon" />
        <br />
        <a href={mockPokemonData.video} target="_blank">
          Video
        </a>
      </div>
    );
  }
}

export default PokeCard;
