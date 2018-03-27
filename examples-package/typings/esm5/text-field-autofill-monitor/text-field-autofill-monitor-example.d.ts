import { AutofillMonitor } from '@angular/cdk/text-field';
import { ElementRef, OnDestroy, OnInit } from '@angular/core';
/** @title Monitoring autofill state with AutofillMonitor */
export declare class TextFieldAutofillMonitorExample implements OnDestroy, OnInit {
    private autofill;
    firstName: ElementRef;
    lastName: ElementRef;
    firstNameAutofilled: boolean;
    lastNameAutofilled: boolean;
    constructor(autofill: AutofillMonitor);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
