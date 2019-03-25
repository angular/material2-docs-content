import { AutofillMonitor } from '@angular/cdk/text-field';
import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
/** @title Monitoring autofill state with AutofillMonitor */
export declare class TextFieldAutofillMonitorExample implements AfterViewInit, OnDestroy {
    private autofill;
    firstName: ElementRef<HTMLElement>;
    lastName: ElementRef<HTMLElement>;
    firstNameAutofilled: boolean;
    lastNameAutofilled: boolean;
    constructor(autofill: AutofillMonitor);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
