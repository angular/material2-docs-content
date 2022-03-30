import { OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Stepper that displays errors in the steps
 */
export declare class StepperErrorsExample implements OnInit {
    private _formBuilder;
    firstFormGroup: UntypedFormGroup;
    secondFormGroup: UntypedFormGroup;
    constructor(_formBuilder: UntypedFormBuilder);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperErrorsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperErrorsExample, "stepper-errors-example", never, {}, {}, never, never>;
}
