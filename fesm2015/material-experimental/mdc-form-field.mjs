import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, Optional, Inject, Self, Input, NgModule } from '@angular/core';
import * as i3 from '@angular/forms';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/material-experimental/mdc-form-field';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material-experimental/mdc-form-field';
import * as i2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MAT_FORM_FIELD } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import * as i4 from '@angular/cdk/a11y';

/** @title Form field with custom telephone number input control. */
class MdcFormFieldCustomControlExample {
}
MdcFormFieldCustomControlExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MdcFormFieldCustomControlExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
MdcFormFieldCustomControlExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: MdcFormFieldCustomControlExample, selector: "mdc-form-field-custom-control-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Phone number</mat-label>\n  <example-tel-input required></example-tel-input>\n  <mat-icon matSuffix>phone</mat-icon>\n  <mat-hint>Include area code</mat-hint>\n</mat-form-field>\n", components: [{ type: i0.forwardRef(function () { return i1.MatFormField; }), selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "hintLabel"], exportAs: ["matFormField"] }, { type: i0.forwardRef(function () { return MyTelInput; }), selector: "example-tel-input", inputs: ["aria-describedby", "placeholder", "required", "disabled", "value"] }, { type: i0.forwardRef(function () { return i2.MatIcon; }), selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i0.forwardRef(function () { return i1.MatLabel; }), selector: "mat-label" }, { type: i0.forwardRef(function () { return i1.MatSuffix; }), selector: "[matSuffix], [matIconSuffix], [matTextSuffix]" }, { type: i0.forwardRef(function () { return i1.MatHint; }), selector: "mat-hint", inputs: ["align", "id"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MdcFormFieldCustomControlExample, decorators: [{
            type: Component,
            args: [{ selector: 'mdc-form-field-custom-control-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Phone number</mat-label>\n  <example-tel-input required></example-tel-input>\n  <mat-icon matSuffix>phone</mat-icon>\n  <mat-hint>Include area code</mat-hint>\n</mat-form-field>\n" }]
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
    constructor(formBuilder, _focusMonitor, _elementRef, _formField, ngControl) {
        this._focusMonitor = _focusMonitor;
        this._elementRef = _elementRef;
        this._formField = _formField;
        this.ngControl = ngControl;
        this.stateChanges = new Subject();
        this.focused = false;
        this.errorState = false;
        this.controlType = 'example-tel-input';
        this.id = `example-tel-input-${MyTelInput.nextId++}`;
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this._required = false;
        this._disabled = false;
        this.parts = formBuilder.group({
            area: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
            exchange: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
            subscriber: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
        });
        _focusMonitor.monitor(_elementRef, true).subscribe(origin => {
            if (this.focused && !origin) {
                this.onTouched();
            }
            this.focused = !!origin;
            this.stateChanges.next();
        });
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
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
    ngOnDestroy() {
        this.stateChanges.complete();
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    setDescribedByIds(ids) {
        const controlElement = this._elementRef.nativeElement.querySelector('.example-tel-input-container');
        controlElement.setAttribute('aria-describedby', ids.join(' '));
    }
    onContainerClick(event) {
        if (event.target.tagName.toLowerCase() != 'input') {
            this._elementRef.nativeElement.querySelector('input').focus();
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
    _handleInput() {
        this.onChange(this.value);
    }
}
MyTelInput.nextId = 0;
MyTelInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MyTelInput, deps: [{ token: i3.FormBuilder }, { token: i4.FocusMonitor }, { token: i0.ElementRef }, { token: MAT_FORM_FIELD, optional: true }, { token: i3.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component });
MyTelInput.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: MyTelInput, selector: "example-tel-input", inputs: { userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"], placeholder: "placeholder", required: "required", disabled: "disabled", value: "value" }, host: { properties: { "class.example-floating": "shouldLabelFloat", "id": "id" } }, providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], ngImport: i0, template: "<div role=\"group\" class=\"example-tel-input-container\"\n     [formGroup]=\"parts\"\n     [attr.aria-labelledby]=\"_formField?.getLabelId()\">\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"area\" size=\"3\"\n    aria-label=\"Area code\"\n    (input)=\"_handleInput()\">\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"exchange\"\n    size=\"3\"\n    aria-label=\"Exchange code\"\n    (input)=\"_handleInput()\">\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"subscriber\"\n    size=\"4\"\n    aria-label=\"Subscriber number\"\n    (input)=\"_handleInput()\">\n</div>\n", styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"], directives: [{ type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MyTelInput, decorators: [{
            type: Component,
            args: [{ selector: 'example-tel-input', providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], host: {
                        '[class.example-floating]': 'shouldLabelFloat',
                        '[id]': 'id',
                    }, template: "<div role=\"group\" class=\"example-tel-input-container\"\n     [formGroup]=\"parts\"\n     [attr.aria-labelledby]=\"_formField?.getLabelId()\">\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"area\" size=\"3\"\n    aria-label=\"Area code\"\n    (input)=\"_handleInput()\">\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"exchange\"\n    size=\"3\"\n    aria-label=\"Exchange code\"\n    (input)=\"_handleInput()\">\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"subscriber\"\n    size=\"4\"\n    aria-label=\"Subscriber number\"\n    (input)=\"_handleInput()\">\n</div>\n", styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"] }]
        }], ctorParameters: function () {
        return [{ type: i3.FormBuilder }, { type: i4.FocusMonitor }, { type: i0.ElementRef }, { type: i1.MatFormField, decorators: [{
                        type: Optional
                    }, {
                        type: Inject,
                        args: [MAT_FORM_FIELD]
                    }] }, { type: i3.NgControl, decorators: [{
                        type: Optional
                    }, {
                        type: Self
                    }] }];
    }, propDecorators: { userAriaDescribedBy: [{
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

const EXAMPLES = [MdcFormFieldCustomControlExample];
class MdcFormFieldExamplesModule {
}
MdcFormFieldExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MdcFormFieldExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MdcFormFieldExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MdcFormFieldExamplesModule, declarations: [MdcFormFieldCustomControlExample, MyTelInput], imports: [CommonModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule], exports: [MdcFormFieldCustomControlExample, MyTelInput] });
MdcFormFieldExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MdcFormFieldExamplesModule, imports: [[CommonModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: MdcFormFieldExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule],
                    declarations: [...EXAMPLES, MyTelInput],
                    exports: [...EXAMPLES, MyTelInput],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { MdcFormFieldCustomControlExample, MdcFormFieldExamplesModule, MyTelInput };
//# sourceMappingURL=mdc-form-field.mjs.map
