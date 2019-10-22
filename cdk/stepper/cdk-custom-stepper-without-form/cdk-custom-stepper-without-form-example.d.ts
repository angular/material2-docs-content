import { CdkStepper } from '@angular/cdk/stepper';
import * as i0 from "@angular/core";
/** @title A custom CDK stepper without a form */
export declare class CdkCustomStepperWithoutFormExample {
    static ngFactoryDef: i0.ɵɵFactoryDef<CdkCustomStepperWithoutFormExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<CdkCustomStepperWithoutFormExample, "cdk-custom-stepper-without-form-example", never, {}, {}, never>;
}
/** Custom CDK stepper component */
export declare class CustomStepper extends CdkStepper {
    onClick(index: number): void;
    static ngFactoryDef: i0.ɵɵFactoryDef<CustomStepper>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<CustomStepper, "example-custom-stepper", never, {}, {}, never>;
}
