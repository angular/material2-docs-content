import { FocusMonitor } from '@angular/cdk/a11y';
import { ElementRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';
/** @title Form field with custom telephone number input control. */
export declare class FormFieldCustomControlExample {
}
/** Data structure for holding telephone number. */
export declare class MyTel {
    area: string;
    exchange: string;
    subscriber: string;
    constructor(area: string, exchange: string, subscriber: string);
}
/** Custom `MatFormFieldControl` for telephone number input. */
export declare class MyTelInput implements MatFormFieldControl<MyTel>, OnDestroy {
    private fm;
    private elRef;
    static nextId: number;
    parts: FormGroup;
    stateChanges: Subject<void>;
    focused: boolean;
    ngControl: null;
    errorState: boolean;
    controlType: string;
    id: string;
    describedBy: string;
    readonly empty: boolean;
    readonly shouldLabelFloat: boolean;
    placeholder: string;
    private _placeholder;
    required: boolean;
    private _required;
    disabled: boolean;
    private _disabled;
    value: MyTel | null;
    constructor(fb: FormBuilder, fm: FocusMonitor, elRef: ElementRef<HTMLElement>);
    ngOnDestroy(): void;
    setDescribedByIds(ids: string[]): void;
    onContainerClick(event: MouseEvent): void;
}
