import * as i0 from '@angular/core';
import { ChangeDetectionStrategy, Component, viewChild, inject, signal, input, booleanAttribute, model, computed, ElementRef, effect, untracked, forwardRef } from '@angular/core';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule, MAT_FORM_FIELD, MatFormFieldControl } from '@angular/material/form-field';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { FocusMonitor } from '@angular/cdk/a11y';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import * as i3$1 from '@angular/forms';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, NgControl, FormBuilder, Validators } from '@angular/forms';
import { Subject, merge } from 'rxjs';
import * as i2$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i2$2 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i1$1 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import { map } from 'rxjs/operators';
import * as i1$2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

/** @title Form field appearance variants */
class FormFieldAppearanceExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: FormFieldAppearanceExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.6", type: FormFieldAppearanceExample, isStandalone: true, selector: "form-field-appearance-example", ngImport: i0, template: "<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Fill form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Outline form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: FormFieldAppearanceExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-appearance-example', imports: [MatFormFieldModule, MatInputModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Fill form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Outline form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n" }]
        }] });

/** @title Form field with custom telephone number input control. */
class FormFieldCustomControlExample {
    form = new FormGroup({
        tel: new FormControl(null),
    });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: FormFieldCustomControlExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.6", type: FormFieldCustomControlExample, isStandalone: true, selector: "form-field-custom-control-example", ngImport: i0, template: "<div [formGroup]=\"form\">\n  <mat-form-field>\n    <mat-label>Phone number</mat-label>\n    <example-tel-input formControlName=\"tel\" required></example-tel-input>\n    <mat-icon matSuffix>phone</mat-icon>\n    <mat-hint>Include area code</mat-hint>\n  </mat-form-field>\n  <p>Entered value: {{form.valueChanges | async | json}}</p>\n</div>\n", dependencies: [{ kind: "ngmodule", type: i0.forwardRef(() => FormsModule) }, { kind: "directive", type: i0.forwardRef(() => i3$1.NgControlStatus), selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i0.forwardRef(() => i3$1.NgControlStatusGroup), selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i0.forwardRef(() => i3$1.RequiredValidator), selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: i0.forwardRef(() => ReactiveFormsModule) }, { kind: "directive", type: i0.forwardRef(() => i3$1.FormGroupDirective), selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i0.forwardRef(() => i3$1.FormControlName), selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: i0.forwardRef(() => MatFormFieldModule) }, { kind: "component", type: i0.forwardRef(() => i1.MatFormField), selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i0.forwardRef(() => i1.MatLabel), selector: "mat-label" }, { kind: "directive", type: i0.forwardRef(() => i1.MatHint), selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i0.forwardRef(() => i1.MatSuffix), selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i0.forwardRef(() => MyTelInput), selector: "example-tel-input", inputs: ["aria-describedby", "placeholder", "required", "disabled", "value"], outputs: ["valueChange"] }, { kind: "ngmodule", type: i0.forwardRef(() => MatIconModule) }, { kind: "component", type: i0.forwardRef(() => i3.MatIcon), selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "pipe", type: i0.forwardRef(() => AsyncPipe), name: "async" }, { kind: "pipe", type: i0.forwardRef(() => JsonPipe), name: "json" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: FormFieldCustomControlExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-custom-control-example', imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        forwardRef(() => MyTelInput),
                        MatIconModule,
                        AsyncPipe,
                        JsonPipe,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div [formGroup]=\"form\">\n  <mat-form-field>\n    <mat-label>Phone number</mat-label>\n    <example-tel-input formControlName=\"tel\" required></example-tel-input>\n    <mat-icon matSuffix>phone</mat-icon>\n    <mat-hint>Include area code</mat-hint>\n  </mat-form-field>\n  <p>Entered value: {{form.valueChanges | async | json}}</p>\n</div>\n" }]
        }] });
