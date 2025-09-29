import * as i0 from '@angular/core';
import { OnDestroy } from '@angular/core';
import * as _angular_material_form_field from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import * as _angular_forms from '@angular/forms';
import { FormGroup, FormControl, ControlValueAccessor, NgControl, AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs';

/** @title Form field appearance variants */
declare class FormFieldAppearanceExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldAppearanceExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldAppearanceExample, "form-field-appearance-example", never, {}, {}, never, never, true, never>;
}

/** @title Form field with custom telephone number input control. */
declare class FormFieldCustomControlExample {
    readonly form: FormGroup<{
        tel: FormControl<null>;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldCustomControlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldCustomControlExample, "form-field-custom-control-example", never, {}, {}, never, never, true, never>;
}
/** Data structure for holding telephone number. */
declare class MyTel {
    area: string;
    exchange: string;
    subscriber: string;
    constructor(area: string, exchange: string, subscriber: string);
}
/** Custom `MatFormFieldControl` for telephone number input. */
declare class MyTelInput implements ControlValueAccessor, MatFormFieldControl<MyTel>, OnDestroy {
    static nextId: number;
    readonly areaInput: i0.Signal<HTMLInputElement>;
    readonly exchangeInput: i0.Signal<HTMLInputElement>;
    readonly subscriberInput: i0.Signal<HTMLInputElement>;
    ngControl: NgControl | null;
    readonly parts: FormGroup<{
        area: FormControl<string | null>;
        exchange: FormControl<string | null>;
        subscriber: FormControl<string | null>;
    }>;
    readonly stateChanges: Subject<void>;
    readonly touched: i0.WritableSignal<boolean>;
    readonly controlType = "example-tel-input";
    readonly id: string;
    readonly _userAriaDescribedBy: i0.InputSignal<string>;
    readonly _placeholder: i0.InputSignal<string>;
    readonly _required: i0.InputSignalWithTransform<boolean, unknown>;
    readonly _disabledByInput: i0.InputSignalWithTransform<boolean, unknown>;
    readonly _value: i0.ModelSignal<MyTel | null>;
    onChange: (_: any) => void;
    onTouched: () => void;
    protected readonly _formField: _angular_material_form_field.MatFormField | null;
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

/** @title Form field with error messages */
declare class FormFieldErrorExample {
    readonly email: FormControl<string | null>;
    errorMessage: i0.WritableSignal<string>;
    constructor();
    updateErrorMessage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldErrorExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldErrorExample, "form-field-error-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatFormFieldHarness
 */
declare class FormFieldHarnessExample {
    readonly requiredControl: FormControl<string | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldHarnessExample, "form-field-harness-example", never, {}, {}, never, never, true, never>;
}

/** @title Form field with hints */
declare class FormFieldHintExample {
    protected readonly value: i0.WritableSignal<string>;
    protected onInput(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldHintExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldHintExample, "form-field-hint-example", never, {}, {}, never, never, true, never>;
}

/** @title Form field with label */
declare class FormFieldLabelExample {
    readonly hideRequiredControl: FormControl<boolean | null>;
    readonly floatLabelControl: FormControl<"always" | "auto" | null>;
    readonly options: _angular_forms.FormGroup<{
        hideRequired: FormControl<boolean | null>;
        floatLabel: FormControl<"always" | "auto" | null>;
    }>;
    protected readonly hideRequired: i0.Signal<boolean | null | undefined>;
    protected readonly floatLabel: i0.Signal<"always" | "auto">;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldLabelExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldLabelExample, "form-field-label-example", never, {}, {}, never, never, true, never>;
}

/** @title Simple form field */
declare class FormFieldOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldOverviewExample, "form-field-overview-example", never, {}, {}, never, never, true, never>;
}

/** @title Form field with prefix & suffix */
declare class FormFieldPrefixSuffixExample {
    hide: i0.WritableSignal<boolean>;
    clickEvent(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldPrefixSuffixExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldPrefixSuffixExample, "form-field-prefix-suffix-example", never, {}, {}, never, never, true, never>;
}

export { FormFieldAppearanceExample, FormFieldCustomControlExample, FormFieldErrorExample, FormFieldHarnessExample, FormFieldHintExample, FormFieldLabelExample, FormFieldOverviewExample, FormFieldPrefixSuffixExample, MyTelInput };
