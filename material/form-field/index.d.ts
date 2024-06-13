import { AbstractControl } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';
import { InputSignal } from '@angular/core';
import { InputSignalWithTransform } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { ModelSignal } from '@angular/core';
import { NgControl } from '@angular/forms';
import { OnDestroy } from '@angular/core';
import { Signal } from '@angular/core';
import { Subject } from 'rxjs';
import { WritableSignal } from '@angular/core';

/** @title Form field appearance variants */
export declare class FormFieldAppearanceExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldAppearanceExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldAppearanceExample, "form-field-appearance-example", never, {}, {}, never, never, true, never>;
}

/** @title Form field with custom telephone number input control. */
export declare class FormFieldCustomControlExample {
    readonly form: FormGroup<{
        tel: FormControl<null>;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldCustomControlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldCustomControlExample, "form-field-custom-control-example", never, {}, {}, never, never, true, never>;
}

/** @title Form field with error messages */
export declare class FormFieldErrorExample {
    readonly email: FormControl<string | null>;
    errorMessage: WritableSignal<string>;
    constructor();
    updateErrorMessage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldErrorExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldErrorExample, "form-field-error-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatFormFieldHarness
 */
export declare class FormFieldHarnessExample {
    readonly requiredControl: FormControl<string | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldHarnessExample, "form-field-harness-example", never, {}, {}, never, never, true, never>;
}

/** @title Form field with hints */
export declare class FormFieldHintExample {
    protected readonly value: WritableSignal<string>;
    protected onInput(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldHintExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldHintExample, "form-field-hint-example", never, {}, {}, never, never, true, never>;
}

/** @title Form field with label */
export declare class FormFieldLabelExample {
    readonly hideRequiredControl: FormControl<boolean | null>;
    readonly floatLabelControl: FormControl<"always" | "auto" | null>;
    readonly options: FormGroup<    {
    hideRequired: FormControl<boolean | null>;
    floatLabel: FormControl<"always" | "auto" | null>;
    }>;
    protected readonly hideRequired: Signal<boolean | null | undefined>;
    protected readonly floatLabel: Signal<"always" | "auto">;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldLabelExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldLabelExample, "form-field-label-example", never, {}, {}, never, never, true, never>;
}

/** @title Simple form field */
export declare class FormFieldOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldOverviewExample, "form-field-overview-example", never, {}, {}, never, never, true, never>;
}

/** @title Form field with prefix & suffix */
export declare class FormFieldPrefixSuffixExample {
    hide: WritableSignal<boolean>;
    clickEvent(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldPrefixSuffixExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldPrefixSuffixExample, "form-field-prefix-suffix-example", never, {}, {}, never, never, true, never>;
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
    static nextId: number;
    readonly areaInput: Signal<HTMLInputElement>;
    readonly exchangeInput: Signal<HTMLInputElement>;
    readonly subscriberInput: Signal<HTMLInputElement>;
    ngControl: NgControl | null;
    readonly parts: FormGroup<{
        area: FormControl<string | null>;
        exchange: FormControl<string | null>;
        subscriber: FormControl<string | null>;
    }>;
    readonly stateChanges: Subject<void>;
    readonly touched: WritableSignal<boolean>;
    readonly controlType = "example-tel-input";
    readonly id: string;
    readonly _userAriaDescribedBy: InputSignal<string>;
    readonly _placeholder: InputSignal<string>;
    readonly _required: InputSignalWithTransform<boolean, unknown>;
    readonly _disabledByInput: InputSignalWithTransform<boolean, unknown>;
    readonly _value: ModelSignal<MyTel | null>;
    onChange: (_: any) => void;
    onTouched: () => void;
    protected readonly _formField: MatFormField | null;
    private readonly _focused;
    private readonly _disabledByCva;
    private readonly _disabled;
    private readonly _focusMonitor;
    private readonly _elementRef;
    get focused(): boolean;
    get empty(): boolean;
    get shouldLabelFloat(): boolean;
    get userAriaDescribedBy(): string;
    get placeholder(): string;
    get required(): boolean;
    get disabled(): boolean;
    get value(): MyTel | null;
    get errorState(): boolean;
    constructor();
    ngOnDestroy(): void;
    onFocusIn(): void;
    onFocusOut(event: FocusEvent): void;
    autoFocusNext(control: AbstractControl, nextElement?: HTMLInputElement): void;
    autoFocusPrev(control: AbstractControl, prevElement: HTMLInputElement): void;
    setDescribedByIds(ids: string[]): void;
    onContainerClick(): void;
    writeValue(tel: MyTel | null): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    _handleInput(control: AbstractControl, nextElement?: HTMLInputElement): void;
    private _updateValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyTelInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyTelInput, "example-tel-input", never, { "_userAriaDescribedBy": { "alias": "aria-describedby"; "required": false; "isSignal": true; }; "_placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "_required": { "alias": "required"; "required": false; "isSignal": true; }; "_disabledByInput": { "alias": "disabled"; "required": false; "isSignal": true; }; "_value": { "alias": "value"; "required": false; "isSignal": true; }; }, { "_value": "valueChange"; }, never, never, true, never>;
}

export { }
