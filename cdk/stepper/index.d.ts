import { CdkStepper } from '@angular/cdk/stepper';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i3 from '@angular/cdk/stepper';
import * as i4 from '@angular/common';
import * as i5 from '@angular/forms';

/** @title A custom CDK stepper without a form */
export declare class CdkCustomStepperWithoutFormExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkCustomStepperWithoutFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkCustomStepperWithoutFormExample, "cdk-custom-stepper-without-form-example", never, {}, {}, never, never, false, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkLinearStepperWithFormExample, "cdk-linear-stepper-with-form-example", never, {}, {}, never, never, false, never>;
}

export declare class CdkStepperExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkStepperExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CdkStepperExamplesModule, [typeof i1.CdkCustomStepperWithoutFormExample, typeof i1.CustomStepper, typeof i2.CdkLinearStepperWithFormExample, typeof i2.CustomLinearStepper], [typeof i3.CdkStepperModule, typeof i4.CommonModule, typeof i5.ReactiveFormsModule], [typeof i1.CdkCustomStepperWithoutFormExample, typeof i1.CustomStepper, typeof i2.CdkLinearStepperWithFormExample, typeof i2.CustomLinearStepper]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CdkStepperExamplesModule>;
}

/** Custom CDK linear stepper component */
export declare class CustomLinearStepper extends CdkStepper {
    selectStepByIndex(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomLinearStepper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomLinearStepper, "example-custom-linear-stepper", never, {}, {}, never, never, false, never>;
}

/** Custom CDK stepper component */
export declare class CustomStepper extends CdkStepper {
    selectStepByIndex(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomStepper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomStepper, "example-custom-stepper", never, {}, {}, never, never, false, never>;
}

declare namespace i1 {
    export {
        CdkCustomStepperWithoutFormExample,
        CustomStepper
    }
}

declare namespace i2 {
    export {
        CdkLinearStepperWithFormExample,
        CustomLinearStepper
    }
}

export { }
