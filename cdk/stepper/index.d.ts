import { CdkStepper } from '@angular/cdk/stepper';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';

/** @title A custom CDK stepper without a form */
export declare class CdkCustomStepperWithoutFormExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkCustomStepperWithoutFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkCustomStepperWithoutFormExample, "cdk-custom-stepper-without-form-example", never, {}, {}, never, never, true, never, false>;
}

/** @title A custom CDK linear stepper with forms */
export declare class CdkLinearStepperWithFormExample {
    private readonly _formBuilder;
    isLinear: boolean;
    firstFormGroup: FormGroup<    {
    firstControl: FormControl<string | null>;
    }>;
    secondFormGroup: FormGroup<    {
    secondControl: FormControl<string | null>;
    }>;
    constructor(_formBuilder: FormBuilder);
    toggleLinearity(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkLinearStepperWithFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkLinearStepperWithFormExample, "cdk-linear-stepper-with-form-example", never, {}, {}, never, never, true, never, false>;
}

/** Custom CDK linear stepper component */
export declare class CustomLinearStepper extends CdkStepper {
    selectStepByIndex(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomLinearStepper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomLinearStepper, "example-custom-linear-stepper", never, {}, {}, never, never, true, never, false>;
}

/** Custom CDK stepper component */
export declare class CustomStepper extends CdkStepper {
    selectStepByIndex(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomStepper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomStepper, "example-custom-stepper", never, {}, {}, never, never, true, never, false>;
}

export { }
