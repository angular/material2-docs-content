import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';
import * as i0 from '@angular/core';
import { NgForm } from '@angular/forms';

/**
 * @title Input with a clear button
 */
export declare class InputClearableExample {
    value: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputClearableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputClearableExample, "input-clearable-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Input with error messages
 */
export declare class InputErrorsExample {
    emailFormControl: FormControl<string | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputErrorsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputErrorsExample, "input-errors-example", never, {}, {}, never, never, true, never>;
}

/** @title Input with a custom ErrorStateMatcher */
export declare class InputErrorStateMatcherExample {
    emailFormControl: FormControl<string | null>;
    matcher: MyErrorStateMatcher;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputErrorStateMatcherExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputErrorStateMatcherExample, "input-error-state-matcher-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Inputs in a form
 */
export declare class InputFormExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputFormExample, "input-form-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatInputHarness
 */
export declare class InputHarnessExample {
    inputType: string;
    disabled: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputHarnessExample, "input-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Input with hints
 */
export declare class InputHintExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputHintExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputHintExample, "input-hint-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic Inputs
 */
export declare class InputOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputOverviewExample, "input-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Inputs with prefixes and suffixes
 */
export declare class InputPrefixSuffixExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputPrefixSuffixExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputPrefixSuffixExample, "input-prefix-suffix-example", never, {}, {}, never, never, true, never>;
}

/** Error when invalid control is dirty, touched, or submitted. */
declare class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
}

export { }
