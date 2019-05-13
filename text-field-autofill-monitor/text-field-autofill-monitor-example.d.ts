import { AutofillMonitor } from '@angular/cdk/text-field';
import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
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
}
