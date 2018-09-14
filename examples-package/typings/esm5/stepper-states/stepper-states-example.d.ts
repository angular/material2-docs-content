import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
/**
 * @title Stepper with customized states
 */
export declare class StepperStatesExample implements OnInit {
    private _formBuilder;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
}
