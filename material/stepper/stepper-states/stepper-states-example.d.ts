import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Stepper with customized states
 */
export declare class StepperStatesExample {
    private _formBuilder;
    firstFormGroup: import("@angular/forms").FormGroup<{
        firstCtrl: import("@angular/forms").FormControl<string | null>;
    }>;
    secondFormGroup: import("@angular/forms").FormGroup<{
        secondCtrl: import("@angular/forms").FormControl<string | null>;
    }>;
    constructor(_formBuilder: FormBuilder);
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperStatesExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperStatesExample, "stepper-states-example", never, {}, {}, never, never, false>;
}
