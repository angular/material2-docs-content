import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Input, Optional, Self } from '@angular/core';
import { FormBuilder, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/cdk/a11y";
/** @title Form field with custom telephone number input control. */
var FormFieldCustomControlExample = /** @class */ (function () {
    function FormFieldCustomControlExample() {
    }
    FormFieldCustomControlExample.ɵfac = function FormFieldCustomControlExample_Factory(t) { return new (t || FormFieldCustomControlExample)(); };
    FormFieldCustomControlExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldCustomControlExample, selectors: [["form-field-custom-control-example"]], decls: 8, vars: 0, consts: [["appearance", "fill"], ["required", ""], ["matSuffix", ""]], template: function FormFieldCustomControlExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Phone number");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "example-tel-input", 1);
            i0.ɵɵelementStart(4, "mat-icon", 2);
            i0.ɵɵtext(5, "phone");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-hint");
            i0.ɵɵtext(7, "Include area code");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: function () { return [i1.MatFormField, i1.MatLabel, MyTelInput, i2.MatIcon, i1.MatSuffix, i1.MatHint]; }, styles: [""] });
    return FormFieldCustomControlExample;
}());
export { FormFieldCustomControlExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldCustomControlExample, [{
        type: Component,
        args: [{
                selector: 'form-field-custom-control-example',
                templateUrl: 'form-field-custom-control-example.html',
                styleUrls: ['form-field-custom-control-example.css'],
            }]
    }], null, null); })();
