import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export interface Animal {
    name: string;
    sound: string;
}
/** @title Select with form field features */
export declare class SelectHintErrorExample {
    animalControl: FormControl;
    selectFormControl: FormControl;
    animals: Animal[];
    static ɵfac: i0.ɵɵFactoryDef<SelectHintErrorExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SelectHintErrorExample, "select-hint-error-example", never, {}, {}, never>;
}
