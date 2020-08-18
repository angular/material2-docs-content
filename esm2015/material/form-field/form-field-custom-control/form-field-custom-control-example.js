import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Input, Optional, Self, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgControl, Validators, FormControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/cdk/a11y";
const _c0 = ["area"];
const _c1 = ["exchange"];
const _c2 = ["subscriber"];
/** @title Form field with custom telephone number input control. */
export class FormFieldCustomControlExample {
    constructor() {
        this.form = new FormGroup({
            tel: new FormControl(new MyTel('', '', ''))
        });
    }
}
FormFieldCustomControlExample.ɵfac = function FormFieldCustomControlExample_Factory(t) { return new (t || FormFieldCustomControlExample)(); };
FormFieldCustomControlExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldCustomControlExample, selectors: [["form-field-custom-control-example"]], decls: 9, vars: 1, consts: [[3, "formGroup"], ["appearance", "fill"], ["formControlName", "tel", "required", ""], ["matSuffix", ""]], template: function FormFieldCustomControlExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Phone number");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "example-tel-input", 2);
        i0.ɵɵelementStart(5, "mat-icon", 3);
        i0.ɵɵtext(6, "phone");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-hint");
        i0.ɵɵtext(8, "Include area code");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
    } }, directives: function () { return [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatFormField, i2.MatLabel, MyTelInput, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i3.MatIcon, i2.MatSuffix, i2.MatHint]; }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldCustomControlExample, [{
        type: Component,
        args: [{
                selector: 'form-field-custom-control-example',
                templateUrl: 'form-field-custom-control-example.html',
            }]
    }], null, null); })();
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
    constructor(formBuilder, _focusMonitor, _elementRef, ngControl) {
        this._focusMonitor = _focusMonitor;
        this._elementRef = _elementRef;
        this.ngControl = ngControl;
        this.stateChanges = new Subject();
        this.focused = false;
        this.controlType = 'example-tel-input';
        this.id = `example-tel-input-${MyTelInput.nextId++}`;
        this.describedBy = '';
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this._required = false;
        this._disabled = false;
        this.parts = formBuilder.group({
            area: [
                null,
                [Validators.required, Validators.minLength(3), Validators.maxLength(3)]
            ],
            exchange: [
                null,
                [Validators.required, Validators.minLength(3), Validators.maxLength(3)]
            ],
            subscriber: [
                null,
                [Validators.required, Validators.minLength(4), Validators.maxLength(4)]
            ]
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
        const { value: { area, exchange, subscriber } } = this.parts;
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
            const { value: { area, exchange, subscriber } } = this.parts;
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
        return this.parts.invalid && this.parts.dirty;
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
    ngOnDestroy() {
        this.stateChanges.complete();
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
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
MyTelInput.ɵfac = function MyTelInput_Factory(t) { return new (t || MyTelInput)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i4.FocusMonitor), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NgControl, 10)); };
MyTelInput.ɵcmp = i0.ɵɵdefineComponent({ type: MyTelInput, selectors: [["example-tel-input"]], viewQuery: function MyTelInput_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
        i0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.areaInput = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.exchangeInput = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.subscriberInput = _t.first);
    } }, hostVars: 4, hostBindings: function MyTelInput_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵhostProperty("id", ctx.id);
        i0.ɵɵattribute("aria-describedby", ctx.describedBy);
        i0.ɵɵclassProp("example-floating", ctx.shouldLabelFloat);
    } }, inputs: { placeholder: "placeholder", required: "required", disabled: "disabled", value: "value" }, features: [i0.ɵɵProvidersFeature([{ provide: MatFormFieldControl, useExisting: MyTelInput }])], decls: 11, vars: 1, consts: [[1, "example-tel-input-container", 3, "formGroup"], ["formControlName", "area", "size", "3", "maxLength", "3", "aria-label", "Area code", 1, "example-tel-input-element", 3, "input"], ["area", ""], [1, "example-tel-input-spacer"], ["formControlName", "exchange", "maxLength", "3", "size", "3", "aria-label", "Exchange code", 1, "example-tel-input-element", 3, "input", "keyup.backspace"], ["exchange", ""], ["formControlName", "subscriber", "maxLength", "4", "size", "4", "aria-label", "Subscriber number", 1, "example-tel-input-element", 3, "input", "keyup.backspace"], ["subscriber", ""]], template: function MyTelInput_Template(rf, ctx) { if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "input", 1, 2);
        i0.ɵɵlistener("input", function MyTelInput_Template_input_input_1_listener() { i0.ɵɵrestoreView(_r3); const _r1 = i0.ɵɵreference(6); return ctx._handleInput(ctx.parts.controls.area, _r1); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4, "\u2013");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "input", 4, 5);
        i0.ɵɵlistener("input", function MyTelInput_Template_input_input_5_listener() { i0.ɵɵrestoreView(_r3); const _r2 = i0.ɵɵreference(10); return ctx._handleInput(ctx.parts.controls.exchange, _r2); })("keyup.backspace", function MyTelInput_Template_input_keyup_backspace_5_listener() { i0.ɵɵrestoreView(_r3); const _r0 = i0.ɵɵreference(2); return ctx.autoFocusPrev(ctx.parts.controls.exchange, _r0); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "span", 3);
        i0.ɵɵtext(8, "\u2013");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "input", 6, 7);
        i0.ɵɵlistener("input", function MyTelInput_Template_input_input_9_listener() { return ctx._handleInput(ctx.parts.controls.subscriber); })("keyup.backspace", function MyTelInput_Template_input_keyup_backspace_9_listener() { i0.ɵɵrestoreView(_r3); const _r1 = i0.ɵɵreference(6); return ctx.autoFocusPrev(ctx.parts.controls.subscriber, _r1); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.parts);
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName], styles: [".example-tel-input-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.example-tel-input-element[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n.example-floating[_nghost-%COMP%]   .example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 1;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MyTelInput, [{
        type: Component,
        args: [{
                selector: 'example-tel-input',
                templateUrl: 'example-tel-input-example.html',
                styleUrls: ['example-tel-input-example.css'],
                providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }],
                host: {
                    '[class.example-floating]': 'shouldLabelFloat',
                    '[id]': 'id',
                    '[attr.aria-describedby]': 'describedBy'
                }
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i4.FocusMonitor }, { type: i0.ElementRef }, { type: i1.NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }]; }, { areaInput: [{
            type: ViewChild,
            args: ['area']
        }], exchangeInput: [{
            type: ViewChild,
            args: ['exchange']
        }], subscriberInput: [{
            type: ViewChild,
            args: ['subscriber']
        }], placeholder: [{
            type: Input
        }], required: [{
            type: Input
        }], disabled: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9leGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFFVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFFWixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7OztBQUU3QixvRUFBb0U7QUFLcEUsTUFBTSxPQUFPLDZCQUE2QjtJQUox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U0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsQ0FBQztnQkFDdEUsSUFBSSxFQUFFO29CQUNKLDBCQUEwQixFQUFFLGtCQUFrQjtvQkFDOUMsTUFBTSxFQUFFLElBQUk7b0JBQ1oseUJBQXlCLEVBQUUsYUFBYTtpQkFDekM7YUFDRjs7c0JBb0ZJLFFBQVE7O3NCQUFJLElBQUk7O2tCQWhGbEIsU0FBUzttQkFBQyxNQUFNOztrQkFDaEIsU0FBUzttQkFBQyxVQUFVOztrQkFDcEIsU0FBUzttQkFBQyxZQUFZOztrQkF1QnRCLEtBQUs7O2tCQVVMLEtBQUs7O2tCQVVMLEtBQUs7O2tCQVdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZvY3VzTW9uaXRvcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBTZWxmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGb3JtQnVpbGRlcixcbiAgRm9ybUdyb3VwLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgTmdDb250cm9sLFxuICBWYWxpZGF0b3JzLFxuICBGb3JtQ29udHJvbCxcbiAgQWJzdHJhY3RDb250cm9sXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBjdXN0b20gdGVsZXBob25lIG51bWJlciBpbnB1dCBjb250cm9sLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlIHtcbiAgZm9ybTogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgdGVsOiBuZXcgRm9ybUNvbnRyb2wobmV3IE15VGVsKCcnLCAnJywgJycpKVxuICB9KTtcbn1cblxuLyoqIERhdGEgc3RydWN0dXJlIGZvciBob2xkaW5nIHRlbGVwaG9uZSBudW1iZXIuICovXG5leHBvcnQgY2xhc3MgTXlUZWwge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYXJlYTogc3RyaW5nLFxuICAgIHB1YmxpYyBleGNoYW5nZTogc3RyaW5nLFxuICAgIHB1YmxpYyBzdWJzY3JpYmVyOiBzdHJpbmdcbiAgKSB7fVxufVxuXG4vKiogQ3VzdG9tIGBNYXRGb3JtRmllbGRDb250cm9sYCBmb3IgdGVsZXBob25lIG51bWJlciBpbnB1dC4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4YW1wbGUtdGVsLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICdleGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZXhhbXBsZS10ZWwtaW5wdXQtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBNYXRGb3JtRmllbGRDb250cm9sLCB1c2VFeGlzdGluZzogTXlUZWxJbnB1dCB9XSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZXhhbXBsZS1mbG9hdGluZ10nOiAnc2hvdWxkTGFiZWxGbG9hdCcsXG4gICAgJ1tpZF0nOiAnaWQnLFxuICAgICdbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XSc6ICdkZXNjcmliZWRCeSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBNeVRlbElucHV0XG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE1hdEZvcm1GaWVsZENvbnRyb2w8TXlUZWw+LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmV4dElkID0gMDtcbiAgQFZpZXdDaGlsZCgnYXJlYScpIGFyZWFJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgQFZpZXdDaGlsZCgnZXhjaGFuZ2UnKSBleGNoYW5nZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICBAVmlld0NoaWxkKCdzdWJzY3JpYmVyJykgc3Vic2NyaWJlcklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIHBhcnRzOiBGb3JtR3JvdXA7XG4gIHN0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGZvY3VzZWQgPSBmYWxzZTtcbiAgY29udHJvbFR5cGUgPSAnZXhhbXBsZS10ZWwtaW5wdXQnO1xuICBpZCA9IGBleGFtcGxlLXRlbC1pbnB1dC0ke015VGVsSW5wdXQubmV4dElkKyt9YDtcbiAgZGVzY3JpYmVkQnkgPSAnJztcbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgZ2V0IGVtcHR5KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlOiB7IGFyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyIH1cbiAgICB9ID0gdGhpcy5wYXJ0cztcblxuICAgIHJldHVybiAhYXJlYSAmJiAhZXhjaGFuZ2UgJiYgIXN1YnNjcmliZXI7XG4gIH1cblxuICBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkIHx8ICF0aGlzLmVtcHR5O1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICB9XG4gIHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWx1ZTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cbiAgcHJpdmF0ZSBfcmVxdWlyZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLl9kaXNhYmxlZCA/IHRoaXMucGFydHMuZGlzYWJsZSgpIDogdGhpcy5wYXJ0cy5lbmFibGUoKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogTXlUZWwgfCBudWxsIHtcbiAgICBpZiAodGhpcy5wYXJ0cy52YWxpZCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB2YWx1ZTogeyBhcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlciB9XG4gICAgICB9ID0gdGhpcy5wYXJ0cztcbiAgICAgIHJldHVybiBuZXcgTXlUZWwoYXJlYSwgZXhjaGFuZ2UsIHN1YnNjcmliZXIpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBzZXQgdmFsdWUodGVsOiBNeVRlbCB8IG51bGwpIHtcbiAgICBjb25zdCB7IGFyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyIH0gPSB0ZWwgfHwgbmV3IE15VGVsKCcnLCAnJywgJycpO1xuICAgIHRoaXMucGFydHMuc2V0VmFsdWUoeyBhcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlciB9KTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBnZXQgZXJyb3JTdGF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cy5pbnZhbGlkICYmIHRoaXMucGFydHMuZGlydHk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBfZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2xcbiAgKSB7XG4gICAgdGhpcy5wYXJ0cyA9IGZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGFyZWE6IFtcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgzKV1cbiAgICAgIF0sXG4gICAgICBleGNoYW5nZTogW1xuICAgICAgICBudWxsLFxuICAgICAgICBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMpXVxuICAgICAgXSxcbiAgICAgIHN1YnNjcmliZXI6IFtcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLCBWYWxpZGF0b3JzLm1heExlbmd0aCg0KV1cbiAgICAgIF1cbiAgICB9KTtcblxuICAgIF9mb2N1c01vbml0b3IubW9uaXRvcihfZWxlbWVudFJlZiwgdHJ1ZSkuc3Vic2NyaWJlKG9yaWdpbiA9PiB7XG4gICAgICBpZiAodGhpcy5mb2N1c2VkICYmICFvcmlnaW4pIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9jdXNlZCA9ICEhb3JpZ2luO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubmdDb250cm9sICE9IG51bGwpIHtcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIGF1dG9Gb2N1c05leHQoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBuZXh0RWxlbWVudD86IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoIWNvbnRyb2wuZXJyb3JzICYmIG5leHRFbGVtZW50KSB7XG4gICAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEobmV4dEVsZW1lbnQsICdwcm9ncmFtJyk7XG4gICAgfVxuICB9XG5cbiAgYXV0b0ZvY3VzUHJldihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIHByZXZFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKGNvbnRyb2wudmFsdWUubGVuZ3RoIDwgMSkge1xuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKHByZXZFbGVtZW50LCAncHJvZ3JhbScpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuX2VsZW1lbnRSZWYpO1xuICB9XG5cbiAgc2V0RGVzY3JpYmVkQnlJZHMoaWRzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuZGVzY3JpYmVkQnkgPSBpZHMuam9pbignICcpO1xuICB9XG5cbiAgb25Db250YWluZXJDbGljaygpIHtcbiAgICBpZiAodGhpcy5wYXJ0cy5jb250cm9scy5zdWJzY3JpYmVyLnZhbGlkKSB7XG4gICAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5zdWJzY3JpYmVySW5wdXQsICdwcm9ncmFtJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBhcnRzLmNvbnRyb2xzLmV4Y2hhbmdlLnZhbGlkKSB7XG4gICAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5zdWJzY3JpYmVySW5wdXQsICdwcm9ncmFtJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBhcnRzLmNvbnRyb2xzLmFyZWEudmFsaWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLmV4Y2hhbmdlSW5wdXQsICdwcm9ncmFtJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLmFyZWFJbnB1dCwgJ3Byb2dyYW0nKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHRlbDogTXlUZWwgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRlbDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBfaGFuZGxlSW5wdXQoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBuZXh0RWxlbWVudD86IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmF1dG9Gb2N1c05leHQoY29udHJvbCwgbmV4dEVsZW1lbnQpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IGJvb2xlYW4gfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVxdWlyZWQ6IGJvb2xlYW4gfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xufVxuIiwiPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgPG1hdC1sYWJlbD5QaG9uZSBudW1iZXI8L21hdC1sYWJlbD5cbiAgICA8ZXhhbXBsZS10ZWwtaW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwidGVsXCIgcmVxdWlyZWQ+PC9leGFtcGxlLXRlbC1pbnB1dD5cbiAgICA8bWF0LWljb24gbWF0U3VmZml4PnBob25lPC9tYXQtaWNvbj5cbiAgICA8bWF0LWhpbnQ+SW5jbHVkZSBhcmVhIGNvZGU8L21hdC1oaW50PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG4iLCI8ZGl2IFtmb3JtR3JvdXBdPVwicGFydHNcIiBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LWNvbnRhaW5lclwiPlxuICA8aW5wdXQgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1lbGVtZW50XCJcbiAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImFyZWFcIiBzaXplPVwiM1wiXG4gICAgICAgICBtYXhMZW5ndGg9XCIzXCJcbiAgICAgICAgIGFyaWEtbGFiZWw9XCJBcmVhIGNvZGVcIlxuICAgICAgICAgKGlucHV0KT1cIl9oYW5kbGVJbnB1dChwYXJ0cy5jb250cm9scy5hcmVhLCBleGNoYW5nZSlcIlxuICAgICAgICAgI2FyZWE+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtc3BhY2VyXCI+Jm5kYXNoOzwvc3Bhbj5cbiAgPGlucHV0IGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtZWxlbWVudFwiXG4gICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJleGNoYW5nZVwiXG4gICAgICAgICBtYXhMZW5ndGg9XCIzXCJcbiAgICAgICAgIHNpemU9XCIzXCJcbiAgICAgICAgIGFyaWEtbGFiZWw9XCJFeGNoYW5nZSBjb2RlXCJcbiAgICAgICAgIChpbnB1dCk9XCJfaGFuZGxlSW5wdXQocGFydHMuY29udHJvbHMuZXhjaGFuZ2UsIHN1YnNjcmliZXIpXCJcbiAgICAgICAgIChrZXl1cC5iYWNrc3BhY2UpPVwiYXV0b0ZvY3VzUHJldihwYXJ0cy5jb250cm9scy5leGNoYW5nZSwgYXJlYSlcIlxuICAgICAgICAgI2V4Y2hhbmdlPlxuICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LXNwYWNlclwiPiZuZGFzaDs8L3NwYW4+XG4gIDxpbnB1dCBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LWVsZW1lbnRcIlxuICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwic3Vic2NyaWJlclwiXG4gICAgICAgICBtYXhMZW5ndGg9XCI0XCJcbiAgICAgICAgIHNpemU9XCI0XCJcbiAgICAgICAgIGFyaWEtbGFiZWw9XCJTdWJzY3JpYmVyIG51bWJlclwiXG4gICAgICAgICAoaW5wdXQpPVwiX2hhbmRsZUlucHV0KHBhcnRzLmNvbnRyb2xzLnN1YnNjcmliZXIpXCJcbiAgICAgICAgIChrZXl1cC5iYWNrc3BhY2UpPVwiYXV0b0ZvY3VzUHJldihwYXJ0cy5jb250cm9scy5zdWJzY3JpYmVyLCBleGNoYW5nZSlcIlxuICAgICAgICAgI3N1YnNjcmliZXI+XG48L2Rpdj5cbiJdfQ==