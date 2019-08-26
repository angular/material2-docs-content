import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { NgZone } from '@angular/core';
/** @title Auto-resizing textarea */
export declare class TextFieldAutosizeTextareaExample {
    private _ngZone;
    constructor(_ngZone: NgZone);
    autosize: CdkTextareaAutosize;
    triggerResize(): void;
}
