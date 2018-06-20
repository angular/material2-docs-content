import { FormControl } from '@angular/forms';
export interface Pokemon {
    value: string;
    viewValue: string;
}
export interface PokemonGroup {
    disabled?: boolean;
    name: string;
    pokemon: Pokemon[];
}
/** @title Select with option groups */
export declare class SelectOptgroupExample {
    pokemonControl: FormControl;
    pokemonGroups: PokemonGroup[];
}
