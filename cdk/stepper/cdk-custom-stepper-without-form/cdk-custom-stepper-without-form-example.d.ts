import { CdkStepper } from '@angular/cdk/stepper';
import * as i0 from "@angular/core";
/** @title A custom CDK stepper without a form */
export declare class CdkCustomStepperWithoutFormExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkCustomStepperWithoutFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkCustomStepperWithoutFormExample, "cdk-custom-stepper-without-form-example", never, {}, {}, never, never, false>;
}
/** Custom CDK stepper component */
export declare class CustomStepper extends CdkStepper {
    selectStepByIndex(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomStepper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomStepper, "example-custom-stepper", never, {}, {}, never, never, false>;
}
