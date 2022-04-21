import { CdkStepper } from '@angular/cdk/stepper';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
/** @title A custom CDK linear stepper with forms */
export declare class CdkLinearStepperWithFormExample {
    private readonly _formBuilder;
    isLinear: boolean;
    firstFormGroup: import("@angular/forms").FormGroup<{
        firstControl: import("@angular/forms").FormControl<string | null>;
    }>;
    secondFormGroup: import("@angular/forms").FormGroup<{
        secondControl: import("@angular/forms").FormControl<string | null>;
    }>;
    constructor(_formBuilder: FormBuilder);
    toggleLinearity(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkLinearStepperWithFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkLinearStepperWithFormExample, "cdk-linear-stepper-with-form-example", never, {}, {}, never, never, false>;
}
/** Custom CDK linear stepper component */
export declare class CustomLinearStepper extends CdkStepper {
    selectStepByIndex(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomLinearStepper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomLinearStepper, "example-custom-linear-stepper", never, {}, {}, never, never, false>;
}
