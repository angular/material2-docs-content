import { CdkStepper } from '@angular/cdk/stepper';
import * as i0 from '@angular/core';
import * as _angular_forms from '@angular/forms';

/** @title A custom CDK stepper without a form */
declare class CdkCustomStepperWithoutFormExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkCustomStepperWithoutFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkCustomStepperWithoutFormExample, "cdk-custom-stepper-without-form-example", never, {}, {}, never, never, true, never>;
}
/** Custom CDK stepper component */
declare class CustomStepper extends CdkStepper {
    selectStepByIndex(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomStepper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomStepper, "example-custom-stepper", never, {}, {}, never, never, true, never>;
}

/** @title A custom CDK linear stepper with forms */
declare class CdkLinearStepperWithFormExample {
    private readonly _formBuilder;
    isLinear: boolean;
    firstFormGroup: _angular_forms.FormGroup<{
        firstControl: _angular_forms.FormControl<string | null>;
    }>;
    secondFormGroup: _angular_forms.FormGroup<{
        secondControl: _angular_forms.FormControl<string | null>;
    }>;
    toggleLinearity(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkLinearStepperWithFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkLinearStepperWithFormExample, "cdk-linear-stepper-with-form-example", never, {}, {}, never, never, true, never>;
}
/** Custom CDK linear stepper component */
declare class CustomLinearStepper extends CdkStepper {
    selectStepByIndex(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomLinearStepper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomLinearStepper, "example-custom-linear-stepper", never, {}, {}, never, never, true, never>;
}

export { CdkCustomStepperWithoutFormExample, CdkLinearStepperWithFormExample, CustomLinearStepper, CustomStepper };
