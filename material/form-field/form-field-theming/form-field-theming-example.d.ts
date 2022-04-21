import { FormBuilder, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
/** @title Form field theming */
export declare class FormFieldThemingExample {
    private _formBuilder;
    colorControl: FormControl<string | null>;
    fontSizeControl: FormControl<number | null>;
    options: import("@angular/forms").FormGroup<{
        color: FormControl<string | null>;
        fontSize: FormControl<number | null>;
    }>;
    constructor(_formBuilder: FormBuilder);
    getFontSize(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldThemingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldThemingExample, "form-field-theming-example", never, {}, {}, never, never, false>;
}