/** Data structure for holding telephone number. */
class MyTel {
    area;
    exchange;
    subscriber;
    constructor(area, exchange, subscriber) {
        this.area = area;
        this.exchange = exchange;
        this.subscriber = subscriber;
    }
}
/** Custom `MatFormFieldControl` for telephone number input. */
class MyTelInput {
    static nextId = 0;
    areaInput = viewChild.required('area');
    exchangeInput = viewChild.required('exchange');
    subscriberInput = viewChild.required('subscriber');
    ngControl = inject(NgControl, { optional: true, self: true });
    parts;
    stateChanges = new Subject();
    touched = signal(false);
    controlType = 'example-tel-input';
    id = `example-tel-input-${MyTelInput.nextId++}`;
    _userAriaDescribedBy = input('', { alias: 'aria-describedby' });
    _placeholder = input('', { alias: 'placeholder' });
    _required = input(false, {
        alias: 'required',
        transform: booleanAttribute,
    });
    _disabledByInput = input(false, {
        alias: 'disabled',
        transform: booleanAttribute,
    });
    _value = model(null, { alias: 'value' });
    onChange = (_) => { };
    onTouched = () => { };
    _formField = inject(MAT_FORM_FIELD, {
        optional: true,
    });
    _focused = signal(false);
    _disabledByCva = signal(false);
    _disabled = computed(() => this._disabledByInput() || this._disabledByCva());
    _focusMonitor = inject(FocusMonitor);
    _elementRef = inject(ElementRef);
    get focused() {
        return this._focused();
    }
    get empty() {
        const { value: { area, exchange, subscriber }, } = this.parts;
        return !area && !exchange && !subscriber;
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    get userAriaDescribedBy() {
        return this._userAriaDescribedBy();
    }
    get placeholder() {
        return this._placeholder();
    }
    get required() {
        return this._required();
    }
    get disabled() {
        return this._disabled();
    }
    get value() {
        return this._value();
    }
    get errorState() {
        return this.parts.invalid && this.touched();
    }
    constructor() {
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
        this.parts = inject(FormBuilder).group({
            area: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
            exchange: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
            subscriber: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
        });
        effect(() => {
            // Read signals to trigger effect.
            this._placeholder();
            this._required();
            this._disabled();
            this._focused();
            // Propagate state changes.
            untracked(() => this.stateChanges.next());
        });
        effect(() => {
            if (this._disabled()) {
                untracked(() => this.parts.disable());
            }
            else {
                untracked(() => this.parts.enable());
            }
        });
        effect(() => {
            const value = this._value() || new MyTel('', '', '');
            untracked(() => this.parts.setValue(value));
        });
        this.parts.statusChanges.pipe(takeUntilDestroyed()).subscribe(() => {
            this.stateChanges.next();
        });
        this.parts.valueChanges.pipe(takeUntilDestroyed()).subscribe(value => {
            const tel = this.parts.valid
                ? new MyTel(this.parts.value.area || '', this.parts.value.exchange || '', this.parts.value.subscriber || '')
                : null;
            this._updateValue(tel);
        });
    }
    ngOnDestroy() {
        this.stateChanges.complete();
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    onFocusIn() {
        if (!this._focused()) {
            this._focused.set(true);
        }
    }
    onFocusOut(event) {
        if (!this._elementRef.nativeElement.contains(event.relatedTarget)) {
            this.touched.set(true);
            this._focused.set(false);
            this.onTouched();
        }
    }
    autoFocusNext(control, nextElement) {
        if (!control.errors && nextElement) {
            this._focusMonitor.focusVia(nextElement, 'program');
        }
    }
    autoFocusPrev(control, prevElement) {
        if (control.value.length < 1) {
            this._focusMonitor.focusVia(prevElement, 'program');
        }
    }
    setDescribedByIds(ids) {
        const controlElement = this._elementRef.nativeElement.querySelector('.example-tel-input-container');
        controlElement.setAttribute('aria-describedby', ids.join(' '));
    }
    onContainerClick() {
        if (this.parts.controls.subscriber.valid) {
            this._focusMonitor.focusVia(this.subscriberInput(), 'program');
        }
        else if (this.parts.controls.exchange.valid) {
            this._focusMonitor.focusVia(this.subscriberInput(), 'program');
        }
        else if (this.parts.controls.area.valid) {
            this._focusMonitor.focusVia(this.exchangeInput(), 'program');
        }
        else {
            this._focusMonitor.focusVia(this.areaInput(), 'program');
        }
    }
    writeValue(tel) {
        this._updateValue(tel);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this._disabledByCva.set(isDisabled);
    }
    _handleInput(control, nextElement) {
        this.autoFocusNext(control, nextElement);
        this.onChange(this.value);
    }
    _updateValue(tel) {
        const current = this._value();
        if (tel === current ||
            (tel?.area === current?.area &&
                tel?.exchange === current?.exchange &&
                tel?.subscriber === current?.subscriber)) {
            return;
        }
        this._value.set(tel);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: MyTelInput, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "19.2.6", type: MyTelInput, isStandalone: true, selector: "example-tel-input", inputs: { _userAriaDescribedBy: { classPropertyName: "_userAriaDescribedBy", publicName: "aria-describedby", isSignal: true, isRequired: false, transformFunction: null }, _placeholder: { classPropertyName: "_placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, _required: { classPropertyName: "_required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, _disabledByInput: { classPropertyName: "_disabledByInput", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, _value: { classPropertyName: "_value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { _value: "valueChange" }, host: { properties: { "class.example-floating": "shouldLabelFloat", "id": "id" } }, providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], viewQueries: [{ propertyName: "areaInput", first: true, predicate: ["area"], descendants: true, isSignal: true }, { propertyName: "exchangeInput", first: true, predicate: ["exchange"], descendants: true, isSignal: true }, { propertyName: "subscriberInput", first: true, predicate: ["subscriber"], descendants: true, isSignal: true }], ngImport: i0, template: "<div\n  role=\"group\"\n  class=\"example-tel-input-container\"\n  [formGroup]=\"parts\"\n  [attr.aria-labelledby]=\"_formField?.getLabelId()\"\n  (focusin)=\"onFocusIn()\"\n  (focusout)=\"onFocusOut($event)\"\n>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"area\"\n    size=\"3\"\n    maxLength=\"3\"\n    aria-label=\"Area code\"\n    (input)=\"_handleInput(parts.controls.area, exchange)\"\n    #area\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"exchange\"\n    maxLength=\"3\"\n    size=\"3\"\n    aria-label=\"Exchange code\"\n    (input)=\"_handleInput(parts.controls.exchange, subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.controls.exchange, area)\"\n    #exchange\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"subscriber\"\n    maxLength=\"4\"\n    size=\"4\"\n    aria-label=\"Subscriber number\"\n    (input)=\"_handleInput(parts.controls.subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.controls.subscriber, exchange)\"\n    #subscriber\n  />\n</div>\n", styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n  color: currentcolor;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: MyTelInput, decorators: [{
            type: Component,
            args: [{ selector: 'example-tel-input', providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], host: {
                        '[class.example-floating]': 'shouldLabelFloat',
                        '[id]': 'id',
                    }, imports: [FormsModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  role=\"group\"\n  class=\"example-tel-input-container\"\n  [formGroup]=\"parts\"\n  [attr.aria-labelledby]=\"_formField?.getLabelId()\"\n  (focusin)=\"onFocusIn()\"\n  (focusout)=\"onFocusOut($event)\"\n>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"area\"\n    size=\"3\"\n    maxLength=\"3\"\n    aria-label=\"Area code\"\n    (input)=\"_handleInput(parts.controls.area, exchange)\"\n    #area\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"exchange\"\n    maxLength=\"3\"\n    size=\"3\"\n    aria-label=\"Exchange code\"\n    (input)=\"_handleInput(parts.controls.exchange, subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.controls.exchange, area)\"\n    #exchange\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"subscriber\"\n    maxLength=\"4\"\n    size=\"4\"\n    aria-label=\"Subscriber number\"\n    (input)=\"_handleInput(parts.controls.subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.controls.subscriber, exchange)\"\n    #subscriber\n  />\n</div>\n", styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n  color: currentcolor;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"] }]
        }], ctorParameters: () => [] });

/** @title Form field with error messages */
class FormFieldErrorExample {
    email = new FormControl('', [Validators.required, Validators.email]);
    errorMessage = signal('');
    constructor() {
        merge(this.email.statusChanges, this.email.valueChanges)
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.updateErrorMessage());
    }
    updateErrorMessage() {
        if (this.email.hasError('required')) {
            this.errorMessage.set('You must enter a value');
        }
        else if (this.email.hasError('email')) {
            this.errorMessage.set('Not a valid email');
        }
        else {
            this.errorMessage.set('');
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: FormFieldErrorExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.6", type: FormFieldErrorExample, isStandalone: true, selector: "form-field-error-example", ngImport: i0, template: "<div class=\"example-container\">\n  <mat-form-field>\n    <mat-label>Enter your email</mat-label>\n    <input\n      matInput\n      placeholder=\"pat@example.com\"\n      [formControl]=\"email\"\n      (blur)=\"updateErrorMessage()\"\n      required\n    />\n    @if (email.invalid) {\n      <mat-error>{{errorMessage()}}</mat-error>\n    }\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: FormFieldErrorExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-error-example', imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"example-container\">\n  <mat-form-field>\n    <mat-label>Enter your email</mat-label>\n    <input\n      matInput\n      placeholder=\"pat@example.com\"\n      [formControl]=\"email\"\n      (blur)=\"updateErrorMessage()\"\n      required\n    />\n    @if (email.invalid) {\n      <mat-error>{{errorMessage()}}</mat-error>\n    }\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"] }]
        }], ctorParameters: () => [] });

/**
 * @title Testing with MatFormFieldHarness
 */
class FormFieldHarnessExample {
    requiredControl = new FormControl('Initial value', [Validators.required]);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: FormFieldHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.6", type: FormFieldHarnessExample, isStandalone: true, selector: "form-field-harness-example", ngImport: i0, template: "<mat-form-field id=\"with-errors\">\n  <span class=\"custom-control\">Custom control harness</span>\n  <input matInput [formControl]=\"requiredControl\">\n\n  <mat-error>Error</mat-error>\n  <mat-hint align=\"start\">Hint</mat-hint>\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: FormFieldHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-harness-example', imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field id=\"with-errors\">\n  <span class=\"custom-control\">Custom control harness</span>\n  <input matInput [formControl]=\"requiredControl\">\n\n  <mat-error>Error</mat-error>\n  <mat-hint align=\"start\">Hint</mat-hint>\n</mat-form-field>\n" }]
        }] });

