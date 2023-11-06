import * as i0 from '@angular/core';
import { Component, forwardRef, Optional, Inject, Self, ViewChild, Input } from '@angular/core';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule, MAT_FORM_FIELD, MatFormFieldControl } from '@angular/material/form-field';
import * as i4 from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i1$1 from '@angular/forms';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { NgIf } from '@angular/common';
import * as i3$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i4$1 from '@angular/material/core';
import * as i3$2 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i2$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i3$3 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

/** @title Form field appearance variants */
class FormFieldAppearanceExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldAppearanceExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: FormFieldAppearanceExample, isStandalone: true, selector: "form-field-appearance-example", ngImport: i0, template: "<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Fill form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Outline form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldAppearanceExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-appearance-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatIconModule], template: "<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Fill form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Outline form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n" }]
        }] });

/** @title Form field with custom telephone number input control. */
class FormFieldCustomControlExample {
    constructor() {
        this.form = new FormGroup({
            tel: new FormControl(new MyTel('', '', '')),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldCustomControlExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: FormFieldCustomControlExample, isStandalone: true, selector: "form-field-custom-control-example", ngImport: i0, template: "<div [formGroup]=\"form\">\n  <mat-form-field>\n    <mat-label>Phone number</mat-label>\n    <example-tel-input formControlName=\"tel\" required></example-tel-input>\n    <mat-icon matSuffix>phone</mat-icon>\n    <mat-hint>Include area code</mat-hint>\n  </mat-form-field>\n</div>\n", dependencies: [{ kind: "ngmodule", type: i0.forwardRef(() => FormsModule) }, { kind: "directive", type: i0.forwardRef(() => i1$1.NgControlStatus), selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i0.forwardRef(() => i1$1.NgControlStatusGroup), selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i0.forwardRef(() => i1$1.RequiredValidator), selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: i0.forwardRef(() => ReactiveFormsModule) }, { kind: "directive", type: i0.forwardRef(() => i1$1.FormGroupDirective), selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i0.forwardRef(() => i1$1.FormControlName), selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: i0.forwardRef(() => MatFormFieldModule) }, { kind: "component", type: i0.forwardRef(() => i1.MatFormField), selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i0.forwardRef(() => i1.MatLabel), selector: "mat-label" }, { kind: "directive", type: i0.forwardRef(() => i1.MatHint), selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i0.forwardRef(() => i1.MatSuffix), selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i0.forwardRef(() => MyTelInput), selector: "example-tel-input", inputs: ["aria-describedby", "placeholder", "required", "disabled", "value"] }, { kind: "ngmodule", type: i0.forwardRef(() => MatIconModule) }, { kind: "component", type: i0.forwardRef(() => i3.MatIcon), selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldCustomControlExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-custom-control-example', standalone: true, imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        forwardRef(() => MyTelInput),
                        MatIconModule,
                    ], template: "<div [formGroup]=\"form\">\n  <mat-form-field>\n    <mat-label>Phone number</mat-label>\n    <example-tel-input formControlName=\"tel\" required></example-tel-input>\n    <mat-icon matSuffix>phone</mat-icon>\n    <mat-hint>Include area code</mat-hint>\n  </mat-form-field>\n</div>\n" }]
        }] });
