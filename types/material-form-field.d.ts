import * as i0 from '@angular/core';
import { ElementRef } from '@angular/core';
import * as _angular_forms_signals from '@angular/forms/signals';
import { FormValueControl, Field } from '@angular/forms/signals';
import { MatFormFieldControl, MatFormField } from '@angular/material/form-field';
import * as _angular_forms from '@angular/forms';
import { FormControl } from '@angular/forms';

/** @title Form field appearance variants */
declare class FormFieldAppearanceExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldAppearanceExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldAppearanceExample, "form-field-appearance-example", never, {}, {}, never, never, true, never>;
}

/** @title Form field with custom telephone number input control. */
declare class FormFieldCustomControlExample {
    readonly formModel: i0.WritableSignal<{
        tel: MyTel | null;
    }>;
    readonly form: _angular_forms_signals.FieldTree<{
        tel: MyTel | null;
    }, string | number, "writable">;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldCustomControlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldCustomControlExample, "form-field-custom-control-example", never, {}, {}, never, never, true, never>;
}
/** Data structure for holding telephone number. */
declare class MyTel {
    readonly area: string;
    readonly exchange: string;
    readonly subscriber: string;
    constructor(area: string, exchange: string, subscriber: string);
}
/** Custom `MatFormFieldControl` for telephone number input. */
declare class MyTelInput implements FormValueControl<MyTel | null>, MatFormFieldControl<MyTel> {
    static nextId: number;
    readonly ngControl: null;
    protected readonly _formField: MatFormField | null;
    private readonly _formFieldControl;
    private readonly _elementRef;
    protected readonly _areaInput: i0.Signal<ElementRef<HTMLInputElement>>;
    protected readonly _exchangeInput: i0.Signal<ElementRef<HTMLInputElement>>;
    protected readonly _subscriberInput: i0.Signal<ElementRef<HTMLInputElement>>;
    private readonly _touched;
    get ngField(): Field<MyTel> | null;
    readonly partsModel: i0.WritableSignal<{
        area: string;
        exchange: string;
        subscriber: string;
    }>;
    readonly parts: _angular_forms_signals.FieldTree<{
        area: string;
        exchange: string;
        subscriber: string;
    }, string | number, "writable">;
    readonly value: i0.ModelSignal<MyTel | null>;
    readonly controlType = "example-tel-input";
    readonly id: string;
    readonly userAriaDescribedBy: i0.InputSignal<string>;
    readonly placeholder: i0.InputSignal<string>;
    readonly required: i0.InputSignalWithTransform<boolean, unknown>;
    readonly disabled: i0.InputSignalWithTransform<boolean, unknown>;
    readonly focused: i0.WritableSignal<boolean>;
    readonly empty: i0.Signal<boolean>;
    readonly shouldLabelFloat: i0.Signal<boolean>;
    readonly errorState: i0.Signal<boolean>;
    constructor();
    onFocusIn(): void;
    onFocusOut(event: FocusEvent): void;
    autoFocusNext(control: Field<string>, nextElement?: HTMLInputElement): void;
    autoFocusPrev(control: Field<string>, prevElement: HTMLInputElement): void;
    setDescribedByIds(ids: string[]): void;
    onContainerClick(): void;
    protected _handleTyping(control: Field<string>, nextElement?: HTMLInputElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyTelInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyTelInput, "example-tel-input", never, { "value": { "alias": "value"; "required": false; "isSignal": true; }; "userAriaDescribedBy": { "alias": "aria-describedby"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "required": { "alias": "required"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; }, { "value": "valueChange"; }, never, never, true, never>;
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
