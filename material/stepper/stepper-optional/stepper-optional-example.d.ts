import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Stepper with optional steps
 */
export declare class StepperOptionalExample {
    private _formBuilder;
    firstFormGroup: import("@angular/forms").FormGroup<{
        firstCtrl: import("@angular/forms").FormControl<string | null>;
    }>;
    secondFormGroup: import("@angular/forms").FormGroup<{
        secondCtrl: import("@angular/forms").FormControl<string | null>;
    }>;
    isOptional: boolean;
    constructor(_formBuilder: FormBuilder);
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperOptionalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperOptionalExample, "stepper-optional-example", never, {}, {}, never, never>;
}
