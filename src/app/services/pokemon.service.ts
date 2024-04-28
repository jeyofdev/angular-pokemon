import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import {
    DetailsPokemon,
    DetailsPokemonResponse,
    PokemomResponse,
    Pokemon,
} from '../models/pokemon.type';

@Injectable({
    providedIn: 'root',
})
export class PokemonService {
    baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';

    constructor(private httpClient: HttpClient) {}

    getPokemons(limit: number): Observable<DetailsPokemon[]> {
        return this.httpClient
            .get<PokemomResponse>(`${this.baseUrl}?limit=${limit}`)
            .pipe(
                map((pokemon) => pokemon.results),
                switchMap((resList) => {
                    const pokemonList = resList.map((pokemon: Pokemon) =>
                        this.httpClient
                            .get<DetailsPokemonResponse>(pokemon.url)
                            .pipe(
                                map((currentPok: DetailsPokemonResponse) => ({
                                    name: pokemon.name,
                                    imgUrl: currentPok.sprites.front_default,
                                }))
                            )
                    );

                    return forkJoin(pokemonList);
                })
            );
    }
}