/** Data structure for holding telephone number. */
class MyTel {
    constructor(area, exchange, subscriber) {
        this.area = area;
        this.exchange = exchange;
        this.subscriber = subscriber;
    }
}
/** Custom `MatFormFieldControl` for telephone number input. */
class MyTelInput {
    static { this.nextId = 0; }
    get empty() {
        const { value: { area, exchange, subscriber }, } = this.parts;
        return !area && !exchange && !subscriber;
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    get required() {
        return this._required;
    }
    set required(value) {
        this._required = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        this._disabled ? this.parts.disable() : this.parts.enable();
        this.stateChanges.next();
    }
    get value() {
        if (this.parts.valid) {
            const { value: { area, exchange, subscriber }, } = this.parts;
            return new MyTel(area, exchange, subscriber);
        }
        return null;
    }
    set value(tel) {
        const { area, exchange, subscriber } = tel || new MyTel('', '', '');
        this.parts.setValue({ area, exchange, subscriber });
        this.stateChanges.next();
    }
    get errorState() {
        return this.parts.invalid && this.touched;
    }
    constructor(formBuilder, _focusMonitor, _elementRef, _formField, ngControl) {
        this._focusMonitor = _focusMonitor;
        this._elementRef = _elementRef;
        this._formField = _formField;
        this.ngControl = ngControl;
        this.stateChanges = new Subject();
        this.focused = false;
        this.touched = false;
        this.controlType = 'example-tel-input';
        this.id = `example-tel-input-${MyTelInput.nextId++}`;
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this._required = false;
        this._disabled = false;
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
        this.parts = formBuilder.group({
            area: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
            exchange: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
            subscriber: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
        });
    }
    ngOnDestroy() {
        this.stateChanges.complete();
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    onFocusIn(event) {
        if (!this.focused) {
            this.focused = true;
            this.stateChanges.next();
        }
    }
    onFocusOut(event) {
        if (!this._elementRef.nativeElement.contains(event.relatedTarget)) {
            this.touched = true;
            this.focused = false;
            this.onTouched();
            this.stateChanges.next();
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
            this._focusMonitor.focusVia(this.subscriberInput, 'program');
        }
        else if (this.parts.controls.exchange.valid) {
            this._focusMonitor.focusVia(this.subscriberInput, 'program');
        }
        else if (this.parts.controls.area.valid) {
            this._focusMonitor.focusVia(this.exchangeInput, 'program');
        }
        else {
            this._focusMonitor.focusVia(this.areaInput, 'program');
        }
    }
    writeValue(tel) {
        this.value = tel;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    _handleInput(control, nextElement) {
        this.autoFocusNext(control, nextElement);
        this.onChange(this.value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: MyTelInput, deps: [{ token: i1$1.FormBuilder }, { token: i4.FocusMonitor }, { token: i0.ElementRef }, { token: MAT_FORM_FIELD, optional: true }, { token: i1$1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: MyTelInput, isStandalone: true, selector: "example-tel-input", inputs: { userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"], placeholder: "placeholder", required: "required", disabled: "disabled", value: "value" }, host: { properties: { "class.example-floating": "shouldLabelFloat", "id": "id" } }, providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], viewQueries: [{ propertyName: "areaInput", first: true, predicate: ["area"], descendants: true }, { propertyName: "exchangeInput", first: true, predicate: ["exchange"], descendants: true }, { propertyName: "subscriberInput", first: true, predicate: ["subscriber"], descendants: true }], ngImport: i0, template: "<div role=\"group\" class=\"example-tel-input-container\"\n     [formGroup]=\"parts\"\n     [attr.aria-labelledby]=\"_formField.getLabelId()\"\n     (focusin)=\"onFocusIn($event)\"\n     (focusout)=\"onFocusOut($event)\">\n  <input class=\"example-tel-input-element\"\n         formControlName=\"area\" size=\"3\"\n         maxLength=\"3\"\n         aria-label=\"Area code\"\n         (input)=\"_handleInput(parts.controls.area, exchange)\"\n         #area>\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\"\n         formControlName=\"exchange\"\n         maxLength=\"3\"\n         size=\"3\"\n         aria-label=\"Exchange code\"\n         (input)=\"_handleInput(parts.controls.exchange, subscriber)\"\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.exchange, area)\"\n         #exchange>\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\"\n         formControlName=\"subscriber\"\n         maxLength=\"4\"\n         size=\"4\"\n         aria-label=\"Subscriber number\"\n         (input)=\"_handleInput(parts.controls.subscriber)\"\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.subscriber, exchange)\"\n         #subscriber>\n</div>\n", styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n  color: currentcolor;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: MyTelInput, decorators: [{
            type: Component,
            args: [{ selector: 'example-tel-input', providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], host: {
                        '[class.example-floating]': 'shouldLabelFloat',
                        '[id]': 'id',
                    }, standalone: true, imports: [FormsModule, ReactiveFormsModule], template: "<div role=\"group\" class=\"example-tel-input-container\"\n     [formGroup]=\"parts\"\n     [attr.aria-labelledby]=\"_formField.getLabelId()\"\n     (focusin)=\"onFocusIn($event)\"\n     (focusout)=\"onFocusOut($event)\">\n  <input class=\"example-tel-input-element\"\n         formControlName=\"area\" size=\"3\"\n         maxLength=\"3\"\n         aria-label=\"Area code\"\n         (input)=\"_handleInput(parts.controls.area, exchange)\"\n         #area>\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\"\n         formControlName=\"exchange\"\n         maxLength=\"3\"\n         size=\"3\"\n         aria-label=\"Exchange code\"\n         (input)=\"_handleInput(parts.controls.exchange, subscriber)\"\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.exchange, area)\"\n         #exchange>\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\"\n         formControlName=\"subscriber\"\n         maxLength=\"4\"\n         size=\"4\"\n         aria-label=\"Subscriber number\"\n         (input)=\"_handleInput(parts.controls.subscriber)\"\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.subscriber, exchange)\"\n         #subscriber>\n</div>\n", styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n  color: currentcolor;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.FormBuilder }, { type: i4.FocusMonitor }, { type: i0.ElementRef }, { type: i1.MatFormField, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MAT_FORM_FIELD]
                }] }, { type: i1$1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }], propDecorators: { areaInput: [{
                type: ViewChild,
                args: ['area']
            }], exchangeInput: [{
                type: ViewChild,
                args: ['exchange']
            }], subscriberInput: [{
                type: ViewChild,
                args: ['subscriber']
            }], userAriaDescribedBy: [{
                type: Input,
                args: ['aria-describedby']
            }], placeholder: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], value: [{
                type: Input
            }] } });

/** @title Form field with error messages */
class FormFieldErrorExample {
    constructor() {
        this.email = new FormControl('', [Validators.required, Validators.email]);
    }
    getErrorMessage() {
        if (this.email.hasError('required')) {
            return 'You must enter a value';
        }
        return this.email.hasError('email') ? 'Not a valid email' : '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldErrorExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: FormFieldErrorExample, isStandalone: true, selector: "form-field-error-example", ngImport: i0, template: "<div class=\"example-container\">\n  <mat-form-field>\n    <mat-label>Enter your email</mat-label>\n    <input matInput placeholder=\"pat@example.com\" [formControl]=\"email\" required>\n    <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldErrorExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-error-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf], template: "<div class=\"example-container\">\n  <mat-form-field>\n    <mat-label>Enter your email</mat-label>\n    <input matInput placeholder=\"pat@example.com\" [formControl]=\"email\" required>\n    <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"] }]
        }] });

/** @title Form field with hints */
class FormFieldHintExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldHintExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: FormFieldHintExample, isStandalone: true, selector: "form-field-hint-example", ngImport: i0, template: "<div class=\"example-container\">\n  <mat-form-field hintLabel=\"Max 10 characters\">\n    <mat-label>Enter some input</mat-label>\n    <input matInput #input maxlength=\"10\" placeholder=\"Ex. Nougat\">\n    <mat-hint align=\"end\">{{input.value.length}}/10</mat-hint>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Select me</mat-label>\n    <mat-select>\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i3$1.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i4$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldHintExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-hint-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatSelectModule], template: "<div class=\"example-container\">\n  <mat-form-field hintLabel=\"Max 10 characters\">\n    <mat-label>Enter some input</mat-label>\n    <input matInput #input maxlength=\"10\" placeholder=\"Ex. Nougat\">\n    <mat-hint align=\"end\">{{input.value.length}}/10</mat-hint>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Select me</mat-label>\n    <mat-select>\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"] }]
        }] });

