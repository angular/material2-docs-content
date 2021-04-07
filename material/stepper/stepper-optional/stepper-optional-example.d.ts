import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Stepper with optional steps
 */
export declare class StepperOptionalExample implements OnInit {
    private _formBuilder;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    isOptional: boolean;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperOptionalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperOptionalExample, "stepper-optional-example", never, {}, {}, never, never>;
}
