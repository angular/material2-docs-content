import { FormControl } from '@angular/forms';
export interface Animal {
    name: string;
    sound: string;
}
/** @title Select with form field features */
export declare class SelectHintErrorExample {
    animalControl: FormControl;
    selectFormControl: FormControl;
    animals: Animal[];
}
