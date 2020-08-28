import { CdkStepper } from '@angular/cdk/stepper';
import * as i0 from "@angular/core";
/** @title A custom CDK stepper without a form */
export declare class CdkCustomStepperWithoutFormExample {
    static ɵfac: i0.ɵɵFactoryDef<CdkCustomStepperWithoutFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CdkCustomStepperWithoutFormExample, "cdk-custom-stepper-without-form-example", never, {}, {}, never, never>;
}
/** Custom CDK stepper component */
export declare class CustomStepper extends CdkStepper {
    selectStepByIndex(index: number): void;
    static ɵfac: i0.ɵɵFactoryDef<CustomStepper, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CustomStepper, "example-custom-stepper", never, {}, {}, never, never>;
}
