import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Slide-toggle with forms
 */
export declare class SlideToggleFormsExample {
    isChecked: boolean;
    formGroup: FormGroup;
    constructor(formBuilder: FormBuilder);
    onFormSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlideToggleFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SlideToggleFormsExample, "slide-toggle-forms-example", never, {}, {}, never, never>;
}
