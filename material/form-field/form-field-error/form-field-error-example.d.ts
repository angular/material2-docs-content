import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
/** @title Form field with error messages */
export declare class FormFieldErrorExample {
    email: FormControl;
    getErrorMessage(): "" | "You must enter a value" | "Not a valid email";
    static ɵfac: i0.ɵɵFactoryDef<FormFieldErrorExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FormFieldErrorExample, "form-field-error-example", never, {}, {}, never>;
}
