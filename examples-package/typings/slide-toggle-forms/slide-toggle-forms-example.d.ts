import { FormBuilder, FormGroup } from '@angular/forms';
/**
 * @title Slide-toggle with forms
 */
export declare class SlideToggleFormsExample {
    isChecked: boolean;
    formGroup: FormGroup;
    constructor(formBuilder: FormBuilder);
    onFormSubmit(formValue: any): void;
}
