import { FormBuilder, FormGroup } from '@angular/forms';
/**
 * @title Stepper with editable steps
 */
export declare class StepperEditableExample {
    private _formBuilder;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    isEditable: boolean;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
}
