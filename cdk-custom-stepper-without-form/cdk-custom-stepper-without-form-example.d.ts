import { QueryList, ChangeDetectorRef } from '@angular/core';
import { CdkStepper, CdkStep } from '@angular/cdk/stepper';
import { Directionality } from '@angular/cdk/bidi';
/** @title A custom CDK stepper without a form */
export declare class CdkCustomStepperWithoutFormExample {
}
/** Custom CDK stepper component */
export declare class CustomStepper extends CdkStepper {
    /** Whether the validity of previous steps should be checked or not */
    linear: boolean;
    /** The index of the selected step. */
    selectedIndex: number;
    /** The list of step components that the stepper is holding. */
    steps: QueryList<CdkStep>;
    constructor(dir: Directionality, changeDetectorRef: ChangeDetectorRef);
    onClick(index: number): void;
}
