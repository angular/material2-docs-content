import { OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Stepper with editable steps
 */
export declare class StepperEditableExample implements OnInit {
    private _formBuilder;
    firstFormGroup: UntypedFormGroup;
    secondFormGroup: UntypedFormGroup;
    isEditable: boolean;
    constructor(_formBuilder: UntypedFormBuilder);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperEditableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperEditableExample, "stepper-editable-example", never, {}, {}, never, never>;
}
