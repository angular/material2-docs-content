import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i10 from '@angular/material/legacy-button';
import * as i11 from '@angular/material/icon';
import * as i12 from '@angular/material/legacy-input';
import * as i13 from '@angular/forms';
import * as i9 from '@angular/common';
import { NgForm } from '@angular/forms';

declare namespace i1 {
    export {
        InputClearableExample
    }
}

declare namespace i2 {
    export {
        MyErrorStateMatcher,
        InputErrorStateMatcherExample
    }
}

declare namespace i3 {
    export {
        InputErrorsExample
    }
}

declare namespace i4 {
    export {
        InputFormExample
    }
}

declare namespace i5 {
    export {
        InputHarnessExample
    }
}

declare namespace i6 {
    export {
        InputHintExample
    }
}

declare namespace i7 {
    export {
        InputOverviewExample
    }
}

declare namespace i8 {
    export {
        InputPrefixSuffixExample
    }
}

/**
 * @title Input with a clear button
 */
export declare class InputClearableExample {
    value: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputClearableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputClearableExample, "input-clearable-example", never, {}, {}, never, never, false>;
}

/**
 * @title Input with error messages
 */
export declare class InputErrorsExample {
    emailFormControl: FormControl<string | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputErrorsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputErrorsExample, "input-errors-example", never, {}, {}, never, never, false>;
}

/** @title Input with a custom ErrorStateMatcher */
export declare class InputErrorStateMatcherExample {
    emailFormControl: FormControl<string | null>;
    matcher: MyErrorStateMatcher;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputErrorStateMatcherExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputErrorStateMatcherExample, "input-error-state-matcher-example", never, {}, {}, never, never, false>;
}

export declare class InputExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<InputExamplesModule, [typeof i1.InputClearableExample, typeof i2.InputErrorStateMatcherExample, typeof i3.InputErrorsExample, typeof i4.InputFormExample, typeof i5.InputHarnessExample, typeof i6.InputHintExample, typeof i7.InputOverviewExample, typeof i8.InputPrefixSuffixExample], [typeof i9.CommonModule, typeof i10.MatLegacyButtonModule, typeof i11.MatIconModule, typeof i12.MatLegacyInputModule, typeof i13.FormsModule, typeof i13.ReactiveFormsModule], [typeof i1.InputClearableExample, typeof i2.InputErrorStateMatcherExample, typeof i3.InputErrorsExample, typeof i4.InputFormExample, typeof i5.InputHarnessExample, typeof i6.InputHintExample, typeof i7.InputOverviewExample, typeof i8.InputPrefixSuffixExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<InputExamplesModule>;
}

/**
 * @title Inputs in a form
 */
export declare class InputFormExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputFormExample, "input-form-example", never, {}, {}, never, never, false>;
}

/**
 * @title Testing with MatInputHarness
 */
export declare class InputHarnessExample {
    inputType: string;
    disabled: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputHarnessExample, "input-harness-example", never, {}, {}, never, never, false>;
}

/**
 * @title Input with hints
 */
export declare class InputHintExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputHintExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputHintExample, "input-hint-example", never, {}, {}, never, never, false>;
}

/**
 * @title Basic Inputs
 */
export declare class InputOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputOverviewExample, "input-overview-example", never, {}, {}, never, never, false>;
}

/**
 * @title Inputs with prefixes and suffixes
 */
export declare class InputPrefixSuffixExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputPrefixSuffixExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputPrefixSuffixExample, "input-prefix-suffix-example", never, {}, {}, never, never, false>;
}

/** Error when invalid control is dirty, touched, or submitted. */
declare class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
}

export { }
