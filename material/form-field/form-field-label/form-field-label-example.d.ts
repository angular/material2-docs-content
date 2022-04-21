import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import * as i0 from "@angular/core";
/** @title Form field with label */
export declare class FormFieldLabelExample {
    private _formBuilder;
    hideRequiredControl: FormControl<boolean | null>;
    floatLabelControl: FormControl<"auto" | "always" | "never" | null>;
    options: import("@angular/forms").FormGroup<{
        hideRequired: FormControl<boolean | null>;
        floatLabel: FormControl<"auto" | "always" | "never" | null>;
    }>;
    constructor(_formBuilder: FormBuilder);
    getFloatLabelValue(): FloatLabelType;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldLabelExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldLabelExample, "form-field-label-example", never, {}, {}, never, never, false>;
}
