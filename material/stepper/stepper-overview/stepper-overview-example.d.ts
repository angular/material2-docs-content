import { OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Stepper overview
 */
export declare class StepperOverviewExample implements OnInit {
    private _formBuilder;
    isLinear: boolean;
    firstFormGroup: UntypedFormGroup;
    secondFormGroup: UntypedFormGroup;
    constructor(_formBuilder: UntypedFormBuilder);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperOverviewExample, "stepper-overview-example", never, {}, {}, never, never>;
}
