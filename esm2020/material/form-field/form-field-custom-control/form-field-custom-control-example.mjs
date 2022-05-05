import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Inject, Input, Optional, Self, ViewChild, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgControl, Validators, } from '@angular/forms';
import { MAT_FORM_FIELD, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/cdk/a11y";
/** @title Form field with custom telephone number input control. */
export class FormFieldCustomControlExample {
    constructor() {
        this.form = new FormGroup({
            tel: new FormControl(new MyTel('', '', '')),
        });
    }
}
FormFieldCustomControlExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: FormFieldCustomControlExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
FormFieldCustomControlExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-next.16", type: FormFieldCustomControlExample, selector: "form-field-custom-control-example", ngImport: i0, template: "<div [formGroup]=\"form\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Phone number</mat-label>\n    <example-tel-input formControlName=\"tel\" required></example-tel-input>\n    <mat-icon matSuffix>phone</mat-icon>\n    <mat-hint>Include area code</mat-hint>\n  </mat-form-field>\n</div>\n", dependencies: [{ kind: "component", type: i0.forwardRef(function () { return i1.MatFormField; }), selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i0.forwardRef(function () { return i1.MatHint; }), selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i0.forwardRef(function () { return i1.MatLabel; }), selector: "mat-label" }, { kind: "directive", type: i0.forwardRef(function () { return i1.MatSuffix; }), selector: "[matSuffix]" }, { kind: "component", type: i0.forwardRef(function () { return i2.MatIcon; }), selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i0.forwardRef(function () { return i3.NgControlStatus; }), selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i0.forwardRef(function () { return i3.NgControlStatusGroup; }), selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i0.forwardRef(function () { return i3.RequiredValidator; }), selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i0.forwardRef(function () { return i3.FormGroupDirective; }), selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i0.forwardRef(function () { return i3.FormControlName; }), selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i0.forwardRef(function () { return MyTelInput; }), selector: "example-tel-input", inputs: ["aria-describedby", "placeholder", "required", "disabled", "value"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: FormFieldCustomControlExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-custom-control-example', template: "<div [formGroup]=\"form\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Phone number</mat-label>\n    <example-tel-input formControlName=\"tel\" required></example-tel-input>\n    <mat-icon matSuffix>phone</mat-icon>\n    <mat-hint>Include area code</mat-hint>\n  </mat-form-field>\n</div>\n" }]
        }] });
