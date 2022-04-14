import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Slide-toggle with forms
 */
export declare class SlideToggleFormsExample {
    private _formBuilder;
    isChecked: boolean;
    formGroup: import("@angular/forms").FormGroup<{
        enableWifi: import("@angular/forms").FormControl<string | null>;
        acceptTerms: import("@angular/forms").FormControl<string | null>;
    }>;
    constructor(_formBuilder: FormBuilder);
    onFormSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlideToggleFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SlideToggleFormsExample, "slide-toggle-forms-example", never, {}, {}, never, never>;
}
