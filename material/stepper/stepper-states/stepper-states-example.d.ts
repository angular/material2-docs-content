import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Stepper with customized states
 */
export declare class StepperStatesExample implements OnInit {
    private _formBuilder;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperStatesExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperStatesExample, "stepper-states-example", never, {}, {}, never, never>;
}
