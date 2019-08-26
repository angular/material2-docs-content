import { FormControl } from '@angular/forms';
/** @title Form field with error messages */
export declare class FormFieldErrorExample {
    email: FormControl;
    getErrorMessage(): "" | "You must enter a value" | "Not a valid email";
}
