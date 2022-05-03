import { AbstractControl } from '@angular/forms';
import { BooleanInput } from '@angular/cdk/coercion';
import { ControlValueAccessor } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { FloatLabelType } from '@angular/material/form-field';
import { FocusMonitor } from '@angular/cdk/a11y';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i10 from '@angular/common';
import * as i11 from '@angular/material/button';
import * as i12 from '@angular/material/checkbox';
import * as i13 from '@angular/material/form-field';
import * as i14 from '@angular/material/icon';
import * as i15 from '@angular/material/input';
import * as i16 from '@angular/material/radio';
import * as i17 from '@angular/material/select';
import * as i18 from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { NgControl } from '@angular/forms';
import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/** @title Form field appearance variants */
export declare class FormFieldAppearanceExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldAppearanceExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldAppearanceExample, "form-field-appearance-example", never, {}, {}, never, never, false>;
}

/** @title Form field with custom telephone number input control. */
export declare class FormFieldCustomControlExample {
    form: FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldCustomControlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldCustomControlExample, "form-field-custom-control-example", never, {}, {}, never, never, false>;
}

/** @title Form field with error messages */
export declare class FormFieldErrorExample {
    email: FormControl<string | null>;
    getErrorMessage(): "" | "You must enter a value" | "Not a valid email";
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldErrorExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldErrorExample, "form-field-error-example", never, {}, {}, never, never, false>;
}

export declare class FormFieldExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormFieldExamplesModule, [typeof i1.FormFieldAppearanceExample, typeof i2.FormFieldCustomControlExample, typeof i3.FormFieldErrorExample, typeof i4.FormFieldHarnessExample, typeof i5.FormFieldHintExample, typeof i6.FormFieldLabelExample, typeof i7.FormFieldOverviewExample, typeof i8.FormFieldPrefixSuffixExample, typeof i9.FormFieldThemingExample, typeof i2.MyTelInput], [typeof i10.CommonModule, typeof i11.MatButtonModule, typeof i12.MatCheckboxModule, typeof i13.MatFormFieldModule, typeof i14.MatIconModule, typeof i15.MatInputModule, typeof i16.MatRadioModule, typeof i17.MatSelectModule, typeof i18.ReactiveFormsModule], [typeof i1.FormFieldAppearanceExample, typeof i2.FormFieldCustomControlExample, typeof i3.FormFieldErrorExample, typeof i4.FormFieldHarnessExample, typeof i5.FormFieldHintExample, typeof i6.FormFieldLabelExample, typeof i7.FormFieldOverviewExample, typeof i8.FormFieldPrefixSuffixExample, typeof i9.FormFieldThemingExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormFieldExamplesModule>;
}

/**
 * @title Testing with MatFormFieldHarness
 */
export declare class FormFieldHarnessExample {
    requiredControl: FormControl<string | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldHarnessExample, "form-field-harness-example", never, {}, {}, never, never, false>;
}

/** @title Form field with hints */
export declare class FormFieldHintExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldHintExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldHintExample, "form-field-hint-example", never, {}, {}, never, never, false>;
}

/** @title Form field with label */
export declare class FormFieldLabelExample {
    private _formBuilder;
    hideRequiredControl: FormControl<boolean | null>;
    floatLabelControl: FormControl<"auto" | "always" | "never" | null>;
    options: FormGroup<    {
    hideRequired: FormControl<boolean | null>;
    floatLabel: FormControl<"auto" | "always" | "never" | null>;
    }>;
    constructor(_formBuilder: FormBuilder);
    getFloatLabelValue(): FloatLabelType;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldLabelExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldLabelExample, "form-field-label-example", never, {}, {}, never, never, false>;
}

/** @title Simple form field */
export declare class FormFieldOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldOverviewExample, "form-field-overview-example", never, {}, {}, never, never, false>;
}

/** @title Form field with prefix & suffix */
export declare class FormFieldPrefixSuffixExample {
    hide: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldPrefixSuffixExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldPrefixSuffixExample, "form-field-prefix-suffix-example", never, {}, {}, never, never, false>;
}

/** @title Form field theming */
export declare class FormFieldThemingExample {
    private _formBuilder;
    colorControl: FormControl<string | null>;
    fontSizeControl: FormControl<number | null>;
    options: FormGroup<    {
    color: FormControl<string | null>;
    fontSize: FormControl<number | null>;
    }>;
    constructor(_formBuilder: FormBuilder);
    getFontSize(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldThemingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldThemingExample, "form-field-theming-example", never, {}, {}, never, never, false>;
}

declare namespace i1 {
    export {
        FormFieldAppearanceExample
    }
}

declare namespace i2 {
    export {
        FormFieldCustomControlExample,
        MyTel,
        MyTelInput
    }
}

declare namespace i3 {
    export {
        FormFieldErrorExample
    }
}

declare namespace i4 {
    export {
        FormFieldHarnessExample
    }
}

declare namespace i5 {
    export {
        FormFieldHintExample
    }
}

declare namespace i6 {
    export {
        FormFieldLabelExample
    }
}

declare namespace i7 {
    export {
        FormFieldOverviewExample
    }
}

declare namespace i8 {
    export {
        FormFieldPrefixSuffixExample
    }
}

declare namespace i9 {
    export {
        FormFieldThemingExample
    }
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
    areaInput: HTMLInputElement;
    exchangeInput: HTMLInputElement;
    subscriberInput: HTMLInputElement;
    parts: FormGroup<{
        area: FormControl<string | null>;
        exchange: FormControl<string | null>;
        subscriber: FormControl<string | null>;
    }>;
    stateChanges: Subject<void>;
    focused: boolean;
    touched: boolean;
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
    get errorState(): boolean;
    constructor(_formBuilder: FormBuilder, _focusMonitor: FocusMonitor, _elementRef: ElementRef<HTMLElement>, _formField: MatFormField, ngControl: NgControl);
    ngOnDestroy(): void;
    onFocusIn(event: FocusEvent): void;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<MyTelInput, [null, null, null, { optional: true; }, { optional: true; self: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyTelInput, "example-tel-input", never, { "userAriaDescribedBy": "aria-describedby"; "placeholder": "placeholder"; "required": "required"; "disabled": "disabled"; "value": "value"; }, {}, never, never, false>;
}

export { }
