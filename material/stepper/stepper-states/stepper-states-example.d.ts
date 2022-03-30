import { OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Stepper with customized states
 */
export declare class StepperStatesExample implements OnInit {
    private _formBuilder;
    firstFormGroup: UntypedFormGroup;
    secondFormGroup: UntypedFormGroup;
    constructor(_formBuilder: UntypedFormBuilder);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperStatesExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperStatesExample, "stepper-states-example", never, {}, {}, never, never>;
}
