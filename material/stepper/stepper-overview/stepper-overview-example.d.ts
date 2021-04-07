import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Stepper overview
 */
export declare class StepperOverviewExample implements OnInit {
    private _formBuilder;
    isLinear: boolean;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperOverviewExample, "stepper-overview-example", never, {}, {}, never, never>;
}
