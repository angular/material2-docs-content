import { FormBuilder, FormGroup } from '@angular/forms';
/**
 * @title Stepper vertical
 */
export declare class StepperVerticalExample {
    private _formBuilder;
    isLinear: boolean;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
}
