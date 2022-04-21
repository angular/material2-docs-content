import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
interface Animal {
    name: string;
    sound: string;
}
/** @title Select with form field features */
export declare class SelectHintErrorExample {
    animalControl: FormControl<Animal | null>;
    selectFormControl: FormControl<string | null>;
    animals: Animal[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectHintErrorExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectHintErrorExample, "select-hint-error-example", never, {}, {}, never, never, false>;
}
export {};
