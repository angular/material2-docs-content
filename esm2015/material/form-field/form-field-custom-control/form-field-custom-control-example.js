import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Inject, Input, Optional, Self, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
import { MAT_FORM_FIELD, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
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
    constructor(formBuilder, _focusMonitor, _elementRef, _formField, ngControl) {
        this._focusMonitor = _focusMonitor;
        this._elementRef = _elementRef;
        this._formField = _formField;
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
MyTelInput.ɵfac = function MyTelInput_Factory(t) { return new (t || MyTelInput)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i4.FocusMonitor), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(MAT_FORM_FIELD, 8), i0.ɵɵdirectiveInject(i1.NgControl, 10)); };
MyTelInput.ɵcmp = i0.ɵɵdefineComponent({ type: MyTelInput, selectors: [["example-tel-input"]], viewQuery: function MyTelInput_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
        i0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.areaInput = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.exchangeInput = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.subscriberInput = _t.first);
    } }, hostVars: 3, hostBindings: function MyTelInput_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵhostProperty("id", ctx.id);
        i0.ɵɵclassProp("example-floating", ctx.shouldLabelFloat);
    } }, inputs: { placeholder: "placeholder", required: "required", disabled: "disabled", value: "value" }, features: [i0.ɵɵProvidersFeature([{ provide: MatFormFieldControl, useExisting: MyTelInput }])], decls: 11, vars: 3, consts: [["role", "group", 1, "example-tel-input-container", 3, "formGroup"], ["formControlName", "area", "size", "3", "maxLength", "3", "aria-label", "Area code", 1, "example-tel-input-element", 3, "input"], ["area", ""], [1, "example-tel-input-spacer"], ["formControlName", "exchange", "maxLength", "3", "size", "3", "aria-label", "Exchange code", 1, "example-tel-input-element", 3, "input", "keyup.backspace"], ["exchange", ""], ["formControlName", "subscriber", "maxLength", "4", "size", "4", "aria-label", "Subscriber number", 1, "example-tel-input-element", 3, "input", "keyup.backspace"], ["subscriber", ""]], template: function MyTelInput_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵattribute("aria-labelledby", ctx._formField == null ? null : ctx._formField.getLabelId())("aria-describedby", ctx.describedBy);
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
                }
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i4.FocusMonitor }, { type: i0.ElementRef }, { type: i2.MatFormField, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_FORM_FIELD]
            }] }, { type: i1.NgControl, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9leGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUNSLElBQUksRUFDSixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLFdBQVcsRUFDWCxXQUFXLEVBQ1gsU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEVBQ1gsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUMsY0FBYyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQy9GLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7OztBQUU3QixvRUFB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Qiw4RkFBaUQscUNBQUE7O2tERnFEekMsVUFBVTtjQVZ0QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsQ0FBQztnQkFDdEUsSUFBSSxFQUFFO29CQUNKLDBCQUEwQixFQUFFLGtCQUFrQjtvQkFDOUMsTUFBTSxFQUFFLElBQUk7aUJBQ2I7YUFDRjs7c0JBb0ZJLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsY0FBYzs7c0JBQ2pDLFFBQVE7O3NCQUFJLElBQUk7O2tCQWpGbEIsU0FBUzttQkFBQyxNQUFNOztrQkFDaEIsU0FBUzttQkFBQyxVQUFVOztrQkFDcEIsU0FBUzttQkFBQyxZQUFZOztrQkF1QnRCLEtBQUs7O2tCQVVMLEtBQUs7O2tCQVVMLEtBQUs7O2tCQVdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZvY3VzTW9uaXRvcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1CdWlsZGVyLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUdyb3VwLFxuICBOZ0NvbnRyb2wsXG4gIFZhbGlkYXRvcnNcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNQVRfRk9STV9GSUVMRCwgTWF0Rm9ybUZpZWxkLCBNYXRGb3JtRmllbGRDb250cm9sfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbi8qKiBAdGl0bGUgRm9ybSBmaWVsZCB3aXRoIGN1c3RvbSB0ZWxlcGhvbmUgbnVtYmVyIGlucHV0IGNvbnRyb2wuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkQ3VzdG9tQ29udHJvbEV4YW1wbGUge1xuICBmb3JtOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICB0ZWw6IG5ldyBGb3JtQ29udHJvbChuZXcgTXlUZWwoJycsICcnLCAnJykpXG4gIH0pO1xufVxuXG4vKiogRGF0YSBzdHJ1Y3R1cmUgZm9yIGhvbGRpbmcgdGVsZXBob25lIG51bWJlci4gKi9cbmV4cG9ydCBjbGFzcyBNeVRlbCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhcmVhOiBzdHJpbmcsXG4gICAgcHVibGljIGV4Y2hhbmdlOiBzdHJpbmcsXG4gICAgcHVibGljIHN1YnNjcmliZXI6IHN0cmluZ1xuICApIHt9XG59XG5cbi8qKiBDdXN0b20gYE1hdEZvcm1GaWVsZENvbnRyb2xgIGZvciB0ZWxlcGhvbmUgbnVtYmVyIGlucHV0LiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhhbXBsZS10ZWwtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJ2V4YW1wbGUtdGVsLWlucHV0LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydleGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE1hdEZvcm1GaWVsZENvbnRyb2wsIHVzZUV4aXN0aW5nOiBNeVRlbElucHV0IH1dLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5leGFtcGxlLWZsb2F0aW5nXSc6ICdzaG91bGRMYWJlbEZsb2F0JyxcbiAgICAnW2lkXSc6ICdpZCcsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTXlUZWxJbnB1dFxuICBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBNYXRGb3JtRmllbGRDb250cm9sPE15VGVsPiwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5leHRJZCA9IDA7XG4gIEBWaWV3Q2hpbGQoJ2FyZWEnKSBhcmVhSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2V4Y2hhbmdlJykgZXhjaGFuZ2VJbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgQFZpZXdDaGlsZCgnc3Vic2NyaWJlcicpIHN1YnNjcmliZXJJbnB1dDogSFRNTElucHV0RWxlbWVudDtcblxuICBwYXJ0czogRm9ybUdyb3VwO1xuICBzdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBmb2N1c2VkID0gZmFsc2U7XG4gIGNvbnRyb2xUeXBlID0gJ2V4YW1wbGUtdGVsLWlucHV0JztcbiAgaWQgPSBgZXhhbXBsZS10ZWwtaW5wdXQtJHtNeVRlbElucHV0Lm5leHRJZCsrfWA7XG4gIGRlc2NyaWJlZEJ5ID0gJyc7XG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIGdldCBlbXB0eSgpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZTogeyBhcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlciB9XG4gICAgfSA9IHRoaXMucGFydHM7XG5cbiAgICByZXR1cm4gIWFyZWEgJiYgIWV4Y2hhbmdlICYmICFzdWJzY3JpYmVyO1xuICB9XG5cbiAgZ2V0IHNob3VsZExhYmVsRmxvYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNlZCB8fCAhdGhpcy5lbXB0eTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjtcbiAgfVxuICBzZXQgcGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsdWU7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5fZGlzYWJsZWQgPyB0aGlzLnBhcnRzLmRpc2FibGUoKSA6IHRoaXMucGFydHMuZW5hYmxlKCk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IE15VGVsIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMucGFydHMudmFsaWQpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmFsdWU6IHsgYXJlYSwgZXhjaGFuZ2UsIHN1YnNjcmliZXIgfVxuICAgICAgfSA9IHRoaXMucGFydHM7XG4gICAgICByZXR1cm4gbmV3IE15VGVsKGFyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgc2V0IHZhbHVlKHRlbDogTXlUZWwgfCBudWxsKSB7XG4gICAgY29uc3QgeyBhcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlciB9ID0gdGVsIHx8IG5ldyBNeVRlbCgnJywgJycsICcnKTtcbiAgICB0aGlzLnBhcnRzLnNldFZhbHVlKHsgYXJlYSwgZXhjaGFuZ2UsIHN1YnNjcmliZXIgfSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgZ2V0IGVycm9yU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFydHMuaW52YWxpZCAmJiB0aGlzLnBhcnRzLmRpcnR5O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0ZPUk1fRklFTEQpIHB1YmxpYyBfZm9ybUZpZWxkOiBNYXRGb3JtRmllbGQsXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wpIHtcblxuICAgIHRoaXMucGFydHMgPSBmb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBhcmVhOiBbXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMyldXG4gICAgICBdLFxuICAgICAgZXhjaGFuZ2U6IFtcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgzKV1cbiAgICAgIF0sXG4gICAgICBzdWJzY3JpYmVyOiBbXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoNCldXG4gICAgICBdXG4gICAgfSk7XG5cbiAgICBfZm9jdXNNb25pdG9yLm1vbml0b3IoX2VsZW1lbnRSZWYsIHRydWUpLnN1YnNjcmliZShvcmlnaW4gPT4ge1xuICAgICAgaWYgKHRoaXMuZm9jdXNlZCAmJiAhb3JpZ2luKSB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmZvY3VzZWQgPSAhIW9yaWdpbjtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm5nQ29udHJvbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBhdXRvRm9jdXNOZXh0KGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgbmV4dEVsZW1lbnQ/OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKCFjb250cm9sLmVycm9ycyAmJiBuZXh0RWxlbWVudCkge1xuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKG5leHRFbGVtZW50LCAncHJvZ3JhbScpO1xuICAgIH1cbiAgfVxuXG4gIGF1dG9Gb2N1c1ByZXYoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBwcmV2RWxlbWVudDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgIGlmIChjb250cm9sLnZhbHVlLmxlbmd0aCA8IDEpIHtcbiAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYShwcmV2RWxlbWVudCwgJ3Byb2dyYW0nKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLl9lbGVtZW50UmVmKTtcbiAgfVxuXG4gIHNldERlc2NyaWJlZEJ5SWRzKGlkczogc3RyaW5nW10pIHtcbiAgICB0aGlzLmRlc2NyaWJlZEJ5ID0gaWRzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIG9uQ29udGFpbmVyQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMucGFydHMuY29udHJvbHMuc3Vic2NyaWJlci52YWxpZCkge1xuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuc3Vic2NyaWJlcklucHV0LCAncHJvZ3JhbScpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wYXJ0cy5jb250cm9scy5leGNoYW5nZS52YWxpZCkge1xuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuc3Vic2NyaWJlcklucHV0LCAncHJvZ3JhbScpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wYXJ0cy5jb250cm9scy5hcmVhLnZhbGlkKSB7XG4gICAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5leGNoYW5nZUlucHV0LCAncHJvZ3JhbScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5hcmVhSW5wdXQsICdwcm9ncmFtJyk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh0ZWw6IE15VGVsIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB0ZWw7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgX2hhbmRsZUlucHV0KGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgbmV4dEVsZW1lbnQ/OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5hdXRvRm9jdXNOZXh0KGNvbnRyb2wsIG5leHRFbGVtZW50KTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBib29sZWFuIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JlcXVpcmVkOiBib29sZWFuIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcbn1cbiIsIjxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+UGhvbmUgbnVtYmVyPC9tYXQtbGFiZWw+XG4gICAgPGV4YW1wbGUtdGVsLWlucHV0IGZvcm1Db250cm9sTmFtZT1cInRlbFwiIHJlcXVpcmVkPjwvZXhhbXBsZS10ZWwtaW5wdXQ+XG4gICAgPG1hdC1pY29uIG1hdFN1ZmZpeD5waG9uZTwvbWF0LWljb24+XG4gICAgPG1hdC1oaW50PkluY2x1ZGUgYXJlYSBjb2RlPC9tYXQtaGludD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuIiwiPGRpdiByb2xlPVwiZ3JvdXBcIiBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LWNvbnRhaW5lclwiXG4gICAgIFtmb3JtR3JvdXBdPVwicGFydHNcIlxuICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiX2Zvcm1GaWVsZD8uZ2V0TGFiZWxJZCgpXCJcbiAgICAgW2F0dHIuYXJpYS1kZXNjcmliZWRieV09XCJkZXNjcmliZWRCeVwiPlxuICA8aW5wdXQgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1lbGVtZW50XCJcbiAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImFyZWFcIiBzaXplPVwiM1wiXG4gICAgICAgICBtYXhMZW5ndGg9XCIzXCJcbiAgICAgICAgIGFyaWEtbGFiZWw9XCJBcmVhIGNvZGVcIlxuICAgICAgICAgKGlucHV0KT1cIl9oYW5kbGVJbnB1dChwYXJ0cy5jb250cm9scy5hcmVhLCBleGNoYW5nZSlcIlxuICAgICAgICAgI2FyZWE+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtc3BhY2VyXCI+Jm5kYXNoOzwvc3Bhbj5cbiAgPGlucHV0IGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtZWxlbWVudFwiXG4gICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJleGNoYW5nZVwiXG4gICAgICAgICBtYXhMZW5ndGg9XCIzXCJcbiAgICAgICAgIHNpemU9XCIzXCJcbiAgICAgICAgIGFyaWEtbGFiZWw9XCJFeGNoYW5nZSBjb2RlXCJcbiAgICAgICAgIChpbnB1dCk9XCJfaGFuZGxlSW5wdXQocGFydHMuY29udHJvbHMuZXhjaGFuZ2UsIHN1YnNjcmliZXIpXCJcbiAgICAgICAgIChrZXl1cC5iYWNrc3BhY2UpPVwiYXV0b0ZvY3VzUHJldihwYXJ0cy5jb250cm9scy5leGNoYW5nZSwgYXJlYSlcIlxuICAgICAgICAgI2V4Y2hhbmdlPlxuICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LXNwYWNlclwiPiZuZGFzaDs8L3NwYW4+XG4gIDxpbnB1dCBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LWVsZW1lbnRcIlxuICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwic3Vic2NyaWJlclwiXG4gICAgICAgICBtYXhMZW5ndGg9XCI0XCJcbiAgICAgICAgIHNpemU9XCI0XCJcbiAgICAgICAgIGFyaWEtbGFiZWw9XCJTdWJzY3JpYmVyIG51bWJlclwiXG4gICAgICAgICAoaW5wdXQpPVwiX2hhbmRsZUlucHV0KHBhcnRzLmNvbnRyb2xzLnN1YnNjcmliZXIpXCJcbiAgICAgICAgIChrZXl1cC5iYWNrc3BhY2UpPVwiYXV0b0ZvY3VzUHJldihwYXJ0cy5jb250cm9scy5zdWJzY3JpYmVyLCBleGNoYW5nZSlcIlxuICAgICAgICAgI3N1YnNjcmliZXI+XG48L2Rpdj5cbiJdfQ==