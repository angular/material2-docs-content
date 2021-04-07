import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
interface Pokemon {
    value: string;
    viewValue: string;
}
interface PokemonGroup {
    disabled?: boolean;
    name: string;
    pokemon: Pokemon[];
}
/** @title Select with option groups */
export declare class SelectOptgroupExample {
    pokemonControl: FormControl;
    pokemonGroups: PokemonGroup[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectOptgroupExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectOptgroupExample, "select-optgroup-example", never, {}, {}, never, never>;
}
export {};
