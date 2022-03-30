import { UntypedFormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as i0 from "@angular/core";
/** Error when invalid control is dirty, touched, or submitted. */
export declare class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
}
/** @title Select with a custom ErrorStateMatcher */
export declare class SelectErrorStateMatcherExample {
    selected: import("@angular/forms").FormControl;
    selectFormControl: import("@angular/forms").FormControl;
    nativeSelectFormControl: import("@angular/forms").FormControl;
    matcher: MyErrorStateMatcher;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectErrorStateMatcherExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectErrorStateMatcherExample, "select-error-state-matcher-example", never, {}, {}, never, never>;
}
