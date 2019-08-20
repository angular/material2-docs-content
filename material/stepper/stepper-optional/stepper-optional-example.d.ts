import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
}
