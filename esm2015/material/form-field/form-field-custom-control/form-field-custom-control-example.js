/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/form-field/form-field-custom-control/form-field-custom-control-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Input, Optional, Self } from '@angular/core';
import { FormBuilder, NgControl, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/cdk/a11y";
/**
 * \@title Form field with custom telephone number input control.
 */
let FormFieldCustomControlExample = /** @class */ (() => {
    /**
     * \@title Form field with custom telephone number input control.
     */
    class FormFieldCustomControlExample {
    }
    FormFieldCustomControlExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-custom-control-example',
                    templateUrl: 'form-field-custom-control-example.html',
                    styleUrls: ['form-field-custom-control-example.css'],
                },] },
    ];
    /** @nocollapse */ FormFieldCustomControlExample.ɵfac = function FormFieldCustomControlExample_Factory(t) { return new (t || FormFieldCustomControlExample)(); };
    /** @nocollapse */ FormFieldCustomControlExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldCustomControlExample, selectors: [["form-field-custom-control-example"]], decls: 8, vars: 0, consts: [["appearance", "fill"], ["required", ""], ["matSuffix", ""]], template: function FormFieldCustomControlExample_Template(rf, ctx) { if (rf & 1) {
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
})();
export { FormFieldCustomControlExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldCustomControlExample, [{
        type: Component,
        args: [{
                selector: 'form-field-custom-control-example',
                templateUrl: 'form-field-custom-control-example.html',
                styleUrls: ['form-field-custom-control-example.css'],
            }]
    }], null, null); })();
/**
 * Data structure for holding telephone number.
 */
export class MyTel {
    /**
     * @param {?} area
     * @param {?} exchange
     * @param {?} subscriber
     */
    constructor(area, exchange, subscriber) {
        this.area = area;
        this.exchange = exchange;
        this.subscriber = subscriber;
    }
}
if (false) {
    /** @type {?} */
    MyTel.prototype.area;
    /** @type {?} */
    MyTel.prototype.exchange;
    /** @type {?} */
    MyTel.prototype.subscriber;
}
/**
 * Custom `MatFormFieldControl` for telephone number input.
 */
