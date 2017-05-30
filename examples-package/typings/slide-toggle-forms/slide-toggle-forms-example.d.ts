import { FormBuilder, FormGroup } from '@angular/forms';
export declare class SlideToggleFormsExample {
    isChecked: boolean;
    formGroup: FormGroup;
    constructor(formBuilder: FormBuilder);
    onFormSubmit(formValue: any): void;
}
