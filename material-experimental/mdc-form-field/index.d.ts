import { BooleanInput } from '@angular/cdk/coercion';
import { ControlValueAccessor } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '@angular/material/form-field';
import * as i4 from '@angular/material/icon';
import * as i5 from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { NgControl } from '@angular/forms';
import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

declare namespace i1 {
    export {
        MdcFormFieldCustomControlExample,
        MyTel,
        MyTelInput
    }
}

/** @title Form field with custom telephone number input control. */
export declare class MdcFormFieldCustomControlExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<MdcFormFieldCustomControlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MdcFormFieldCustomControlExample, "mdc-form-field-custom-control-example", never, {}, {}, never, never, false>;
}

export declare class MdcFormFieldExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MdcFormFieldExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MdcFormFieldExamplesModule, [typeof i1.MdcFormFieldCustomControlExample, typeof i1.MyTelInput], [typeof i2.CommonModule, typeof i3.MatFormFieldModule, typeof i4.MatIconModule, typeof i5.ReactiveFormsModule], [typeof i1.MdcFormFieldCustomControlExample, typeof i1.MyTelInput]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MdcFormFieldExamplesModule>;
}

/** Data structure for holding telephone number. */
declare class MyTel {
    area: string;
    exchange: string;
    subscriber: string;
    constructor(area: string, exchange: string, subscriber: string);
}

/** Custom `MatFormFieldControl` for telephone number input. */
export declare class MyTelInput implements ControlValueAccessor, MatFormFieldControl<MyTel>, OnDestroy {
    private _formBuilder;
    private _focusMonitor;
    private _elementRef;
    _formField: MatFormField;
    ngControl: NgControl;
    static nextId: number;
    parts: FormGroup<    {
    area: FormControl<string | null>;
    exchange: FormControl<string | null>;
    subscriber: FormControl<string | null>;
    }>;
    stateChanges: Subject<void>;
    focused: boolean;
    errorState: boolean;
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
    set required(value: BooleanInput);
    private _required;
    get disabled(): boolean;
    set disabled(value: BooleanInput);
    private _disabled;
    get value(): MyTel | null;
    set value(tel: MyTel | null);
    constructor(_formBuilder: FormBuilder, _focusMonitor: FocusMonitor, _elementRef: ElementRef<HTMLElement>, _formField: MatFormField, ngControl: NgControl);
    ngOnDestroy(): void;
    setDescribedByIds(ids: string[]): void;
    onContainerClick(event: MouseEvent): void;
    writeValue(tel: MyTel | null): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    _handleInput(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyTelInput, [null, null, null, { optional: true; }, { optional: true; self: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyTelInput, "example-tel-input", never, { "userAriaDescribedBy": "aria-describedby"; "placeholder": "placeholder"; "required": "required"; "disabled": "disabled"; "value": "value"; }, {}, never, never, false>;
}

export { }
