import { FormBuilder, FormGroup } from '@angular/forms';
/**
 * @title Stepper overview
 */
export declare class StepperOverviewExample {
    private _formBuilder;
    isLinear: boolean;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
}