/** Data structure for holding telephone number. */
var MyTel = /** @class */ (function () {
    function MyTel(area, exchange, subscriber) {
        this.area = area;
        this.exchange = exchange;
        this.subscriber = subscriber;
    }
    return MyTel;
}());
export { MyTel };
/** Custom `MatFormFieldControl` for telephone number input. */
var MyTelInput = /** @class */ (function () {
    function MyTelInput(formBuilder, _focusMonitor, _elementRef, ngControl) {
        var _this = this;
        this._focusMonitor = _focusMonitor;
        this._elementRef = _elementRef;
        this.ngControl = ngControl;
        this.stateChanges = new Subject();
        this.focused = false;
        this.errorState = false;
        this.controlType = 'example-tel-input';
        this.id = "example-tel-input-" + MyTelInput.nextId++;
        this.describedBy = '';
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._required = false;
        this._disabled = false;
        this.parts = formBuilder.group({
            area: '',
            exchange: '',
            subscriber: '',
        });
        _focusMonitor.monitor(_elementRef, true).subscribe(function (origin) {
            if (_this.focused && !origin) {
                _this.onTouched();
            }
            _this.focused = !!origin;
            _this.stateChanges.next();
        });
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    Object.defineProperty(MyTelInput.prototype, "empty", {
        get: function () {
            var _a = this.parts.value, area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
            return !area && !exchange && !subscriber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "shouldLabelFloat", {
        get: function () { return this.focused || !this.empty; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "placeholder", {
        get: function () { return this._placeholder; },
        set: function (value) {
            this._placeholder = value;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) {
            this._required = coerceBooleanProperty(value);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
            this._disabled ? this.parts.disable() : this.parts.enable();
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "value", {
        get: function () {
            var _a = this.parts.value, area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
            if (area.length === 3 && exchange.length === 3 && subscriber.length === 4) {
                return new MyTel(area, exchange, subscriber);
            }
            return null;
        },
        set: function (tel) {
            var _a = tel || new MyTel('', '', ''), area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
            this.parts.setValue({ area: area, exchange: exchange, subscriber: subscriber });
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    MyTelInput.prototype.ngOnDestroy = function () {
        this.stateChanges.complete();
        this._focusMonitor.stopMonitoring(this._elementRef);
    };
    MyTelInput.prototype.setDescribedByIds = function (ids) {
        this.describedBy = ids.join(' ');
    };
    MyTelInput.prototype.onContainerClick = function (event) {
        if (event.target.tagName.toLowerCase() != 'input') {
            this._elementRef.nativeElement.querySelector('input').focus();
        }
    };
    MyTelInput.prototype.writeValue = function (tel) {
        this.value = tel;
    };
    MyTelInput.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    MyTelInput.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    MyTelInput.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MyTelInput.prototype._handleInput = function () {
        this.onChange(this.parts.value);
    };
    MyTelInput.nextId = 0;
    MyTelInput.ɵfac = function MyTelInput_Factory(t) { return new (t || MyTelInput)(i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.FocusMonitor), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.NgControl, 10)); };
    MyTelInput.ɵcmp = i0.ɵɵdefineComponent({ type: MyTelInput, selectors: [["example-tel-input"]], hostVars: 4, hostBindings: function MyTelInput_HostBindings(rf, ctx, elIndex) { if (rf & 2) {
            i0.ɵɵhostProperty("id", ctx.id);
            i0.ɵɵattribute("aria-describedby", ctx.describedBy);
            i0.ɵɵclassProp("example-floating", ctx.shouldLabelFloat);
        } }, inputs: { placeholder: "placeholder", required: "required", disabled: "disabled", value: "value" }, features: [i0.ɵɵProvidersFeature([{ provide: MatFormFieldControl, useExisting: MyTelInput }])], decls: 8, vars: 1, consts: [[1, "example-tel-input-container", 3, "formGroup"], ["formControlName", "area", "size", "3", "aria-label", "Area code", 1, "example-tel-input-element", 3, "input"], [1, "example-tel-input-spacer"], ["formControlName", "exchange", "size", "3", "aria-label", "Exchange code", 1, "example-tel-input-element", 3, "input"], ["formControlName", "subscriber", "size", "4", "aria-label", "Subscriber number", 1, "example-tel-input-element", 3, "input"]], template: function MyTelInput_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "input", 1);
            i0.ɵɵlistener("input", function MyTelInput_Template_input_input_1_listener($event) { return ctx._handleInput(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "span", 2);
            i0.ɵɵtext(3, "\u2013");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "input", 3);
            i0.ɵɵlistener("input", function MyTelInput_Template_input_input_4_listener($event) { return ctx._handleInput(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 2);
            i0.ɵɵtext(6, "\u2013");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "input", 4);
            i0.ɵɵlistener("input", function MyTelInput_Template_input_input_7_listener($event) { return ctx._handleInput(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.parts);
        } }, directives: [i3.NgControlStatusGroup, i3.FormGroupDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName], styles: [".example-tel-input-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.example-tel-input-element[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n.example-floating[_nghost-%COMP%]   .example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 1;\n}"] });
    return MyTelInput;
}());
export { MyTelInput };
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
                    '[attr.aria-describedby]': 'describedBy',
                }
            }]
    }], function () { return [{ type: i3.FormBuilder }, { type: i4.FocusMonitor }, { type: i0.ElementRef }, { type: i3.NgControl, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9leGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxRQUFRLEVBQUUsSUFBSSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxXQUFXLEVBQW1DLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7OztBQUU3QixvRUFBb0U7QUFDcEU7SUFBQTtLQUs2Qzs4R0FBaEMs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Y3VzTW9uaXRvcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFNlbGZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTmdDb250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEZvcm1GaWVsZENvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHdpdGggY3VzdG9tIHRlbGVwaG9uZSBudW1iZXIgaW5wdXQgY29udHJvbC4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRDdXN0b21Db250cm9sRXhhbXBsZSB7fVxuXG4vKiogRGF0YSBzdHJ1Y3R1cmUgZm9yIGhvbGRpbmcgdGVsZXBob25lIG51bWJlci4gKi9cbmV4cG9ydCBjbGFzcyBNeVRlbCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcmVhOiBzdHJpbmcsIHB1YmxpYyBleGNoYW5nZTogc3RyaW5nLCBwdWJsaWMgc3Vic2NyaWJlcjogc3RyaW5nKSB7fVxufVxuXG4vKiogQ3VzdG9tIGBNYXRGb3JtRmllbGRDb250cm9sYCBmb3IgdGVsZXBob25lIG51bWJlciBpbnB1dC4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4YW1wbGUtdGVsLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICdleGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZXhhbXBsZS10ZWwtaW5wdXQtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1hdEZvcm1GaWVsZENvbnRyb2wsIHVzZUV4aXN0aW5nOiBNeVRlbElucHV0fV0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmV4YW1wbGUtZmxvYXRpbmddJzogJ3Nob3VsZExhYmVsRmxvYXQnLFxuICAgICdbaWRdJzogJ2lkJyxcbiAgICAnW2F0dHIuYXJpYS1kZXNjcmliZWRieV0nOiAnZGVzY3JpYmVkQnknLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE15VGVsSW5wdXQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTWF0Rm9ybUZpZWxkQ29udHJvbDxNeVRlbD4sIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZXh0SWQgPSAwO1xuXG4gIHBhcnRzOiBGb3JtR3JvdXA7XG4gIHN0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGZvY3VzZWQgPSBmYWxzZTtcbiAgZXJyb3JTdGF0ZSA9IGZhbHNlO1xuICBjb250cm9sVHlwZSA9ICdleGFtcGxlLXRlbC1pbnB1dCc7XG4gIGlkID0gYGV4YW1wbGUtdGVsLWlucHV0LSR7TXlUZWxJbnB1dC5uZXh0SWQrK31gO1xuICBkZXNjcmliZWRCeSA9ICcnO1xuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBnZXQgZW1wdHkoKSB7XG4gICAgY29uc3Qge3ZhbHVlOiB7YXJlYSwgZXhjaGFuZ2UsIHN1YnNjcmliZXJ9fSA9IHRoaXMucGFydHM7XG5cbiAgICByZXR1cm4gIWFyZWEgJiYgIWV4Y2hhbmdlICYmICFzdWJzY3JpYmVyO1xuICB9XG5cbiAgZ2V0IHNob3VsZExhYmVsRmxvYXQoKSB7IHJldHVybiB0aGlzLmZvY3VzZWQgfHwgIXRoaXMuZW1wdHk7IH1cblxuICBASW5wdXQoKVxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyOyB9XG4gIHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWx1ZTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIHRoaXMuX2Rpc2FibGVkID8gdGhpcy5wYXJ0cy5kaXNhYmxlKCkgOiB0aGlzLnBhcnRzLmVuYWJsZSgpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpOiBNeVRlbCB8IG51bGwge1xuICAgIGNvbnN0IHt2YWx1ZToge2FyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyfX0gPSB0aGlzLnBhcnRzO1xuICAgIGlmIChhcmVhLmxlbmd0aCA9PT0gMyAmJiBleGNoYW5nZS5sZW5ndGggPT09IDMgJiYgc3Vic2NyaWJlci5sZW5ndGggPT09IDQpIHtcbiAgICAgIHJldHVybiBuZXcgTXlUZWwoYXJlYSwgZXhjaGFuZ2UsIHN1YnNjcmliZXIpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBzZXQgdmFsdWUodGVsOiBNeVRlbCB8IG51bGwpIHtcbiAgICBjb25zdCB7YXJlYSwgZXhjaGFuZ2UsIHN1YnNjcmliZXJ9ID0gdGVsIHx8IG5ldyBNeVRlbCgnJywgJycsICcnKTtcbiAgICB0aGlzLnBhcnRzLnNldFZhbHVlKHthcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcn0pO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIF9mb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCkge1xuXG4gICAgdGhpcy5wYXJ0cyA9IGZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGFyZWE6ICcnLFxuICAgICAgZXhjaGFuZ2U6ICcnLFxuICAgICAgc3Vic2NyaWJlcjogJycsXG4gICAgfSk7XG5cbiAgICBfZm9jdXNNb25pdG9yLm1vbml0b3IoX2VsZW1lbnRSZWYsIHRydWUpLnN1YnNjcmliZShvcmlnaW4gPT4ge1xuICAgICAgaWYgKHRoaXMuZm9jdXNlZCAmJiAhb3JpZ2luKSB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmZvY3VzZWQgPSAhIW9yaWdpbjtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm5nQ29udHJvbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLl9lbGVtZW50UmVmKTtcbiAgfVxuXG4gIHNldERlc2NyaWJlZEJ5SWRzKGlkczogc3RyaW5nW10pIHtcbiAgICB0aGlzLmRlc2NyaWJlZEJ5ID0gaWRzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT0gJ2lucHV0Jykge1xuICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykhLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh0ZWw6IE15VGVsIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB0ZWw7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgX2hhbmRsZUlucHV0KCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5wYXJ0cy52YWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IGJvb2xlYW4gfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVxdWlyZWQ6IGJvb2xlYW4gfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+UGhvbmUgbnVtYmVyPC9tYXQtbGFiZWw+XG4gIDxleGFtcGxlLXRlbC1pbnB1dCByZXF1aXJlZD48L2V4YW1wbGUtdGVsLWlucHV0PlxuICA8bWF0LWljb24gbWF0U3VmZml4PnBob25lPC9tYXQtaWNvbj5cbiAgPG1hdC1oaW50PkluY2x1ZGUgYXJlYSBjb2RlPC9tYXQtaGludD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iLCI8ZGl2IFtmb3JtR3JvdXBdPVwicGFydHNcIiBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LWNvbnRhaW5lclwiPlxuICA8aW5wdXQgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1lbGVtZW50XCIgZm9ybUNvbnRyb2xOYW1lPVwiYXJlYVwiIHNpemU9XCIzXCIgYXJpYS1sYWJlbD1cIkFyZWEgY29kZVwiIChpbnB1dCk9XCJfaGFuZGxlSW5wdXQoKVwiPlxuICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LXNwYWNlclwiPiZuZGFzaDs8L3NwYW4+XG4gIDxpbnB1dCBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LWVsZW1lbnRcIiBmb3JtQ29udHJvbE5hbWU9XCJleGNoYW5nZVwiIHNpemU9XCIzXCIgYXJpYS1sYWJlbD1cIkV4Y2hhbmdlIGNvZGVcIiAoaW5wdXQpPVwiX2hhbmRsZUlucHV0KClcIj5cbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1zcGFjZXJcIj4mbmRhc2g7PC9zcGFuPlxuICA8aW5wdXQgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1lbGVtZW50XCIgZm9ybUNvbnRyb2xOYW1lPVwic3Vic2NyaWJlclwiIHNpemU9XCI0XCIgYXJpYS1sYWJlbD1cIlN1YnNjcmliZXIgbnVtYmVyXCIgKGlucHV0KT1cIl9oYW5kbGVJbnB1dCgpXCI+XG48L2Rpdj5cbiJdfQ==