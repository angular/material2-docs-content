import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<SelectOptgroupExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SelectOptgroupExample, "select-optgroup-example", never, {}, {}, never>;
}