/** @title Form field with label */
class FormFieldLabelExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.hideRequiredControl = new FormControl(false);
        this.floatLabelControl = new FormControl('auto');
        this.options = this._formBuilder.group({
            hideRequired: this.hideRequiredControl,
            floatLabel: this.floatLabelControl,
        });
    }
    getFloatLabelValue() {
        return this.floatLabelControl.value || 'auto';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldLabelExample, deps: [{ token: i1$1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: FormFieldLabelExample, isStandalone: true, selector: "form-field-label-example", ngImport: i0, template: "<div class=\"example-container\">\n  <form [formGroup]=\"options\">\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group [formControl]=\"floatLabelControl\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <div class=\"example-form-fields\">\n      <mat-form-field\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\n          [floatLabel]=\"getFloatLabelValue()\">\n        <input matInput placeholder=\"Simple placeholder\" required>\n      </mat-form-field>\n\n      <mat-form-field [floatLabel]=\"getFloatLabelValue()\">\n        <mat-label>Both a label and a placeholder</mat-label>\n        <input matInput placeholder=\"Simple placeholder\">\n      </mat-form-field>\n\n      <mat-form-field\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\n          [floatLabel]=\"getFloatLabelValue()\">\n        <mat-select required>\n          <mat-option>-- None --</mat-option>\n          <mat-option value=\"option\">Option</mat-option>\n        </mat-select>\n        <mat-label><mat-icon>favorite</mat-icon> <strong> Fancy</strong> <em> label</em></mat-label>\n      </mat-form-field>\n    </div>\n  </form>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-container mat-form-field {\n  width: 220px;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 12px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n\n.example-form-fields {\n  display: flex;\n  align-items: flex-start;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2$1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i3$2.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i3$2.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i3$1.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i4$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldLabelExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-label-example', standalone: true, imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        MatCheckboxModule,
                        MatRadioModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSelectModule,
                        MatIconModule,
                    ], template: "<div class=\"example-container\">\n  <form [formGroup]=\"options\">\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group [formControl]=\"floatLabelControl\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <div class=\"example-form-fields\">\n      <mat-form-field\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\n          [floatLabel]=\"getFloatLabelValue()\">\n        <input matInput placeholder=\"Simple placeholder\" required>\n      </mat-form-field>\n\n      <mat-form-field [floatLabel]=\"getFloatLabelValue()\">\n        <mat-label>Both a label and a placeholder</mat-label>\n        <input matInput placeholder=\"Simple placeholder\">\n      </mat-form-field>\n\n      <mat-form-field\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\n          [floatLabel]=\"getFloatLabelValue()\">\n        <mat-select required>\n          <mat-option>-- None --</mat-option>\n          <mat-option value=\"option\">Option</mat-option>\n        </mat-select>\n        <mat-label><mat-icon>favorite</mat-icon> <strong> Fancy</strong> <em> label</em></mat-label>\n      </mat-form-field>\n    </div>\n  </form>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-container mat-form-field {\n  width: 220px;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 12px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n\n.example-form-fields {\n  display: flex;\n  align-items: flex-start;\n}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.FormBuilder }] });

/** @title Simple form field */
class FormFieldOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: FormFieldOverviewExample, isStandalone: true, selector: "form-field-overview-example", ngImport: i0, template: "<mat-form-field>\n  <mat-label>Input</mat-label>\n  <input matInput>\n</mat-form-field>\n<mat-form-field>\n  <mat-label>Select</mat-label>\n  <mat-select>\n    <mat-option value=\"one\">First option</mat-option>\n    <mat-option value=\"two\">Second option</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n  <mat-label>Textarea</mat-label>\n  <textarea matInput></textarea>\n</mat-form-field>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i3$1.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i4$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-overview-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatSelectModule], template: "<mat-form-field>\n  <mat-label>Input</mat-label>\n  <input matInput>\n</mat-form-field>\n<mat-form-field>\n  <mat-label>Select</mat-label>\n  <mat-select>\n    <mat-option value=\"one\">First option</mat-option>\n    <mat-option value=\"two\">Second option</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n  <mat-label>Textarea</mat-label>\n  <textarea matInput></textarea>\n</mat-form-field>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n"] }]
        }] });

