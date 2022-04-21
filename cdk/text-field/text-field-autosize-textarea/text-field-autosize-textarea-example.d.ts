import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { NgZone } from '@angular/core';
import * as i0 from "@angular/core";
/** @title Auto-resizing textarea */
export declare class TextFieldAutosizeTextareaExample {
    private _ngZone;
    constructor(_ngZone: NgZone);
    autosize: CdkTextareaAutosize;
    triggerResize(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextFieldAutosizeTextareaExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextFieldAutosizeTextareaExample, "text-field-autosize-textarea-example", never, {}, {}, never, never, false>;
}