/** @title Form field with hints */
class FormFieldHintExample {
    value = signal('');
    onInput(event) {
        this.value.set(event.target.value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: FormFieldHintExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.6", type: FormFieldHintExample, isStandalone: true, selector: "form-field-hint-example", ngImport: i0, template: "<div class=\"example-container\">\n  <mat-form-field hintLabel=\"Max 10 characters\">\n    <mat-label>Enter some input</mat-label>\n    <input matInput #input maxlength=\"10\" placeholder=\"Ex. Nougat\" (input)=\"onInput($event)\" />\n    <mat-hint align=\"end\">{{value().length}}/10</mat-hint>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Select me</mat-label>\n    <mat-select>\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2$1.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i2$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: FormFieldHintExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-hint-example', imports: [MatFormFieldModule, MatInputModule, MatSelectModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"example-container\">\n  <mat-form-field hintLabel=\"Max 10 characters\">\n    <mat-label>Enter some input</mat-label>\n    <input matInput #input maxlength=\"10\" placeholder=\"Ex. Nougat\" (input)=\"onInput($event)\" />\n    <mat-hint align=\"end\">{{value().length}}/10</mat-hint>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Select me</mat-label>\n    <mat-select>\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"] }]
        }] });

/** @title Form field with label */
class FormFieldLabelExample {
    hideRequiredControl = new FormControl(false);
    floatLabelControl = new FormControl('auto');
    options = inject(FormBuilder).group({
        hideRequired: this.hideRequiredControl,
        floatLabel: this.floatLabelControl,
    });
    hideRequired = toSignal(this.hideRequiredControl.valueChanges);
    floatLabel = toSignal(this.floatLabelControl.valueChanges.pipe(map(v => v || 'auto')), { initialValue: 'auto' });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: FormFieldLabelExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.6", type: FormFieldLabelExample, isStandalone: true, selector: "form-field-label-example", ngImport: i0, template: "<div class=\"example-container\">\n  <form [formGroup]=\"options\">\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group [formControl]=\"floatLabelControl\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <div class=\"example-form-fields\">\n      <mat-form-field [hideRequiredMarker]=\"hideRequired()\" [floatLabel]=\"floatLabel()\">\n        <input matInput placeholder=\"Simple placeholder\" required />\n      </mat-form-field>\n\n      <mat-form-field [floatLabel]=\"floatLabel()\">\n        <mat-label>Both a label and a placeholder</mat-label>\n        <input matInput placeholder=\"Simple placeholder\" />\n      </mat-form-field>\n\n      <mat-form-field [hideRequiredMarker]=\"hideRequired()\" [floatLabel]=\"floatLabel()\">\n        <mat-select required>\n          <mat-option>-- None --</mat-option>\n          <mat-option value=\"option\">Option</mat-option>\n        </mat-select>\n        <mat-label><mat-icon>favorite</mat-icon> <strong> Fancy</strong> <em> label</em></mat-label>\n      </mat-form-field>\n    </div>\n  </form>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-container mat-form-field {\n  width: 220px;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 12px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n\n.example-form-fields {\n  display: flex;\n  align-items: flex-start;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i3$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2$2.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "aria-expanded", "aria-controls", "aria-owns", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "disabledInteractive", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i1$1.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required", "disabledInteractive"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i1$1.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color", "disabledInteractive"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2$1.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i2$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: FormFieldLabelExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-label-example', imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        MatCheckboxModule,
                        MatRadioModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSelectModule,
                        MatIconModule,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"example-container\">\n  <form [formGroup]=\"options\">\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group [formControl]=\"floatLabelControl\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <div class=\"example-form-fields\">\n      <mat-form-field [hideRequiredMarker]=\"hideRequired()\" [floatLabel]=\"floatLabel()\">\n        <input matInput placeholder=\"Simple placeholder\" required />\n      </mat-form-field>\n\n      <mat-form-field [floatLabel]=\"floatLabel()\">\n        <mat-label>Both a label and a placeholder</mat-label>\n        <input matInput placeholder=\"Simple placeholder\" />\n      </mat-form-field>\n\n      <mat-form-field [hideRequiredMarker]=\"hideRequired()\" [floatLabel]=\"floatLabel()\">\n        <mat-select required>\n          <mat-option>-- None --</mat-option>\n          <mat-option value=\"option\">Option</mat-option>\n        </mat-select>\n        <mat-label><mat-icon>favorite</mat-icon> <strong> Fancy</strong> <em> label</em></mat-label>\n      </mat-form-field>\n    </div>\n  </form>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-container mat-form-field {\n  width: 220px;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 12px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n\n.example-form-fields {\n  display: flex;\n  align-items: flex-start;\n}\n"] }]
        }] });