/** @title Form field with prefix & suffix */
class FormFieldPrefixSuffixExample {
    constructor() {
        this.hide = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldPrefixSuffixExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: FormFieldPrefixSuffixExample, isStandalone: true, selector: "form-field-prefix-suffix-example", ngImport: i0, template: "<div class=\"example-container\">\n  <mat-form-field>\n    <mat-label>Enter your password</mat-label>\n    <input matInput [type]=\"hide ? 'password' : 'text'\">\n    <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </button>\n  </mat-form-field>\n\n  <mat-form-field floatLabel=\"always\">\n    <mat-label>Amount</mat-label>\n    <input matInput type=\"number\" class=\"example-right-align\" placeholder=\"0\">\n    <span matTextPrefix>$&nbsp;</span>\n    <span matTextSuffix>.00</span>\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3$3.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldPrefixSuffixExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-prefix-suffix-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule], template: "<div class=\"example-container\">\n  <mat-form-field>\n    <mat-label>Enter your password</mat-label>\n    <input matInput [type]=\"hide ? 'password' : 'text'\">\n    <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </button>\n  </mat-form-field>\n\n  <mat-form-field floatLabel=\"always\">\n    <mat-label>Amount</mat-label>\n    <input matInput type=\"number\" class=\"example-right-align\" placeholder=\"0\">\n    <span matTextPrefix>$&nbsp;</span>\n    <span matTextSuffix>.00</span>\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n"] }]
        }] });

