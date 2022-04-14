import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
/** @title Form field with error messages */
export declare class FormFieldErrorExample {
    email: FormControl<string | null>;
    getErrorMessage(): "" | "You must enter a value" | "Not a valid email";
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldErrorExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldErrorExample, "form-field-error-example", never, {}, {}, never, never>;
}
