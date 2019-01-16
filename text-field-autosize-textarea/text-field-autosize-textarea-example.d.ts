import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { NgZone } from '@angular/core';
/** @title Auto-resizing textarea */
export declare class TextFieldAutosizeTextareaExample {
    private ngZone;
    constructor(ngZone: NgZone);
    autosize: CdkTextareaAutosize;
    triggerResize(): void;
}