/** @title Form field theming */
class FormFieldThemingExample {
    constructor() {
        this.colorControl = new FormControl('primary');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldThemingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: FormFieldThemingExample, isStandalone: true, selector: "form-field-theming-example", ngImport: i0, template: "<mat-form-field [color]=\"colorControl.value!\">\n  <mat-label>Color</mat-label>\n  <mat-select [formControl]=\"colorControl\">\n    <mat-option value=\"primary\">Primary</mat-option>\n    <mat-option value=\"accent\">Accent</mat-option>\n    <mat-option value=\"warn\">Warn</mat-option>\n  </mat-select>\n</mat-form-field>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i3$1.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i4$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldThemingExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-theming-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule], template: "<mat-form-field [color]=\"colorControl.value!\">\n  <mat-label>Color</mat-label>\n  <mat-select [formControl]=\"colorControl\">\n    <mat-option value=\"primary\">Primary</mat-option>\n    <mat-option value=\"accent\">Accent</mat-option>\n    <mat-option value=\"warn\">Warn</mat-option>\n  </mat-select>\n</mat-form-field>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"] }]
        }] });

/**
 * @title Testing with MatFormFieldHarness
 */
class FormFieldHarnessExample {
    constructor() {
        this.requiredControl = new FormControl('Initial value', [Validators.required]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: FormFieldHarnessExample, isStandalone: true, selector: "form-field-harness-example", ngImport: i0, template: "<mat-form-field id=\"with-errors\">\n  <span class=\"custom-control\">Custom control harness</span>\n  <input matInput [formControl]=\"requiredControl\">\n\n  <mat-error>Error</mat-error>\n  <mat-hint align=\"start\">Hint</mat-hint>\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-harness-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule], template: "<mat-form-field id=\"with-errors\">\n  <span class=\"custom-control\">Custom control harness</span>\n  <input matInput [formControl]=\"requiredControl\">\n\n  <mat-error>Error</mat-error>\n  <mat-hint align=\"start\">Hint</mat-hint>\n</mat-form-field>\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormFieldAppearanceExample, FormFieldCustomControlExample, FormFieldErrorExample, FormFieldHarnessExample, FormFieldHintExample, FormFieldLabelExample, FormFieldOverviewExample, FormFieldPrefixSuffixExample, FormFieldThemingExample, MyTelInput };
//# sourceMappingURL=form-field.mjs.map
