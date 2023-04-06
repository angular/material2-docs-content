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
class FormFieldCustomControlExample {
    constructor() {
        this.form = new FormGroup({
            tel: new FormControl(new MyTel('', '', '')),
        });
    }
}
FormFieldCustomControlExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: FormFieldCustomControlExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
FormFieldCustomControlExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: FormFieldCustomControlExample, selector: "form-field-custom-control-example", ngImport: i0, template: "<div [formGroup]=\"form\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Phone number</mat-label>\n    <example-tel-input formControlName=\"tel\" required></example-tel-input>\n    <mat-icon matSuffix>phone</mat-icon>\n    <mat-hint>Include area code</mat-hint>\n  </mat-form-field>\n</div>\n", dependencies: [{ kind: "component", type: i0.forwardRef(function () { return i1.MatFormField; }), selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i0.forwardRef(function () { return i1.MatLabel; }), selector: "mat-label" }, { kind: "directive", type: i0.forwardRef(function () { return i1.MatHint; }), selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i0.forwardRef(function () { return i1.MatSuffix; }), selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i0.forwardRef(function () { return i2.MatIcon; }), selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i0.forwardRef(function () { return i3.NgControlStatus; }), selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i0.forwardRef(function () { return i3.NgControlStatusGroup; }), selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i0.forwardRef(function () { return i3.RequiredValidator; }), selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i0.forwardRef(function () { return i3.FormGroupDirective; }), selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i0.forwardRef(function () { return i3.FormControlName; }), selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i0.forwardRef(function () { return MyTelInput; }), selector: "example-tel-input", inputs: ["aria-describedby", "placeholder", "required", "disabled", "value"] }] });
export { FormFieldCustomControlExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: FormFieldCustomControlExample, decorators: [{
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
class MyTelInput {
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
}
MyTelInput.nextId = 0;
MyTelInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: MyTelInput, deps: [{ token: i3.FormBuilder }, { token: i4.FocusMonitor }, { token: i0.ElementRef }, { token: MAT_FORM_FIELD, optional: true }, { token: i3.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component });
MyTelInput.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: MyTelInput, selector: "example-tel-input", inputs: { userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"], placeholder: "placeholder", required: "required", disabled: "disabled", value: "value" }, host: { properties: { "class.example-floating": "shouldLabelFloat", "id": "id" } }, providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], viewQueries: [{ propertyName: "areaInput", first: true, predicate: ["area"], descendants: true }, { propertyName: "exchangeInput", first: true, predicate: ["exchange"], descendants: true }, { propertyName: "subscriberInput", first: true, predicate: ["subscriber"], descendants: true }], ngImport: i0, template: "<div role=\"group\" class=\"example-tel-input-container\"\n     [formGroup]=\"parts\"\n     [attr.aria-labelledby]=\"_formField.getLabelId()\"\n     (focusin)=\"onFocusIn($event)\"\n     (focusout)=\"onFocusOut($event)\">\n  <input class=\"example-tel-input-element\"\n         formControlName=\"area\" size=\"3\"\n         maxLength=\"3\"\n         aria-label=\"Area code\"\n         (input)=\"_handleInput(parts.controls.area, exchange)\"\n         #area>\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\"\n         formControlName=\"exchange\"\n         maxLength=\"3\"\n         size=\"3\"\n         aria-label=\"Exchange code\"\n         (input)=\"_handleInput(parts.controls.exchange, subscriber)\"\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.exchange, area)\"\n         #exchange>\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\"\n         formControlName=\"subscriber\"\n         maxLength=\"4\"\n         size=\"4\"\n         aria-label=\"Subscriber number\"\n         (input)=\"_handleInput(parts.controls.subscriber)\"\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.subscriber, exchange)\"\n         #subscriber>\n</div>\n", styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"], dependencies: [{ kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] });
export { MyTelInput };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: MyTelInput, decorators: [{
            type: Component,
            args: [{ selector: 'example-tel-input', providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], host: {
                        '[class.example-floating]': 'shouldLabelFloat',
                        '[id]': 'id',
                    }, template: "<div role=\"group\" class=\"example-tel-input-container\"\n     [formGroup]=\"parts\"\n     [attr.aria-labelledby]=\"_formField.getLabelId()\"\n     (focusin)=\"onFocusIn($event)\"\n     (focusout)=\"onFocusOut($event)\">\n  <input class=\"example-tel-input-element\"\n         formControlName=\"area\" size=\"3\"\n         maxLength=\"3\"\n         aria-label=\"Area code\"\n         (input)=\"_handleInput(parts.controls.area, exchange)\"\n         #area>\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\"\n         formControlName=\"exchange\"\n         maxLength=\"3\"\n         size=\"3\"\n         aria-label=\"Exchange code\"\n         (input)=\"_handleInput(parts.controls.exchange, subscriber)\"\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.exchange, area)\"\n         #exchange>\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\"\n         formControlName=\"subscriber\"\n         maxLength=\"4\"\n         size=\"4\"\n         aria-label=\"Subscriber number\"\n         (input)=\"_handleInput(parts.controls.subscriber)\"\n         (keyup.backspace)=\"autoFocusPrev(parts.controls.subscriber, exchange)\"\n         #subscriber>\n</div>\n", styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9leGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBZSxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzFFLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUNSLElBQUksRUFDSixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLFdBQVcsRUFDWCxXQUFXLEVBQ1gsU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEdBQ1gsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUMsY0FBYyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQy9GLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7OztBQUU3QixvRUFBb0U7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QkFDTSxhQUFhO3NCQUFuQyxTQUFTO3VCQUFDLFVBQVU7Z0JBQ0ksZUFBZTtzQkFBdkMsU0FBUzt1QkFBQyxZQUFZO2dCQTJCSSxtQkFBbUI7c0JBQTdDLEtBQUs7dUJBQUMsa0JBQWtCO2dCQUdyQixXQUFXO3NCQURkLEtBQUs7Z0JBV0YsUUFBUTtzQkFEWCxLQUFLO2dCQVdGLFFBQVE7c0JBRFgsS0FBSztnQkFZRixLQUFLO3NCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZvY3VzTW9uaXRvcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgU2VsZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1CdWlsZGVyLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUdyb3VwLFxuICBOZ0NvbnRyb2wsXG4gIFZhbGlkYXRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TUFUX0ZPUk1fRklFTEQsIE1hdEZvcm1GaWVsZCwgTWF0Rm9ybUZpZWxkQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBjdXN0b20gdGVsZXBob25lIG51bWJlciBpbnB1dCBjb250cm9sLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlIHtcbiAgZm9ybTogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgdGVsOiBuZXcgRm9ybUNvbnRyb2wobmV3IE15VGVsKCcnLCAnJywgJycpKSxcbiAgfSk7XG59XG5cbi8qKiBEYXRhIHN0cnVjdHVyZSBmb3IgaG9sZGluZyB0ZWxlcGhvbmUgbnVtYmVyLiAqL1xuZXhwb3J0IGNsYXNzIE15VGVsIHtcbiAgY29uc3RydWN0b3IocHVibGljIGFyZWE6IHN0cmluZywgcHVibGljIGV4Y2hhbmdlOiBzdHJpbmcsIHB1YmxpYyBzdWJzY3JpYmVyOiBzdHJpbmcpIHt9XG59XG5cbi8qKiBDdXN0b20gYE1hdEZvcm1GaWVsZENvbnRyb2xgIGZvciB0ZWxlcGhvbmUgbnVtYmVyIGlucHV0LiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhhbXBsZS10ZWwtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJ2V4YW1wbGUtdGVsLWlucHV0LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydleGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTWF0Rm9ybUZpZWxkQ29udHJvbCwgdXNlRXhpc3Rpbmc6IE15VGVsSW5wdXR9XSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZXhhbXBsZS1mbG9hdGluZ10nOiAnc2hvdWxkTGFiZWxGbG9hdCcsXG4gICAgJ1tpZF0nOiAnaWQnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBNeVRlbElucHV0IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE1hdEZvcm1GaWVsZENvbnRyb2w8TXlUZWw+LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmV4dElkID0gMDtcbiAgQFZpZXdDaGlsZCgnYXJlYScpIGFyZWFJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgQFZpZXdDaGlsZCgnZXhjaGFuZ2UnKSBleGNoYW5nZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICBAVmlld0NoaWxkKCdzdWJzY3JpYmVyJykgc3Vic2NyaWJlcklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIHBhcnRzOiBGb3JtR3JvdXA8e1xuICAgIGFyZWE6IEZvcm1Db250cm9sPHN0cmluZyB8IG51bGw+O1xuICAgIGV4Y2hhbmdlOiBGb3JtQ29udHJvbDxzdHJpbmcgfCBudWxsPjtcbiAgICBzdWJzY3JpYmVyOiBGb3JtQ29udHJvbDxzdHJpbmcgfCBudWxsPjtcbiAgfT47XG4gIHN0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGZvY3VzZWQgPSBmYWxzZTtcbiAgdG91Y2hlZCA9IGZhbHNlO1xuICBjb250cm9sVHlwZSA9ICdleGFtcGxlLXRlbC1pbnB1dCc7XG4gIGlkID0gYGV4YW1wbGUtdGVsLWlucHV0LSR7TXlUZWxJbnB1dC5uZXh0SWQrK31gO1xuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBnZXQgZW1wdHkoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWU6IHthcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcn0sXG4gICAgfSA9IHRoaXMucGFydHM7XG5cbiAgICByZXR1cm4gIWFyZWEgJiYgIWV4Y2hhbmdlICYmICFzdWJzY3JpYmVyO1xuICB9XG5cbiAgZ2V0IHNob3VsZExhYmVsRmxvYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNlZCB8fCAhdGhpcy5lbXB0eTtcbiAgfVxuXG4gIEBJbnB1dCgnYXJpYS1kZXNjcmliZWRieScpIHVzZXJBcmlhRGVzY3JpYmVkQnk6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gIH1cbiAgc2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gIH1cbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBCb29sZWFuSW5wdXQpIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IEJvb2xlYW5JbnB1dCkge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLl9kaXNhYmxlZCA/IHRoaXMucGFydHMuZGlzYWJsZSgpIDogdGhpcy5wYXJ0cy5lbmFibGUoKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogTXlUZWwgfCBudWxsIHtcbiAgICBpZiAodGhpcy5wYXJ0cy52YWxpZCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB2YWx1ZToge2FyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyfSxcbiAgICAgIH0gPSB0aGlzLnBhcnRzO1xuICAgICAgcmV0dXJuIG5ldyBNeVRlbChhcmVhISwgZXhjaGFuZ2UhLCBzdWJzY3JpYmVyISk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHNldCB2YWx1ZSh0ZWw6IE15VGVsIHwgbnVsbCkge1xuICAgIGNvbnN0IHthcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcn0gPSB0ZWwgfHwgbmV3IE15VGVsKCcnLCAnJywgJycpO1xuICAgIHRoaXMucGFydHMuc2V0VmFsdWUoe2FyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyfSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgZ2V0IGVycm9yU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFydHMuaW52YWxpZCAmJiB0aGlzLnRvdWNoZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBfZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfRk9STV9GSUVMRCkgcHVibGljIF9mb3JtRmllbGQ6IE1hdEZvcm1GaWVsZCxcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgKSB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICE9IG51bGwpIHtcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMucGFydHMgPSBmb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBhcmVhOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMyldXSxcbiAgICAgIGV4Y2hhbmdlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMyldXSxcbiAgICAgIHN1YnNjcmliZXI6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLCBWYWxpZGF0b3JzLm1heExlbmd0aCg0KV1dLFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgICB0aGlzLl9mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5fZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkZvY3VzSW4oZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZm9jdXNlZCkge1xuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBvbkZvY3VzT3V0KGV2ZW50OiBGb2N1c0V2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCBhcyBFbGVtZW50KSkge1xuICAgICAgdGhpcy50b3VjaGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBhdXRvRm9jdXNOZXh0KGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgbmV4dEVsZW1lbnQ/OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKCFjb250cm9sLmVycm9ycyAmJiBuZXh0RWxlbWVudCkge1xuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKG5leHRFbGVtZW50LCAncHJvZ3JhbScpO1xuICAgIH1cbiAgfVxuXG4gIGF1dG9Gb2N1c1ByZXYoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBwcmV2RWxlbWVudDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgIGlmIChjb250cm9sLnZhbHVlLmxlbmd0aCA8IDEpIHtcbiAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYShwcmV2RWxlbWVudCwgJ3Byb2dyYW0nKTtcbiAgICB9XG4gIH1cblxuICBzZXREZXNjcmliZWRCeUlkcyhpZHM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgY29udHJvbEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcuZXhhbXBsZS10ZWwtaW5wdXQtY29udGFpbmVyJyxcbiAgICApITtcbiAgICBjb250cm9sRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBpZHMuam9pbignICcpKTtcbiAgfVxuXG4gIG9uQ29udGFpbmVyQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMucGFydHMuY29udHJvbHMuc3Vic2NyaWJlci52YWxpZCkge1xuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuc3Vic2NyaWJlcklucHV0LCAncHJvZ3JhbScpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wYXJ0cy5jb250cm9scy5leGNoYW5nZS52YWxpZCkge1xuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuc3Vic2NyaWJlcklucHV0LCAncHJvZ3JhbScpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wYXJ0cy5jb250cm9scy5hcmVhLnZhbGlkKSB7XG4gICAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5leGNoYW5nZUlucHV0LCAncHJvZ3JhbScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5hcmVhSW5wdXQsICdwcm9ncmFtJyk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh0ZWw6IE15VGVsIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB0ZWw7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgX2hhbmRsZUlucHV0KGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgbmV4dEVsZW1lbnQ/OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5hdXRvRm9jdXNOZXh0KGNvbnRyb2wsIG5leHRFbGVtZW50KTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG59XG4iLCI8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPlBob25lIG51bWJlcjwvbWF0LWxhYmVsPlxuICAgIDxleGFtcGxlLXRlbC1pbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ0ZWxcIiByZXF1aXJlZD48L2V4YW1wbGUtdGVsLWlucHV0PlxuICAgIDxtYXQtaWNvbiBtYXRTdWZmaXg+cGhvbmU8L21hdC1pY29uPlxuICAgIDxtYXQtaGludD5JbmNsdWRlIGFyZWEgY29kZTwvbWF0LWhpbnQ+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cbiIsIjxkaXYgcm9sZT1cImdyb3VwXCIgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1jb250YWluZXJcIlxuICAgICBbZm9ybUdyb3VwXT1cInBhcnRzXCJcbiAgICAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cIl9mb3JtRmllbGQuZ2V0TGFiZWxJZCgpXCJcbiAgICAgKGZvY3VzaW4pPVwib25Gb2N1c0luKCRldmVudClcIlxuICAgICAoZm9jdXNvdXQpPVwib25Gb2N1c091dCgkZXZlbnQpXCI+XG4gIDxpbnB1dCBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LWVsZW1lbnRcIlxuICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiYXJlYVwiIHNpemU9XCIzXCJcbiAgICAgICAgIG1heExlbmd0aD1cIjNcIlxuICAgICAgICAgYXJpYS1sYWJlbD1cIkFyZWEgY29kZVwiXG4gICAgICAgICAoaW5wdXQpPVwiX2hhbmRsZUlucHV0KHBhcnRzLmNvbnRyb2xzLmFyZWEsIGV4Y2hhbmdlKVwiXG4gICAgICAgICAjYXJlYT5cbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1zcGFjZXJcIj4mbmRhc2g7PC9zcGFuPlxuICA8aW5wdXQgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1lbGVtZW50XCJcbiAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImV4Y2hhbmdlXCJcbiAgICAgICAgIG1heExlbmd0aD1cIjNcIlxuICAgICAgICAgc2l6ZT1cIjNcIlxuICAgICAgICAgYXJpYS1sYWJlbD1cIkV4Y2hhbmdlIGNvZGVcIlxuICAgICAgICAgKGlucHV0KT1cIl9oYW5kbGVJbnB1dChwYXJ0cy5jb250cm9scy5leGNoYW5nZSwgc3Vic2NyaWJlcilcIlxuICAgICAgICAgKGtleXVwLmJhY2tzcGFjZSk9XCJhdXRvRm9jdXNQcmV2KHBhcnRzLmNvbnRyb2xzLmV4Y2hhbmdlLCBhcmVhKVwiXG4gICAgICAgICAjZXhjaGFuZ2U+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtc3BhY2VyXCI+Jm5kYXNoOzwvc3Bhbj5cbiAgPGlucHV0IGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtZWxlbWVudFwiXG4gICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzdWJzY3JpYmVyXCJcbiAgICAgICAgIG1heExlbmd0aD1cIjRcIlxuICAgICAgICAgc2l6ZT1cIjRcIlxuICAgICAgICAgYXJpYS1sYWJlbD1cIlN1YnNjcmliZXIgbnVtYmVyXCJcbiAgICAgICAgIChpbnB1dCk9XCJfaGFuZGxlSW5wdXQocGFydHMuY29udHJvbHMuc3Vic2NyaWJlcilcIlxuICAgICAgICAgKGtleXVwLmJhY2tzcGFjZSk9XCJhdXRvRm9jdXNQcmV2KHBhcnRzLmNvbnRyb2xzLnN1YnNjcmliZXIsIGV4Y2hhbmdlKVwiXG4gICAgICAgICAjc3Vic2NyaWJlcj5cbjwvZGl2PlxuIl19