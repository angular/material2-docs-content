import { AfterViewInit } from '@angular/core';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { ElementRef } from '@angular/core';
import * as i0 from '@angular/core';
import { OnDestroy } from '@angular/core';

/** @title Monitoring autofill state with cdkAutofill */
export declare class TextFieldAutofillDirectiveExample {
    firstNameAutofilled: boolean;
    lastNameAutofilled: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextFieldAutofillDirectiveExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextFieldAutofillDirectiveExample, "text-field-autofill-directive-example", never, {}, {}, never, never, true, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TextFieldAutofillMonitorExample, "text-field-autofill-monitor-example", never, {}, {}, never, never, true, never>;
}

/** @title Auto-resizing textarea */
export declare class TextFieldAutosizeTextareaExample {
    private _injector;
    autosize: CdkTextareaAutosize;
    triggerResize(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextFieldAutosizeTextareaExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextFieldAutosizeTextareaExample, "text-field-autosize-textarea-example", never, {}, {}, never, never, true, never>;
}

export { }
