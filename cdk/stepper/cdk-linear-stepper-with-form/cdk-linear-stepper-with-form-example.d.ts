import { CdkStepper } from '@angular/cdk/stepper';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/** @title A custom CDK linear stepper with forms */
export declare class CdkLinearStepperWithFormExample {
    private readonly _formBuilder;
    isLinear: boolean;
    firstFormGroup: UntypedFormGroup;
    secondFormGroup: UntypedFormGroup;
    constructor(_formBuilder: UntypedFormBuilder);
    toggleLinearity(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkLinearStepperWithFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkLinearStepperWithFormExample, "cdk-linear-stepper-with-form-example", never, {}, {}, never, never>;
}
/** Custom CDK linear stepper component */
export declare class CustomLinearStepper extends CdkStepper {
    selectStepByIndex(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomLinearStepper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomLinearStepper, "example-custom-linear-stepper", never, {}, {}, never, never>;
}
