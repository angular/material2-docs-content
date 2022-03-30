import { OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Stepper with optional steps
 */
export declare class StepperOptionalExample implements OnInit {
    private _formBuilder;
    firstFormGroup: UntypedFormGroup;
    secondFormGroup: UntypedFormGroup;
    isOptional: boolean;
    constructor(_formBuilder: UntypedFormBuilder);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperOptionalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperOptionalExample, "stepper-optional-example", never, {}, {}, never, never>;
}