let MyTelInput = /** @class */ (() => {
    /**
     * Custom `MatFormFieldControl` for telephone number input.
     */
    class MyTelInput {
        /**
         * @param {?} formBuilder
         * @param {?} _focusMonitor
         * @param {?} _elementRef
         * @param {?} ngControl
         */
        constructor(formBuilder, _focusMonitor, _elementRef, ngControl) {
            this._focusMonitor = _focusMonitor;
            this._elementRef = _elementRef;
            this.ngControl = ngControl;
            this.stateChanges = new Subject();
            this.focused = false;
            this.errorState = false;
            this.controlType = 'example-tel-input';
            this.id = `example-tel-input-${MyTelInput.nextId++}`;
            this.describedBy = '';
            this.onChange = (/**
             * @param {?} _
             * @return {?}
             */
            (_) => { });
            this.onTouched = (/**
             * @return {?}
             */
            () => { });
            this._required = false;
            this._disabled = false;
            this.parts = formBuilder.group({
                area: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
                exchange: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
                subscriber: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
            });
            _focusMonitor.monitor(_elementRef, true).subscribe((/**
             * @param {?} origin
             * @return {?}
             */
            origin => {
                if (this.focused && !origin) {
                    this.onTouched();
                }
                this.focused = !!origin;
                this.stateChanges.next();
            }));
            if (this.ngControl != null) {
                this.ngControl.valueAccessor = this;
            }
        }
        /**
         * @return {?}
         */
        get empty() {
            const { value: { area, exchange, subscriber } } = this.parts;
            return !area && !exchange && !subscriber;
        }
        /**
         * @return {?}
         */
        get shouldLabelFloat() { return this.focused || !this.empty; }
        /**
         * @return {?}
         */
        get placeholder() { return this._placeholder; }
        /**
         * @param {?} value
         * @return {?}
         */
        set placeholder(value) {
            this._placeholder = value;
            this.stateChanges.next();
        }
        /**
         * @return {?}
         */
        get required() { return this._required; }
        /**
         * @param {?} value
         * @return {?}
         */
        set required(value) {
            this._required = coerceBooleanProperty(value);
            this.stateChanges.next();
        }
        /**
         * @return {?}
         */
        get disabled() { return this._disabled; }
        /**
         * @param {?} value
         * @return {?}
         */
        set disabled(value) {
            this._disabled = coerceBooleanProperty(value);
            this._disabled ? this.parts.disable() : this.parts.enable();
            this.stateChanges.next();
        }
        /**
         * @return {?}
         */
        get value() {
            if (this.parts.valid) {
                const { value: { area, exchange, subscriber } } = this.parts;
                return new MyTel(area, exchange, subscriber);
            }
            return null;
        }
        /**
         * @param {?} tel
         * @return {?}
         */
        set value(tel) {
            const { area, exchange, subscriber } = tel || new MyTel('', '', '');
            this.parts.setValue({ area, exchange, subscriber });
            this.stateChanges.next();
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this.stateChanges.complete();
            this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * @param {?} ids
         * @return {?}
         */
        setDescribedByIds(ids) {
            this.describedBy = ids.join(' ');
        }
        /**
         * @param {?} event
         * @return {?}
         */
        onContainerClick(event) {
            if (((/** @type {?} */ (event.target))).tagName.toLowerCase() != 'input') {
                (/** @type {?} */ (this._elementRef.nativeElement.querySelector('input'))).focus();
            }
        }
        /**
         * @param {?} tel
         * @return {?}
         */
        writeValue(tel) {
            this.value = tel;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        registerOnChange(fn) {
            this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        registerOnTouched(fn) {
            this.onTouched = fn;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        setDisabledState(isDisabled) {
            this.disabled = isDisabled;
        }
        /**
         * @return {?}
         */
        _handleInput() {
            this.onChange(this.value);
        }
    }
    MyTelInput.nextId = 0;
    MyTelInput.decorators = [
        { type: Component, args: [{
                    selector: 'example-tel-input',
                    templateUrl: 'example-tel-input-example.html',
                    styleUrls: ['example-tel-input-example.css'],
                    providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }],
                    host: {
                        '[class.example-floating]': 'shouldLabelFloat',
                        '[id]': 'id',
                        '[attr.aria-describedby]': 'describedBy',
                    }
                },] },
    ];
    /** @nocollapse */
    MyTelInput.ctorParameters = () => [
        { type: FormBuilder },
        { type: FocusMonitor },
        { type: ElementRef },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
    ];
    MyTelInput.propDecorators = {
        placeholder: [{ type: Input }],
        required: [{ type: Input }],
        disabled: [{ type: Input }],
        value: [{ type: Input }]
    };
    /** @nocollapse */ MyTelInput.ɵfac = function MyTelInput_Factory(t) { return new (t || MyTelInput)(i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.FocusMonitor), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.NgControl, 10)); };
    /** @nocollapse */ MyTelInput.ɵcmp = i0.ɵɵdefineComponent({ type: MyTelInput, selectors: [["example-tel-input"]], hostVars: 4, hostBindings: function MyTelInput_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵhostProperty("id", ctx.id);
            i0.ɵɵattribute("aria-describedby", ctx.describedBy);
            i0.ɵɵclassProp("example-floating", ctx.shouldLabelFloat);
        } }, inputs: { placeholder: "placeholder", required: "required", disabled: "disabled", value: "value" }, features: [i0.ɵɵProvidersFeature([{ provide: MatFormFieldControl, useExisting: MyTelInput }])], decls: 8, vars: 1, consts: [[1, "example-tel-input-container", 3, "formGroup"], ["formControlName", "area", "size", "3", "aria-label", "Area code", 1, "example-tel-input-element", 3, "input"], [1, "example-tel-input-spacer"], ["formControlName", "exchange", "size", "3", "aria-label", "Exchange code", 1, "example-tel-input-element", 3, "input"], ["formControlName", "subscriber", "size", "4", "aria-label", "Subscriber number", 1, "example-tel-input-element", 3, "input"]], template: function MyTelInput_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [i3.NgControlStatusGroup, i3.FormGroupDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName], styles: [".example-tel-input-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.example-tel-input-element[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n.example-floating[_nghost-%COMP%]   .example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 1;\n}"] });
    return MyTelInput;
})();
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
if (false) {
    /** @type {?} */
    MyTelInput.nextId;
    /** @type {?} */
    MyTelInput.ngAcceptInputType_disabled;
    /** @type {?} */
    MyTelInput.ngAcceptInputType_required;
    /** @type {?} */
    MyTelInput.prototype.parts;
    /** @type {?} */
    MyTelInput.prototype.stateChanges;
    /** @type {?} */
    MyTelInput.prototype.focused;
    /** @type {?} */
    MyTelInput.prototype.errorState;
    /** @type {?} */
    MyTelInput.prototype.controlType;
    /** @type {?} */
    MyTelInput.prototype.id;
    /** @type {?} */
    MyTelInput.prototype.describedBy;
    /** @type {?} */
    MyTelInput.prototype.onChange;
    /** @type {?} */
    MyTelInput.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    MyTelInput.prototype._placeholder;
    /**
     * @type {?}
     * @private
     */
    MyTelInput.prototype._required;
    /**
     * @type {?}
     * @private
     */
    MyTelInput.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    MyTelInput.prototype._focusMonitor;
    /**
     * @type {?}
     * @private
     */
    MyTelInput.prototype._elementRef;
    /** @type {?} */
    MyTelInput.prototype.ngControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9leGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFFBQVEsRUFBRSxJQUFJLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFDLFdBQVcsRUFBbUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25HLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7OztBQUc3Qjs7OztJQUFBLE1BS2EsNkJBQTZCOzs7Z0JBTHpDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUNB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QUNuQyw2QkFBZ0I7O0lBQ2hCLGdDQUFtQjs7SUFDbkIsaUNBQWtDOztJQUNsQyx3QkFBZ0Q7O0lBQ2hELGlDQUFpQjs7SUFDakIsOEJBQTBCOztJQUMxQiwrQkFBcUI7Ozs7O0lBZ0JyQixrQ0FBNkI7Ozs7O0lBUTdCLCtCQUEwQjs7Ozs7SUFTMUIsK0JBQTBCOzs7OztJQWtCeEIsbUNBQW1DOzs7OztJQUNuQyxpQ0FBNEM7O0lBQzVDLCtCQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9jdXNNb25pdG9yfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge2NvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPcHRpb25hbCwgU2VsZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOZ0NvbnRyb2wsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBjdXN0b20gdGVsZXBob25lIG51bWJlciBpbnB1dCBjb250cm9sLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlIHt9XG5cbi8qKiBEYXRhIHN0cnVjdHVyZSBmb3IgaG9sZGluZyB0ZWxlcGhvbmUgbnVtYmVyLiAqL1xuZXhwb3J0IGNsYXNzIE15VGVsIHtcbiAgY29uc3RydWN0b3IocHVibGljIGFyZWE6IHN0cmluZywgcHVibGljIGV4Y2hhbmdlOiBzdHJpbmcsIHB1YmxpYyBzdWJzY3JpYmVyOiBzdHJpbmcpIHt9XG59XG5cbi8qKiBDdXN0b20gYE1hdEZvcm1GaWVsZENvbnRyb2xgIGZvciB0ZWxlcGhvbmUgbnVtYmVyIGlucHV0LiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhhbXBsZS10ZWwtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJ2V4YW1wbGUtdGVsLWlucHV0LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydleGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTWF0Rm9ybUZpZWxkQ29udHJvbCwgdXNlRXhpc3Rpbmc6IE15VGVsSW5wdXR9XSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZXhhbXBsZS1mbG9hdGluZ10nOiAnc2hvdWxkTGFiZWxGbG9hdCcsXG4gICAgJ1tpZF0nOiAnaWQnLFxuICAgICdbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XSc6ICdkZXNjcmliZWRCeScsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTXlUZWxJbnB1dCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBNYXRGb3JtRmllbGRDb250cm9sPE15VGVsPiwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5leHRJZCA9IDA7XG5cbiAgcGFydHM6IEZvcm1Hcm91cDtcbiAgc3RhdGVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgZm9jdXNlZCA9IGZhbHNlO1xuICBlcnJvclN0YXRlID0gZmFsc2U7XG4gIGNvbnRyb2xUeXBlID0gJ2V4YW1wbGUtdGVsLWlucHV0JztcbiAgaWQgPSBgZXhhbXBsZS10ZWwtaW5wdXQtJHtNeVRlbElucHV0Lm5leHRJZCsrfWA7XG4gIGRlc2NyaWJlZEJ5ID0gJyc7XG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIGdldCBlbXB0eSgpIHtcbiAgICBjb25zdCB7dmFsdWU6IHthcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcn19ID0gdGhpcy5wYXJ0cztcblxuICAgIHJldHVybiAhYXJlYSAmJiAhZXhjaGFuZ2UgJiYgIXN1YnNjcmliZXI7XG4gIH1cblxuICBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpIHsgcmV0dXJuIHRoaXMuZm9jdXNlZCB8fCAhdGhpcy5lbXB0eTsgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7IH1cbiAgc2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3JlcXVpcmVkOyB9XG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cbiAgcHJpdmF0ZSBfcmVxdWlyZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5fZGlzYWJsZWQgPyB0aGlzLnBhcnRzLmRpc2FibGUoKSA6IHRoaXMucGFydHMuZW5hYmxlKCk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IE15VGVsIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMucGFydHMudmFsaWQpIHtcbiAgICAgIGNvbnN0IHt2YWx1ZToge2FyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyfX0gPSB0aGlzLnBhcnRzO1xuICAgICAgcmV0dXJuIG5ldyBNeVRlbChhcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHNldCB2YWx1ZSh0ZWw6IE15VGVsIHwgbnVsbCkge1xuICAgIGNvbnN0IHthcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcn0gPSB0ZWwgfHwgbmV3IE15VGVsKCcnLCAnJywgJycpO1xuICAgIHRoaXMucGFydHMuc2V0VmFsdWUoe2FyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyfSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sKSB7XG5cbiAgICB0aGlzLnBhcnRzID0gZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgYXJlYTogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMyldXSxcbiAgICAgIGV4Y2hhbmdlOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgzKV1dLFxuICAgICAgc3Vic2NyaWJlcjogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoNCldXSxcbiAgICB9KTtcblxuICAgIF9mb2N1c01vbml0b3IubW9uaXRvcihfZWxlbWVudFJlZiwgdHJ1ZSkuc3Vic2NyaWJlKG9yaWdpbiA9PiB7XG4gICAgICBpZiAodGhpcy5mb2N1c2VkICYmICFvcmlnaW4pIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9jdXNlZCA9ICEhb3JpZ2luO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubmdDb250cm9sICE9IG51bGwpIHtcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuX2VsZW1lbnRSZWYpO1xuICB9XG5cbiAgc2V0RGVzY3JpYmVkQnlJZHMoaWRzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuZGVzY3JpYmVkQnkgPSBpZHMuam9pbignICcpO1xuICB9XG5cbiAgb25Db250YWluZXJDbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICgoZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQpLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPSAnaW5wdXQnKSB7XG4gICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKSEuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHRlbDogTXlUZWwgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRlbDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBfaGFuZGxlSW5wdXQoKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogYm9vbGVhbiB8IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXF1aXJlZDogYm9vbGVhbiB8IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5QaG9uZSBudW1iZXI8L21hdC1sYWJlbD5cbiAgPGV4YW1wbGUtdGVsLWlucHV0IHJlcXVpcmVkPjwvZXhhbXBsZS10ZWwtaW5wdXQ+XG4gIDxtYXQtaWNvbiBtYXRTdWZmaXg+cGhvbmU8L21hdC1pY29uPlxuICA8bWF0LWhpbnQ+SW5jbHVkZSBhcmVhIGNvZGU8L21hdC1oaW50PlxuPC9tYXQtZm9ybS1maWVsZD5cbiIsIjxkaXYgW2Zvcm1Hcm91cF09XCJwYXJ0c1wiIGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtY29udGFpbmVyXCI+XG4gIDxpbnB1dCBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LWVsZW1lbnRcIiBmb3JtQ29udHJvbE5hbWU9XCJhcmVhXCIgc2l6ZT1cIjNcIiBhcmlhLWxhYmVsPVwiQXJlYSBjb2RlXCIgKGlucHV0KT1cIl9oYW5kbGVJbnB1dCgpXCI+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtc3BhY2VyXCI+Jm5kYXNoOzwvc3Bhbj5cbiAgPGlucHV0IGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtZWxlbWVudFwiIGZvcm1Db250cm9sTmFtZT1cImV4Y2hhbmdlXCIgc2l6ZT1cIjNcIiBhcmlhLWxhYmVsPVwiRXhjaGFuZ2UgY29kZVwiIChpbnB1dCk9XCJfaGFuZGxlSW5wdXQoKVwiPlxuICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LXNwYWNlclwiPiZuZGFzaDs8L3NwYW4+XG4gIDxpbnB1dCBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LWVsZW1lbnRcIiBmb3JtQ29udHJvbE5hbWU9XCJzdWJzY3JpYmVyXCIgc2l6ZT1cIjRcIiBhcmlhLWxhYmVsPVwiU3Vic2NyaWJlciBudW1iZXJcIiAoaW5wdXQpPVwiX2hhbmRsZUlucHV0KClcIj5cbjwvZGl2PlxuIl19