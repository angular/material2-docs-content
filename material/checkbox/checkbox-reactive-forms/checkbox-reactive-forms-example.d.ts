import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
/** @title Checkboxes with reactive forms */
export declare class CheckboxReactiveFormsExample {
    private _formBuilder;
    toppings: import("@angular/forms").FormGroup<{
        pepperoni: import("@angular/forms").FormControl<false | null> | import("@angular/forms").FormControl<true | null>;
        extracheese: import("@angular/forms").FormControl<false | null> | import("@angular/forms").FormControl<true | null>;
        mushroom: import("@angular/forms").FormControl<false | null> | import("@angular/forms").FormControl<true | null>;
    }>;
    constructor(_formBuilder: FormBuilder);
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxReactiveFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxReactiveFormsExample, "checkbox-reactive-forms-example", never, {}, {}, never, never, false>;
}
