export type Pokemon = {
    name: string;
    url: string;
};

export type PokemomResponse = {
    results: Pokemon[];
};

export type DetailsPokemon = { name: string; imgUrl: string };

export type DetailsPokemonResponse = {
    forms: Pokemon[];
    sprites: sprites;
};

export type sprites = {
    front_default: string;
};
