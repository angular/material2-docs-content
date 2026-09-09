import * as i0 from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as _angular_forms_signals from '@angular/forms/signals';

/**
 * @title Input with a clear button
 */
declare class InputClearableExample {
    value: i0.WritableSignal<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputClearableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputClearableExample, "input-clearable-example", never, {}, {}, never, never, true, never>;
}

/** Error when invalid control is dirty, touched, or submitted. */
declare class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
}
/** @title Input with a custom ErrorStateMatcher */
declare class InputErrorStateMatcherExample {
    emailFormControl: FormControl<string | null>;
    matcher: MyErrorStateMatcher;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputErrorStateMatcherExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputErrorStateMatcherExample, "input-error-state-matcher-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Input with error messages (reactive form)
 */
declare class InputErrorsExample {
    emailFormControl: FormControl<string | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputErrorsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputErrorsExample, "input-errors-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Input with error messages (signal form)
 */
declare class InputErrorsSignalFormExample {
    private _emailModel;
    protected emailForm: _angular_forms_signals.FieldTree<string, string | number, "writable">;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputErrorsSignalFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputErrorsSignalFormExample, "input-errors-signal-form-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Inputs in a form
 */
declare class InputFormExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputFormExample, "input-form-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Input with hints
 */
declare class InputHintExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputHintExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputHintExample, "input-hint-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic Inputs
 */
declare class InputOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputOverviewExample, "input-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Inputs with prefixes and suffixes
 */
declare class InputPrefixSuffixExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputPrefixSuffixExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputPrefixSuffixExample, "input-prefix-suffix-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatInputHarness
 */
declare class InputHarnessExample {
    inputType: i0.WritableSignal<string>;
    disabled: i0.WritableSignal<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputHarnessExample, "input-harness-example", never, {}, {}, never, never, true, never>;
}

export { InputClearableExample, InputErrorStateMatcherExample, InputErrorsExample, InputErrorsSignalFormExample, InputFormExample, InputHarnessExample, InputHintExample, InputOverviewExample, InputPrefixSuffixExample };