/** @title Simple form field */
class FormFieldOverviewExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: FormFieldOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.6", type: FormFieldOverviewExample, isStandalone: true, selector: "form-field-overview-example", ngImport: i0, template: "<mat-form-field>\n  <mat-label>Input</mat-label>\n  <input matInput>\n</mat-form-field>\n<mat-form-field>\n  <mat-label>Select</mat-label>\n  <mat-select>\n    <mat-option value=\"one\">First option</mat-option>\n    <mat-option value=\"two\">Second option</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n  <mat-label>Textarea</mat-label>\n  <textarea matInput></textarea>\n</mat-form-field>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2$1.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i2$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: FormFieldOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-overview-example', imports: [MatFormFieldModule, MatInputModule, MatSelectModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field>\n  <mat-label>Input</mat-label>\n  <input matInput>\n</mat-form-field>\n<mat-form-field>\n  <mat-label>Select</mat-label>\n  <mat-select>\n    <mat-option value=\"one\">First option</mat-option>\n    <mat-option value=\"two\">Second option</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n  <mat-label>Textarea</mat-label>\n  <textarea matInput></textarea>\n</mat-form-field>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n"] }]
        }] });

/** @title Form field with prefix & suffix */
class FormFieldPrefixSuffixExample {
    hide = signal(true);
    clickEvent(event) {
        this.hide.set(!this.hide());
        event.stopPropagation();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: FormFieldPrefixSuffixExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.6", type: FormFieldPrefixSuffixExample, isStandalone: true, selector: "form-field-prefix-suffix-example", ngImport: i0, template: "<div class=\"example-container\">\n  <mat-form-field>\n    <mat-label>Enter your password</mat-label>\n    <input matInput [type]=\"hide() ? 'password' : 'text'\" />\n    <button\n      mat-icon-button\n      matSuffix\n      (click)=\"clickEvent($event)\"\n      [attr.aria-label]=\"'Hide password'\"\n      [attr.aria-pressed]=\"hide()\"\n    >\n      <mat-icon>{{hide() ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </button>\n  </mat-form-field>\n\n  <mat-form-field floatLabel=\"always\">\n    <mat-label>Amount</mat-label>\n    <input matInput type=\"number\" class=\"example-right-align\" placeholder=\"0\" />\n    <span matTextPrefix>$&nbsp;</span>\n    <span matTextSuffix>.00</span>\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: FormFieldPrefixSuffixExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-prefix-suffix-example', imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"example-container\">\n  <mat-form-field>\n    <mat-label>Enter your password</mat-label>\n    <input matInput [type]=\"hide() ? 'password' : 'text'\" />\n    <button\n      mat-icon-button\n      matSuffix\n      (click)=\"clickEvent($event)\"\n      [attr.aria-label]=\"'Hide password'\"\n      [attr.aria-pressed]=\"hide()\"\n    >\n      <mat-icon>{{hide() ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </button>\n  </mat-form-field>\n\n  <mat-form-field floatLabel=\"always\">\n    <mat-label>Amount</mat-label>\n    <input matInput type=\"number\" class=\"example-right-align\" placeholder=\"0\" />\n    <span matTextPrefix>$&nbsp;</span>\n    <span matTextSuffix>.00</span>\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n"] }]
        }] });

export { FormFieldAppearanceExample, FormFieldCustomControlExample, FormFieldErrorExample, FormFieldHarnessExample, FormFieldHintExample, FormFieldLabelExample, FormFieldOverviewExample, FormFieldPrefixSuffixExample, MyTelInput };
//# sourceMappingURL=form-field.mjs.map
