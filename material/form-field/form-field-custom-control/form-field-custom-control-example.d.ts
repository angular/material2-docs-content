import { FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput } from '@angular/cdk/coercion';
import { ElementRef, OnDestroy } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NgControl } from '@angular/forms';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/** @title Form field with custom telephone number input control. */
export declare class FormFieldCustomControlExample {
    form: FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldCustomControlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldCustomControlExample, "form-field-custom-control-example", never, {}, {}, never, never>;
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
    _formField: MatFormField;
    ngControl: NgControl;
    static nextId: number;
    areaInput: HTMLInputElement;
    exchangeInput: HTMLInputElement;
    subscriberInput: HTMLInputElement;
    parts: FormGroup;
    stateChanges: Subject<void>;
    focused: boolean;
    controlType: string;
    id: string;
    onChange: (_: any) => void;
    onTouched: () => void;
    get empty(): boolean;
    get shouldLabelFloat(): boolean;
    userAriaDescribedBy: string;
    get placeholder(): string;
    set placeholder(value: string);
    private _placeholder;
    get required(): boolean;
    set required(value: boolean);
    private _required;
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    get value(): MyTel | null;
    set value(tel: MyTel | null);
    get errorState(): boolean;
    constructor(formBuilder: FormBuilder, _focusMonitor: FocusMonitor, _elementRef: ElementRef<HTMLElement>, _formField: MatFormField, ngControl: NgControl);
    autoFocusNext(control: AbstractControl, nextElement?: HTMLInputElement): void;
    autoFocusPrev(control: AbstractControl, prevElement: HTMLInputElement): void;
    ngOnDestroy(): void;
    setDescribedByIds(ids: string[]): void;
    onContainerClick(): void;
    writeValue(tel: MyTel | null): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    _handleInput(control: AbstractControl, nextElement?: HTMLInputElement): void;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_required: BooleanInput;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyTelInput, [null, null, null, { optional: true; }, { optional: true; self: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyTelInput, "example-tel-input", never, { "userAriaDescribedBy": "aria-describedby"; "placeholder": "placeholder"; "required": "required"; "disabled": "disabled"; "value": "value"; }, {}, never, never>;
}