/** Data structure for holding telephone number. */
export class MyTel {
    constructor(area, exchange, subscriber) {
        this.area = area;
        this.exchange = exchange;
        this.subscriber = subscriber;
    }
}
/** Custom `MatFormFieldControl` for telephone number input. */
export class MyTelInput {
    constructor(_formBuilder, _focusMonitor, _elementRef, _formField, ngControl) {
        this._formBuilder = _formBuilder;
        this._focusMonitor = _focusMonitor;
        this._elementRef = _elementRef;
        this._formField = _formField;
        this.ngControl = ngControl;
        this.parts = this._formBuilder.group({
            area: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
            exchange: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
            subscriber: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
        });
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
    get errorState() {
        return this.parts.invalid && this.touched;
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
}
MyTelInput.nextId = 0;
MyTelInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: MyTelInput, deps: [{ token: i3.FormBuilder }, { token: i4.FocusMonitor }, { token: i0.ElementRef }, { token: MAT_FORM_FIELD, optional: true }, { token: i3.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component });
MyTelInput.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-next.16", type: MyTelInput, selector: "example-tel-input", inputs: { userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"], placeholder: "placeholder", required: "required", disabled: "disabled", value: "value" }, host: { properties: { "class.example-floating": "shouldLabelFloat", "id": "id" } }, providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], viewQueries: [{ propertyName: "areaInput", first: true, predicate: ["area"], descendants: true }, { propertyName: "exchangeInput", first: true, predicate: ["exchange"], descendants: true }, { propertyName: "subscriberInput", first: true, predicate: ["subscriber"], descendants: true }], ngImport: i0, template: "<div role=\"group\" class=\"example-tel-input-container\"\n     [formGroup]=\"parts\"\n     [attr.aria-labelledby]=\"_formField?.getLabelId()\"\n     (focusin)=\"onFocusIn($event)\"\n     (focusout)=\"onFocusOut($event)\">\n  <input class=\"example-tel-input-element\"\n         formControlName=\"area\" size=\"3\"\n         maxLength=\"3\"\n         aria-label=\"Area code\"\n         (input)=\"_handleInput(parts.controls.area, exchange)\"\n         #area>\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\"\n         formControlName=\"exchange\"\n         maxLength=\"3\"\n         size=\"3\"\n         aria-label=\"Exchange code\"\n         (input)=\"_handleInput(parts.controls.exchange, subscriber)\"\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.exchange, area)\"\n         #exchange>\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\"\n         formControlName=\"subscriber\"\n         maxLength=\"4\"\n         size=\"4\"\n         aria-label=\"Subscriber number\"\n         (input)=\"_handleInput(parts.controls.subscriber)\"\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.subscriber, exchange)\"\n         #subscriber>\n</div>\n", styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"], dependencies: [{ kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: MyTelInput, decorators: [{
            type: Component,
            args: [{ selector: 'example-tel-input', providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], host: {
                        '[class.example-floating]': 'shouldLabelFloat',
                        '[id]': 'id',
                    }, template: "<div role=\"group\" class=\"example-tel-input-container\"\n     [formGroup]=\"parts\"\n     [attr.aria-labelledby]=\"_formField?.getLabelId()\"\n     (focusin)=\"onFocusIn($event)\"\n     (focusout)=\"onFocusOut($event)\">\n  <input class=\"example-tel-input-element\"\n         formControlName=\"area\" size=\"3\"\n         maxLength=\"3\"\n         aria-label=\"Area code\"\n         (input)=\"_handleInput(parts.controls.area, exchange)\"\n         #area>\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\"\n         formControlName=\"exchange\"\n         maxLength=\"3\"\n         size=\"3\"\n         aria-label=\"Exchange code\"\n         (input)=\"_handleInput(parts.controls.exchange, subscriber)\"\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.exchange, area)\"\n         #exchange>\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\"\n         formControlName=\"subscriber\"\n         maxLength=\"4\"\n         size=\"4\"\n         aria-label=\"Subscriber number\"\n         (input)=\"_handleInput(parts.controls.subscriber)\"\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.subscriber, exchange)\"\n         #subscriber>\n</div>\n", styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i3.FormBuilder }, { type: i4.FocusMonitor }, { type: i0.ElementRef }, { type: i1.MatFormField, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MAT_FORM_FIELD]
                }] }, { type: i3.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }]; }, propDecorators: { areaInput: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9leGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBZSxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzFFLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUNSLElBQUksRUFDSixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLFdBQVcsRUFDWCxXQUFXLEVBQ1gsU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEdBQ1gsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUMsY0FBYyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQy9GLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7OztBQUU3QixvRUFBb0U7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QUFDLE1BQU07Z0JBQ00sYUFBYTtzQkFBbkMsU0FBUzt1QkFBQyxVQUFVO2dCQUNJLGVBQWU7c0JBQXZDLFNBQVM7dUJBQUMsWUFBWTtnQkEyQkksbUJBQW1CO3NCQUE3QyxLQUFLO3VCQUFDLGtCQUFrQjtnQkFHckIsV0FBVztzQkFEZCxLQUFLO2dCQVdGLFFBQVE7c0JBRFgsS0FBSztnQkFXRixRQUFRO3NCQURYLEtBQUs7Z0JBWUYsS0FBSztzQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb2N1c01vbml0b3J9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7Qm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBYnN0cmFjdENvbnRyb2wsXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3JtQnVpbGRlcixcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1Hcm91cCxcbiAgTmdDb250cm9sLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01BVF9GT1JNX0ZJRUxELCBNYXRGb3JtRmllbGQsIE1hdEZvcm1GaWVsZENvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHdpdGggY3VzdG9tIHRlbGVwaG9uZSBudW1iZXIgaW5wdXQgY29udHJvbC4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRDdXN0b21Db250cm9sRXhhbXBsZSB7XG4gIGZvcm06IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xuICAgIHRlbDogbmV3IEZvcm1Db250cm9sKG5ldyBNeVRlbCgnJywgJycsICcnKSksXG4gIH0pO1xufVxuXG4vKiogRGF0YSBzdHJ1Y3R1cmUgZm9yIGhvbGRpbmcgdGVsZXBob25lIG51bWJlci4gKi9cbmV4cG9ydCBjbGFzcyBNeVRlbCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcmVhOiBzdHJpbmcsIHB1YmxpYyBleGNoYW5nZTogc3RyaW5nLCBwdWJsaWMgc3Vic2NyaWJlcjogc3RyaW5nKSB7fVxufVxuXG4vKiogQ3VzdG9tIGBNYXRGb3JtRmllbGRDb250cm9sYCBmb3IgdGVsZXBob25lIG51bWJlciBpbnB1dC4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4YW1wbGUtdGVsLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICdleGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZXhhbXBsZS10ZWwtaW5wdXQtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1hdEZvcm1GaWVsZENvbnRyb2wsIHVzZUV4aXN0aW5nOiBNeVRlbElucHV0fV0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmV4YW1wbGUtZmxvYXRpbmddJzogJ3Nob3VsZExhYmVsRmxvYXQnLFxuICAgICdbaWRdJzogJ2lkJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTXlUZWxJbnB1dCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBNYXRGb3JtRmllbGRDb250cm9sPE15VGVsPiwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5leHRJZCA9IDA7XG4gIEBWaWV3Q2hpbGQoJ2FyZWEnKSBhcmVhSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2V4Y2hhbmdlJykgZXhjaGFuZ2VJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgQFZpZXdDaGlsZCgnc3Vic2NyaWJlcicpIHN1YnNjcmliZXJJbnB1dDogSFRNTElucHV0RWxlbWVudDtcblxuICBwYXJ0cyA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICBhcmVhOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMyldXSxcbiAgICBleGNoYW5nZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMpXV0sXG4gICAgc3Vic2NyaWJlcjogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDQpXV0sXG4gIH0pO1xuICBzdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBmb2N1c2VkID0gZmFsc2U7XG4gIHRvdWNoZWQgPSBmYWxzZTtcbiAgY29udHJvbFR5cGUgPSAnZXhhbXBsZS10ZWwtaW5wdXQnO1xuICBpZCA9IGBleGFtcGxlLXRlbC1pbnB1dC0ke015VGVsSW5wdXQubmV4dElkKyt9YDtcbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgZ2V0IGVtcHR5KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlOiB7YXJlYSwgZXhjaGFuZ2UsIHN1YnNjcmliZXJ9LFxuICAgIH0gPSB0aGlzLnBhcnRzO1xuXG4gICAgcmV0dXJuICFhcmVhICYmICFleGNoYW5nZSAmJiAhc3Vic2NyaWJlcjtcbiAgfVxuXG4gIGdldCBzaG91bGRMYWJlbEZsb2F0KCkge1xuICAgIHJldHVybiB0aGlzLmZvY3VzZWQgfHwgIXRoaXMuZW1wdHk7XG4gIH1cblxuICBASW5wdXQoJ2FyaWEtZGVzY3JpYmVkYnknKSB1c2VyQXJpYURlc2NyaWJlZEJ5OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICB9XG4gIHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWx1ZTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG4gIHNldCByZXF1aXJlZCh2YWx1ZTogQm9vbGVhbklucHV0KSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBCb29sZWFuSW5wdXQpIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5fZGlzYWJsZWQgPyB0aGlzLnBhcnRzLmRpc2FibGUoKSA6IHRoaXMucGFydHMuZW5hYmxlKCk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IE15VGVsIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMucGFydHMudmFsaWQpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmFsdWU6IHthcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcn0sXG4gICAgICB9ID0gdGhpcy5wYXJ0cztcbiAgICAgIHJldHVybiBuZXcgTXlUZWwoYXJlYSEsIGV4Y2hhbmdlISwgc3Vic2NyaWJlciEpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBzZXQgdmFsdWUodGVsOiBNeVRlbCB8IG51bGwpIHtcbiAgICBjb25zdCB7YXJlYSwgZXhjaGFuZ2UsIHN1YnNjcmliZXJ9ID0gdGVsIHx8IG5ldyBNeVRlbCgnJywgJycsICcnKTtcbiAgICB0aGlzLnBhcnRzLnNldFZhbHVlKHthcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcn0pO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIGdldCBlcnJvclN0YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhcnRzLmludmFsaWQgJiYgdGhpcy50b3VjaGVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0ZPUk1fRklFTEQpIHB1YmxpYyBfZm9ybUZpZWxkOiBNYXRGb3JtRmllbGQsXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLl9lbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uRm9jdXNJbihldmVudDogRm9jdXNFdmVudCkge1xuICAgIGlmICghdGhpcy5mb2N1c2VkKSB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uRm9jdXNPdXQoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0IGFzIEVsZW1lbnQpKSB7XG4gICAgICB0aGlzLnRvdWNoZWQgPSB0cnVlO1xuICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIGF1dG9Gb2N1c05leHQoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBuZXh0RWxlbWVudD86IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoIWNvbnRyb2wuZXJyb3JzICYmIG5leHRFbGVtZW50KSB7XG4gICAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEobmV4dEVsZW1lbnQsICdwcm9ncmFtJyk7XG4gICAgfVxuICB9XG5cbiAgYXV0b0ZvY3VzUHJldihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIHByZXZFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKGNvbnRyb2wudmFsdWUubGVuZ3RoIDwgMSkge1xuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKHByZXZFbGVtZW50LCAncHJvZ3JhbScpO1xuICAgIH1cbiAgfVxuXG4gIHNldERlc2NyaWJlZEJ5SWRzKGlkczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBjb250cm9sRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5leGFtcGxlLXRlbC1pbnB1dC1jb250YWluZXInLFxuICAgICkhO1xuICAgIGNvbnRyb2xFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGlkcy5qb2luKCcgJykpO1xuICB9XG5cbiAgb25Db250YWluZXJDbGljaygpIHtcbiAgICBpZiAodGhpcy5wYXJ0cy5jb250cm9scy5zdWJzY3JpYmVyLnZhbGlkKSB7XG4gICAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5zdWJzY3JpYmVySW5wdXQsICdwcm9ncmFtJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBhcnRzLmNvbnRyb2xzLmV4Y2hhbmdlLnZhbGlkKSB7XG4gICAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5zdWJzY3JpYmVySW5wdXQsICdwcm9ncmFtJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBhcnRzLmNvbnRyb2xzLmFyZWEudmFsaWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLmV4Y2hhbmdlSW5wdXQsICdwcm9ncmFtJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLmFyZWFJbnB1dCwgJ3Byb2dyYW0nKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHRlbDogTXlUZWwgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRlbDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBfaGFuZGxlSW5wdXQoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBuZXh0RWxlbWVudD86IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmF1dG9Gb2N1c05leHQoY29udHJvbCwgbmV4dEVsZW1lbnQpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cbn1cbiIsIjxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+UGhvbmUgbnVtYmVyPC9tYXQtbGFiZWw+XG4gICAgPGV4YW1wbGUtdGVsLWlucHV0IGZvcm1Db250cm9sTmFtZT1cInRlbFwiIHJlcXVpcmVkPjwvZXhhbXBsZS10ZWwtaW5wdXQ+XG4gICAgPG1hdC1pY29uIG1hdFN1ZmZpeD5waG9uZTwvbWF0LWljb24+XG4gICAgPG1hdC1oaW50PkluY2x1ZGUgYXJlYSBjb2RlPC9tYXQtaGludD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuIiwiPGRpdiByb2xlPVwiZ3JvdXBcIiBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LWNvbnRhaW5lclwiXG4gICAgIFtmb3JtR3JvdXBdPVwicGFydHNcIlxuICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiX2Zvcm1GaWVsZD8uZ2V0TGFiZWxJZCgpXCJcbiAgICAgKGZvY3VzaW4pPVwib25Gb2N1c0luKCRldmVudClcIlxuICAgICAoZm9jdXNvdXQpPVwib25Gb2N1c091dCgkZXZlbnQpXCI+XG4gIDxpbnB1dCBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LWVsZW1lbnRcIlxuICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiYXJlYVwiIHNpemU9XCIzXCJcbiAgICAgICAgIG1heExlbmd0aD1cIjNcIlxuICAgICAgICAgYXJpYS1sYWJlbD1cIkFyZWEgY29kZVwiXG4gICAgICAgICAoaW5wdXQpPVwiX2hhbmRsZUlucHV0KHBhcnRzLmNvbnRyb2xzLmFyZWEsIGV4Y2hhbmdlKVwiXG4gICAgICAgICAjYXJlYT5cbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1zcGFjZXJcIj4mbmRhc2g7PC9zcGFuPlxuICA8aW5wdXQgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1lbGVtZW50XCJcbiAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImV4Y2hhbmdlXCJcbiAgICAgICAgIG1heExlbmd0aD1cIjNcIlxuICAgICAgICAgc2l6ZT1cIjNcIlxuICAgICAgICAgYXJpYS1sYWJlbD1cIkV4Y2hhbmdlIGNvZGVcIlxuICAgICAgICAgKGlucHV0KT1cIl9oYW5kbGVJbnB1dChwYXJ0cy5jb250cm9scy5leGNoYW5nZSwgc3Vic2NyaWJlcilcIlxuICAgICAgICAgKGtleXVwLmJhY2tzcGFjZSk9XCJhdXRvRm9jdXNQcmV2KHBhcnRzLmNvbnRyb2xzLmV4Y2hhbmdlLCBhcmVhKVwiXG4gICAgICAgICAjZXhjaGFuZ2U+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtc3BhY2VyXCI+Jm5kYXNoOzwvc3Bhbj5cbiAgPGlucHV0IGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtZWxlbWVudFwiXG4gICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzdWJzY3JpYmVyXCJcbiAgICAgICAgIG1heExlbmd0aD1cIjRcIlxuICAgICAgICAgc2l6ZT1cIjRcIlxuICAgICAgICAgYXJpYS1sYWJlbD1cIlN1YnNjcmliZXIgbnVtYmVyXCJcbiAgICAgICAgIChpbnB1dCk9XCJfaGFuZGxlSW5wdXQocGFydHMuY29udHJvbHMuc3Vic2NyaWJlcilcIlxuICAgICAgICAgKGtleXVwLmJhY2tzcGFjZSk9XCJhdXRvRm9jdXNQcmV2KHBhcnRzLmNvbnRyb2xzLnN1YnNjcmliZXIsIGV4Y2hhbmdlKVwiXG4gICAgICAgICAjc3Vic2NyaWJlcj5cbjwvZGl2PlxuIl19