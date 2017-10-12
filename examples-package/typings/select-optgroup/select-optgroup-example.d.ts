import { FormControl } from '@angular/forms';
/** @title Select with option groups */
export declare class SelectOptgroupExample {
    pokemonControl: FormControl;
    pokemonGroups: ({
        name: string;
        pokemon: {
            value: string;
            viewValue: string;
        }[];
    } | {
        name: string;
        disabled: boolean;
        pokemon: {
            value: string;
            viewValue: string;
        }[];
    })[];
}
