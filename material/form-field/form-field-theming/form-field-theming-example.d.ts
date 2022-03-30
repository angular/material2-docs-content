import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/** @title Form field theming */
export declare class FormFieldThemingExample {
    options: UntypedFormGroup;
    colorControl: import("@angular/forms").FormControl;
    fontSizeControl: import("@angular/forms").FormControl;
    constructor(fb: UntypedFormBuilder);
    getFontSize(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldThemingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldThemingExample, "form-field-theming-example", never, {}, {}, never, never>;
}
