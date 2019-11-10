import { FocusMonitor } from '@angular/cdk/a11y';
import { ElementRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/** @title Form field with custom telephone number input control. */
export declare class FormFieldCustomControlExample {
    static ɵfac: i0.ɵɵFactoryDef<FormFieldCustomControlExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FormFieldCustomControlExample, "form-field-custom-control-example", never, {}, {}, never>;
}
/** Data structure for holding telephone number. */
export declare class MyTel {
    area: string;
    exchange: string;
    subscriber: string;
    constructor(area: string, exchange: string, subscriber: string);
}
/** Custom `MatFormFieldControl` for telephone number input. */
export declare class MyTelInput implements ControlValueAccessor, MatFormFieldControl<MyTel>, OnDestroy {
    private _focusMonitor;
    private _elementRef;
    ngControl: NgControl;
    static nextId: number;
    parts: FormGroup;
    stateChanges: Subject<void>;
    focused: boolean;
    errorState: boolean;
    controlType: string;
    id: string;
    describedBy: string;
    onChange: (_: any) => void;
    onTouched: () => void;
    readonly empty: boolean;
    readonly shouldLabelFloat: boolean;
    placeholder: string;
    private _placeholder;
    required: boolean;
    private _required;
    disabled: boolean;
    private _disabled;
    value: MyTel | null;
    constructor(formBuilder: FormBuilder, _focusMonitor: FocusMonitor, _elementRef: ElementRef<HTMLElement>, ngControl: NgControl);
    ngOnDestroy(): void;
    setDescribedByIds(ids: string[]): void;
    onContainerClick(event: MouseEvent): void;
    writeValue(tel: MyTel | null): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    _handleInput(): void;
    static ngAcceptInputType_disabled: boolean | string | null | undefined;
    static ngAcceptInputType_required: boolean | string | null | undefined;
    static ɵfac: i0.ɵɵFactoryDef<MyTelInput>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MyTelInput, "example-tel-input", never, { 'placeholder': "placeholder", 'required': "required", 'disabled': "disabled", 'value': "value" }, {}, never>;
}
