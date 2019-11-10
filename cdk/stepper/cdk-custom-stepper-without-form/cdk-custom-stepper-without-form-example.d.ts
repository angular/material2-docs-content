import { CdkStepper } from '@angular/cdk/stepper';
import * as i0 from "@angular/core";
/** @title A custom CDK stepper without a form */
export declare class CdkCustomStepperWithoutFormExample {
    static ɵfac: i0.ɵɵFactoryDef<CdkCustomStepperWithoutFormExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CdkCustomStepperWithoutFormExample, "cdk-custom-stepper-without-form-example", never, {}, {}, never>;
}
/** Custom CDK stepper component */
export declare class CustomStepper extends CdkStepper {
    onClick(index: number): void;
    static ngAcceptInputType_linear: boolean | string | null | undefined;
    static ngAcceptInputType_selectedIndex: number | string | null | undefined;
    static ɵfac: i0.ɵɵFactoryDef<CustomStepper>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CustomStepper, "example-custom-stepper", never, {}, {}, never>;
}
