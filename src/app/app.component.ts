import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { Pokemon } from './models/pokemon.type';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    pokemons$!: Observable<Pokemon[]>;

    constructor(private pokemonService: PokemonService) {}

    ngOnInit(): void {
        this.pokemons$ = this.pokemonService.getPokemons(3);
    }
}
