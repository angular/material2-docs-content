import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Stepper that displays errors in the steps
 */
export declare class StepperErrorsExample implements OnInit {
    private _formBuilder;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<StepperErrorsExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<StepperErrorsExample, "stepper-errors-example", never, {}, {}, never>;
}
