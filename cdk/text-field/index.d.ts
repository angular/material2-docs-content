import { AfterViewInit } from '@angular/core';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { ElementRef } from '@angular/core';
import * as i0 from '@angular/core';
import * as i4 from '@angular/common';
import * as i5 from '@angular/cdk/text-field';
import * as i6 from '@angular/material/button';
import * as i7 from '@angular/material/input';
import * as i8 from '@angular/material/select';
import { NgZone } from '@angular/core';
import { OnDestroy } from '@angular/core';

export declare class CdkTextFieldExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTextFieldExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CdkTextFieldExamplesModule, [typeof i1.TextFieldAutofillDirectiveExample, typeof i2.TextFieldAutofillMonitorExample, typeof i3.TextFieldAutosizeTextareaExample], [typeof i4.CommonModule, typeof i5.TextFieldModule, typeof i6.MatButtonModule, typeof i7.MatInputModule, typeof i8.MatSelectModule], [typeof i1.TextFieldAutofillDirectiveExample, typeof i2.TextFieldAutofillMonitorExample, typeof i3.TextFieldAutosizeTextareaExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CdkTextFieldExamplesModule>;
}

declare namespace i1 {
    export {
        TextFieldAutofillDirectiveExample
    }
}

declare namespace i2 {
    export {
        TextFieldAutofillMonitorExample
    }
}

declare namespace i3 {
    export {
        TextFieldAutosizeTextareaExample
    }
}

/** @title Monitoring autofill state with cdkAutofill */
export declare class TextFieldAutofillDirectiveExample {
    firstNameAutofilled: boolean;
    lastNameAutofilled: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextFieldAutofillDirectiveExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextFieldAutofillDirectiveExample, "text-field-autofill-directive-example", never, {}, {}, never, never, false>;
}

/** @title Monitoring autofill state with AutofillMonitor */
export declare class TextFieldAutofillMonitorExample implements AfterViewInit, OnDestroy {
    private _autofill;
    firstName: ElementRef<HTMLElement>;
    lastName: ElementRef<HTMLElement>;
    firstNameAutofilled: boolean;
    lastNameAutofilled: boolean;
    constructor(_autofill: AutofillMonitor);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextFieldAutofillMonitorExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextFieldAutofillMonitorExample, "text-field-autofill-monitor-example", never, {}, {}, never, never, false>;
}

/** @title Auto-resizing textarea */
export declare class TextFieldAutosizeTextareaExample {
    private _ngZone;
    constructor(_ngZone: NgZone);
    autosize: CdkTextareaAutosize;
    triggerResize(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextFieldAutosizeTextareaExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextFieldAutosizeTextareaExample, "text-field-autosize-textarea-example", never, {}, {}, never, never, false>;
}

export { }
