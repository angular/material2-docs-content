import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Slide-toggle with forms
 */
export declare class SlideToggleFormsExample {
    isChecked: boolean;
    formGroup: UntypedFormGroup;
    constructor(formBuilder: UntypedFormBuilder);
    onFormSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlideToggleFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SlideToggleFormsExample, "slide-toggle-forms-example", never, {}, {}, never, never>;
}
