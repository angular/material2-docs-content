import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
/**
 * @title Stepper with editable steps
 */
export declare class StepperEditableExample implements OnInit {
    private _formBuilder;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    isEditable: boolean;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
}
