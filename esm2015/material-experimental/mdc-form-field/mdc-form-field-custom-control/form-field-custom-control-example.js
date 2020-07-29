import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Inject, Input, Optional, Self } from '@angular/core';
import { FormBuilder, NgControl, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldControl } from '@angular/material-experimental/mdc-form-field';
import { MAT_FORM_FIELD } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material-experimental/mdc-form-field";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/cdk/a11y";
/** @title Form field with custom telephone number input control. */
export class MdcFormFieldCustomControlExample {
}
MdcFormFieldCustomControlExample.ɵfac = function MdcFormFieldCustomControlExample_Factory(t) { return new (t || MdcFormFieldCustomControlExample)(); };
MdcFormFieldCustomControlExample.ɵcmp = i0.ɵɵdefineComponent({ type: MdcFormFieldCustomControlExample, selectors: [["mdc-form-field-custom-control-example"]], decls: 8, vars: 0, consts: [["required", ""], ["matSuffix", ""]], template: function MdcFormFieldCustomControlExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Phone number");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "example-tel-input", 0);
        i0.ɵɵelementStart(4, "mat-icon", 1);
        i0.ɵɵtext(5, "phone");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-hint");
        i0.ɵɵtext(7, "Include area code");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: function () { return [i1.MatFormField, i1.MatLabel, MyTelInput, i2.MatIcon, i1.MatSuffix, i1.MatHint]; }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MdcFormFieldCustomControlExample, [{
        type: Component,
        args: [{
                selector: 'mdc-form-field-custom-control-example',
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
        this.errorState = false;
        this.controlType = 'example-tel-input';
        this.id = `example-tel-input-${MyTelInput.nextId++}`;
        this.describedBy = '';
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
        const { value: { area, exchange, subscriber } } = this.parts;
        return !area && !exchange && !subscriber;
    }
    get shouldLabelFloat() { return this.focused || !this.empty; }
    get placeholder() { return this._placeholder; }
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    get required() { return this._required; }
    set required(value) {
        this._required = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    get disabled() { return this._disabled; }
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
    ngOnDestroy() {
        this.stateChanges.complete();
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
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
MyTelInput.ɵfac = function MyTelInput_Factory(t) { return new (t || MyTelInput)(i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.FocusMonitor), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(MAT_FORM_FIELD, 8), i0.ɵɵdirectiveInject(i3.NgControl, 10)); };
MyTelInput.ɵcmp = i0.ɵɵdefineComponent({ type: MyTelInput, selectors: [["example-tel-input"]], hostVars: 3, hostBindings: function MyTelInput_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵhostProperty("id", ctx.id);
        i0.ɵɵclassProp("example-floating", ctx.shouldLabelFloat);
    } }, inputs: { placeholder: "placeholder", required: "required", disabled: "disabled", value: "value" }, features: [i0.ɵɵProvidersFeature([{ provide: MatFormFieldControl, useExisting: MyTelInput }])], decls: 8, vars: 3, consts: [["role", "group", 1, "example-tel-input-container", 3, "formGroup"], ["formControlName", "area", "size", "3", "aria-label", "Area code", 1, "example-tel-input-element", 3, "input"], [1, "example-tel-input-spacer"], ["formControlName", "exchange", "size", "3", "aria-label", "Exchange code", 1, "example-tel-input-element", 3, "input"], ["formControlName", "subscriber", "size", "4", "aria-label", "Subscriber number", 1, "example-tel-input-element", 3, "input"]], template: function MyTelInput_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "input", 1);
        i0.ɵɵlistener("input", function MyTelInput_Template_input_input_1_listener() { return ctx._handleInput(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "span", 2);
        i0.ɵɵtext(3, "\u2013");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "input", 3);
        i0.ɵɵlistener("input", function MyTelInput_Template_input_input_4_listener() { return ctx._handleInput(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "span", 2);
        i0.ɵɵtext(6, "\u2013");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "input", 4);
        i0.ɵɵlistener("input", function MyTelInput_Template_input_input_7_listener() { return ctx._handleInput(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.parts);
        i0.ɵɵattribute("aria-labelledby", ctx._formField == null ? null : ctx._formField.getLabelId())("aria-describedby", ctx.describedBy);
    } }, directives: [i3.NgControlStatusGroup, i3.FormGroupDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName], styles: [".example-tel-input-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.example-tel-input-element[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n.example-floating[_nghost-%COMP%]   .example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 1;\n}"] });
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
    }], function () { return [{ type: i3.FormBuilder }, { type: i4.FocusMonitor }, { type: i0.ElementRef }, { type: i1.MatFormField, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_FORM_FIELD]
            }] }, { type: i3.NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }]; }, { placeholder: [{
            type: Input
        }], required: [{
            type: Input
        }], disabled: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL21kYy1mb3JtLWZpZWxkL21kYy1mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9tZGMtZm9ybS1maWVsZC9tZGMtZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9tZGMtZm9ybS1maWVsZC9tZGMtZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9leGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWEsUUFBUSxFQUFFLElBQUksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQXVCLFdBQVcsRUFBYSxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkcsT0FBTyxFQUFDLFlBQVksRUFBRSxtQkFBbUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ2hHLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw4QkFB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bUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztnQkFDNUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBQyxDQUFDO2dCQUNwRSxJQUFJLEVBQUU7b0JBQ0osMEJBQTBCLEVBQUUsa0JBQWtCO29CQUM5QyxNQUFNLEVBQUUsSUFBSTtpQkFDYjthQUNGOztzQkFpRUksUUFBUTs7c0JBQUksTUFBTTt1QkFBQyxjQUFjOztzQkFDakMsUUFBUTs7c0JBQUksSUFBSTs7a0JBNUNsQixLQUFLOztrQkFRTCxLQUFLOztrQkFRTCxLQUFLOztrQkFTTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb2N1c01vbml0b3J9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7Y29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFNlbGZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgTmdDb250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEZvcm1GaWVsZCwgTWF0Rm9ybUZpZWxkQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL21kYy1mb3JtLWZpZWxkJztcbmltcG9ydCB7TUFUX0ZPUk1fRklFTER9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHdpdGggY3VzdG9tIHRlbGVwaG9uZSBudW1iZXIgaW5wdXQgY29udHJvbC4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYy1mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRjRm9ybUZpZWxkQ3VzdG9tQ29udHJvbEV4YW1wbGUge31cblxuLyoqIERhdGEgc3RydWN0dXJlIGZvciBob2xkaW5nIHRlbGVwaG9uZSBudW1iZXIuICovXG5leHBvcnQgY2xhc3MgTXlUZWwge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXJlYTogc3RyaW5nLCBwdWJsaWMgZXhjaGFuZ2U6IHN0cmluZywgcHVibGljIHN1YnNjcmliZXI6IHN0cmluZykge31cbn1cblxuLyoqIEN1c3RvbSBgTWF0Rm9ybUZpZWxkQ29udHJvbGAgZm9yIHRlbGVwaG9uZSBudW1iZXIgaW5wdXQuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleGFtcGxlLXRlbC1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnZXhhbXBsZS10ZWwtaW5wdXQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2V4YW1wbGUtdGVsLWlucHV0LWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBNYXRGb3JtRmllbGRDb250cm9sLCB1c2VFeGlzdGluZzogTXlUZWxJbnB1dH1dLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5leGFtcGxlLWZsb2F0aW5nXSc6ICdzaG91bGRMYWJlbEZsb2F0JyxcbiAgICAnW2lkXSc6ICdpZCcsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTXlUZWxJbnB1dCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBNYXRGb3JtRmllbGRDb250cm9sPE15VGVsPiwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5leHRJZCA9IDA7XG5cbiAgcGFydHM6IEZvcm1Hcm91cDtcbiAgc3RhdGVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgZm9jdXNlZCA9IGZhbHNlO1xuICBlcnJvclN0YXRlID0gZmFsc2U7XG4gIGNvbnRyb2xUeXBlID0gJ2V4YW1wbGUtdGVsLWlucHV0JztcbiAgaWQgPSBgZXhhbXBsZS10ZWwtaW5wdXQtJHtNeVRlbElucHV0Lm5leHRJZCsrfWA7XG4gIGRlc2NyaWJlZEJ5ID0gJyc7XG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIGdldCBlbXB0eSgpIHtcbiAgICBjb25zdCB7dmFsdWU6IHthcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcn19ID0gdGhpcy5wYXJ0cztcblxuICAgIHJldHVybiAhYXJlYSAmJiAhZXhjaGFuZ2UgJiYgIXN1YnNjcmliZXI7XG4gIH1cblxuICBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpIHsgcmV0dXJuIHRoaXMuZm9jdXNlZCB8fCAhdGhpcy5lbXB0eTsgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7IH1cbiAgc2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3JlcXVpcmVkOyB9XG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cbiAgcHJpdmF0ZSBfcmVxdWlyZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5fZGlzYWJsZWQgPyB0aGlzLnBhcnRzLmRpc2FibGUoKSA6IHRoaXMucGFydHMuZW5hYmxlKCk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IE15VGVsIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMucGFydHMudmFsaWQpIHtcbiAgICAgIGNvbnN0IHt2YWx1ZToge2FyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyfX0gPSB0aGlzLnBhcnRzO1xuICAgICAgcmV0dXJuIG5ldyBNeVRlbChhcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHNldCB2YWx1ZSh0ZWw6IE15VGVsIHwgbnVsbCkge1xuICAgIGNvbnN0IHthcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcn0gPSB0ZWwgfHwgbmV3IE15VGVsKCcnLCAnJywgJycpO1xuICAgIHRoaXMucGFydHMuc2V0VmFsdWUoe2FyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyfSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0ZPUk1fRklFTEQpIHB1YmxpYyBfZm9ybUZpZWxkOiBNYXRGb3JtRmllbGQsXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wpIHtcblxuICAgIHRoaXMucGFydHMgPSBmb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBhcmVhOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgzKV1dLFxuICAgICAgZXhjaGFuZ2U6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMpXV0sXG4gICAgICBzdWJzY3JpYmVyOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLCBWYWxpZGF0b3JzLm1heExlbmd0aCg0KV1dLFxuICAgIH0pO1xuXG4gICAgX2ZvY3VzTW9uaXRvci5tb25pdG9yKF9lbGVtZW50UmVmLCB0cnVlKS5zdWJzY3JpYmUob3JpZ2luID0+IHtcbiAgICAgIGlmICh0aGlzLmZvY3VzZWQgJiYgIW9yaWdpbikge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5mb2N1c2VkID0gISFvcmlnaW47XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgIT0gbnVsbCkge1xuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgICB0aGlzLl9mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5fZWxlbWVudFJlZik7XG4gIH1cblxuICBzZXREZXNjcmliZWRCeUlkcyhpZHM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5kZXNjcmliZWRCeSA9IGlkcy5qb2luKCcgJyk7XG4gIH1cblxuICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKChldmVudC50YXJnZXQgYXMgRWxlbWVudCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9ICdpbnB1dCcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpIS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodGVsOiBNeVRlbCB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdGVsO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIF9oYW5kbGVJbnB1dCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBib29sZWFuIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JlcXVpcmVkOiBib29sZWFuIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5QaG9uZSBudW1iZXI8L21hdC1sYWJlbD5cbiAgPGV4YW1wbGUtdGVsLWlucHV0IHJlcXVpcmVkPjwvZXhhbXBsZS10ZWwtaW5wdXQ+XG4gIDxtYXQtaWNvbiBtYXRTdWZmaXg+cGhvbmU8L21hdC1pY29uPlxuICA8bWF0LWhpbnQ+SW5jbHVkZSBhcmVhIGNvZGU8L21hdC1oaW50PlxuPC9tYXQtZm9ybS1maWVsZD5cbiIsIjxkaXYgcm9sZT1cImdyb3VwXCIgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1jb250YWluZXJcIlxuICAgICBbZm9ybUdyb3VwXT1cInBhcnRzXCJcbiAgICAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cIl9mb3JtRmllbGQ/LmdldExhYmVsSWQoKVwiXG4gICAgIFthdHRyLmFyaWEtZGVzY3JpYmVkYnldPVwiZGVzY3JpYmVkQnlcIj5cbiAgPGlucHV0XG4gICAgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1lbGVtZW50XCJcbiAgICBmb3JtQ29udHJvbE5hbWU9XCJhcmVhXCIgc2l6ZT1cIjNcIlxuICAgIGFyaWEtbGFiZWw9XCJBcmVhIGNvZGVcIlxuICAgIChpbnB1dCk9XCJfaGFuZGxlSW5wdXQoKVwiPlxuICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LXNwYWNlclwiPiZuZGFzaDs8L3NwYW4+XG4gIDxpbnB1dFxuICAgIGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtZWxlbWVudFwiXG4gICAgZm9ybUNvbnRyb2xOYW1lPVwiZXhjaGFuZ2VcIlxuICAgIHNpemU9XCIzXCJcbiAgICBhcmlhLWxhYmVsPVwiRXhjaGFuZ2UgY29kZVwiXG4gICAgKGlucHV0KT1cIl9oYW5kbGVJbnB1dCgpXCI+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtc3BhY2VyXCI+Jm5kYXNoOzwvc3Bhbj5cbiAgPGlucHV0XG4gICAgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1lbGVtZW50XCJcbiAgICBmb3JtQ29udHJvbE5hbWU9XCJzdWJzY3JpYmVyXCJcbiAgICBzaXplPVwiNFwiXG4gICAgYXJpYS1sYWJlbD1cIlN1YnNjcmliZXIgbnVtYmVyXCJcbiAgICAoaW5wdXQpPVwiX2hhbmRsZUlucHV0KClcIj5cbjwvZGl2PlxuIl19