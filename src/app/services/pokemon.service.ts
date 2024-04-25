import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PokemomResponse, Pokemon } from '../models/pokemon.type';

@Injectable({
    providedIn: 'root',
})
export class PokemonService {
    baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';

    constructor(private httpClient: HttpClient) {}

    getPokemons(limit: number): Observable<Pokemon[]> {
        return this.httpClient
            .get<PokemomResponse>(`${this.baseUrl}?limit=${limit}`)
            .pipe(map((pokemon) => pokemon.results));
    }
}
