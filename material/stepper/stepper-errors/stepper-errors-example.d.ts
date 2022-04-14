import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Stepper that displays errors in the steps
 */
export declare class StepperErrorsExample {
    private _formBuilder;
    firstFormGroup: import("@angular/forms").FormGroup<{
        firstCtrl: import("@angular/forms").FormControl<string | null>;
    }>;
    secondFormGroup: import("@angular/forms").FormGroup<{
        secondCtrl: import("@angular/forms").FormControl<string | null>;
    }>;
    constructor(_formBuilder: FormBuilder);
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperErrorsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperErrorsExample, "stepper-errors-example", never, {}, {}, never, never>;
}
