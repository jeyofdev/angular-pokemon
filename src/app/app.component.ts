import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { Pokemon } from './models/pokemon.type';

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
        this.pokemonService.getPokemons(3).subscribe((pokemons: Pokemon[]) => {
            this.pokemons = pokemons;
            this.pokemonsLength = this.pokemons.length;
        });
    }
}
