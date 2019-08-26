import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
/**
 * @title Stepper that displays errors in the steps
 */
export declare class StepperErrorsExample implements OnInit {
    private _formBuilder;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
}
