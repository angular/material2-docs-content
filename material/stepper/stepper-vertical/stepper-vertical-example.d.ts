import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Stepper vertical
 */
export declare class StepperVerticalExample implements OnInit {
    private _formBuilder;
    isLinear: boolean;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperVerticalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperVerticalExample, "stepper-vertical-example", never, {}, {}, never, never>;
}
