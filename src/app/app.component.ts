import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { PokemomResponse, Pokemon } from './models/pokemon.type';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    pokemons!: Pokemon[];
    pokemonsLength!: number;

    constructor(private pokemonService: PokemonService) {}

    ngOnInit(): void {
        this.pokemonService
            .getPokemons(3)
            .subscribe((pokemonResponse: PokemomResponse) => {
                this.pokemons = pokemonResponse.results;
                this.pokemonsLength = this.pokemons.length;
            });
    }
}
