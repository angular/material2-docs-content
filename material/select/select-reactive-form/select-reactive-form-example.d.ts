import { FormControl, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
interface Food {
    value: string;
    viewValue: string;
}
interface Car {
    value: string;
    viewValue: string;
}
/**
 * @title Select in a reactive form
 */
export declare class SelectReactiveFormExample {
    form: FormGroup;
    foods: Food[];
    cars: Car[];
    foodControl: FormControl;
    carControl: FormControl;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectReactiveFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectReactiveFormExample, "select-reactive-form-example", never, {}, {}, never, never>;
}
export {};
