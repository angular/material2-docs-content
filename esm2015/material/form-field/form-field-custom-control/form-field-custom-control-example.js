/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/**
 * \@title Form field with custom telephone number input control.
 */
export class FormFieldCustomControlExample {
}
FormFieldCustomControlExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-custom-control-example',
                templateUrl: 'form-field-custom-control-example.html',
                styleUrls: ['form-field-custom-control-example.css'],
            },] },
];
/** @nocollapse */ FormFieldCustomControlExample.ɵfac = function FormFieldCustomControlExample_Factory(t) { return new (t || FormFieldCustomControlExample)(); };
/** @nocollapse */ FormFieldCustomControlExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldCustomControlExample, selectors: [["form-field-custom-control-example"]], decls: 6, vars: 0, consts: [["placeholder", "Phone number", "required", ""], ["matSuffix", ""]], template: function FormFieldCustomControlExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelement(1, "example-tel-input", 0);
        i0.ɵɵelementStart(2, "mat-icon", 1);
        i0.ɵɵtext(3, "phone");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-hint");
        i0.ɵɵtext(5, "Include area code");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: function () { return [i1.MatFormField, MyTelInput, i2.MatIcon, i1.MatSuffix, i1.MatHint]; }, styles: [""] });
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
export class MyTelInput {
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
            area: '',
            exchange: '',
            subscriber: '',
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
        const { value: { area, exchange, subscriber } } = this.parts;
        if (area.length === 3 && exchange.length === 3 && subscriber.length === 4) {
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
        this.onChange(this.parts.value);
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
/** @nocollapse */ MyTelInput.ɵcmp = i0.ɵɵdefineComponent({ type: MyTelInput, selectors: [["example-tel-input"]], hostBindings: function MyTelInput_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(3);
    } if (rf & 2) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9leGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsUUFBUSxFQUFFLElBQUksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUMsV0FBVyxFQUFtQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7QUFRN0IsTUFBTSxPQUFPLDZCQUE2Qjs7O1lBTHpDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxXQUFX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TztRQUFBLGlCQUFPO1FBQ3JELGdDQUNGO1FBRGdILDRGQUFTLGtCQUFjLElBQUM7UUFBdEksaUJBQ0Y7UUFBQSxpQkFBTTs7UUFORCxxQ0FBbUI7O2tERmdDWCxVQUFVO2NBWHRCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztnQkFDNUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBQyxDQUFDO2dCQUNwRSxJQUFJLEVBQUU7b0JBQ0osMEJBQTBCLEVBQUUsa0JBQWtCO29CQUM5QyxNQUFNLEVBQUUsSUFBSTtvQkFDWix5QkFBeUIsRUFBRSxhQUFhO2lCQUN6QzthQUNGOztzQkFpRUksUUFBUTs7c0JBQUksSUFBSTs7a0JBM0NsQixLQUFLOztrQkFRTCxLQUFLOztrQkFRTCxLQUFLOztrQkFTTCxLQUFLOzs7O0lBN0NOLGtCQUFrQjs7SUF1SGxCLHNDQUF1RTs7SUFDdkUsc0NBQXVFOztJQXRIdkUsMkJBQWlCOztJQUNqQixrQ0FBbUM7O0lBQ25DLDZCQUFnQjs7SUFDaEIsZ0NBQW1COztJQUNuQixpQ0FBa0M7O0lBQ2xDLHdCQUFnRDs7SUFDaEQsaUNBQWlCOztJQUNqQiw4QkFBMEI7O0lBQzFCLCtCQUFxQjs7Ozs7SUFnQnJCLGtDQUE2Qjs7Ozs7SUFRN0IsK0JBQTBCOzs7OztJQVMxQiwrQkFBMEI7Ozs7O0lBa0J4QixtQ0FBbUM7Ozs7O0lBQ25DLGlDQUE0Qzs7SUFDNUMsK0JBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb2N1c01vbml0b3J9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7Y29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBTZWxmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5nQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRDb250cm9sfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbi8qKiBAdGl0bGUgRm9ybSBmaWVsZCB3aXRoIGN1c3RvbSB0ZWxlcGhvbmUgbnVtYmVyIGlucHV0IGNvbnRyb2wuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkQ3VzdG9tQ29udHJvbEV4YW1wbGUge31cblxuLyoqIERhdGEgc3RydWN0dXJlIGZvciBob2xkaW5nIHRlbGVwaG9uZSBudW1iZXIuICovXG5leHBvcnQgY2xhc3MgTXlUZWwge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXJlYTogc3RyaW5nLCBwdWJsaWMgZXhjaGFuZ2U6IHN0cmluZywgcHVibGljIHN1YnNjcmliZXI6IHN0cmluZykge31cbn1cblxuLyoqIEN1c3RvbSBgTWF0Rm9ybUZpZWxkQ29udHJvbGAgZm9yIHRlbGVwaG9uZSBudW1iZXIgaW5wdXQuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleGFtcGxlLXRlbC1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnZXhhbXBsZS10ZWwtaW5wdXQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2V4YW1wbGUtdGVsLWlucHV0LWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBNYXRGb3JtRmllbGRDb250cm9sLCB1c2VFeGlzdGluZzogTXlUZWxJbnB1dH1dLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5leGFtcGxlLWZsb2F0aW5nXSc6ICdzaG91bGRMYWJlbEZsb2F0JyxcbiAgICAnW2lkXSc6ICdpZCcsXG4gICAgJ1thdHRyLmFyaWEtZGVzY3JpYmVkYnldJzogJ2Rlc2NyaWJlZEJ5JyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBNeVRlbElucHV0IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE1hdEZvcm1GaWVsZENvbnRyb2w8TXlUZWw+LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmV4dElkID0gMDtcblxuICBwYXJ0czogRm9ybUdyb3VwO1xuICBzdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBmb2N1c2VkID0gZmFsc2U7XG4gIGVycm9yU3RhdGUgPSBmYWxzZTtcbiAgY29udHJvbFR5cGUgPSAnZXhhbXBsZS10ZWwtaW5wdXQnO1xuICBpZCA9IGBleGFtcGxlLXRlbC1pbnB1dC0ke015VGVsSW5wdXQubmV4dElkKyt9YDtcbiAgZGVzY3JpYmVkQnkgPSAnJztcbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgZ2V0IGVtcHR5KCkge1xuICAgIGNvbnN0IHt2YWx1ZToge2FyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyfX0gPSB0aGlzLnBhcnRzO1xuXG4gICAgcmV0dXJuICFhcmVhICYmICFleGNoYW5nZSAmJiAhc3Vic2NyaWJlcjtcbiAgfVxuXG4gIGdldCBzaG91bGRMYWJlbEZsb2F0KCkgeyByZXR1cm4gdGhpcy5mb2N1c2VkIHx8ICF0aGlzLmVtcHR5OyB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjsgfVxuICBzZXQgcGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsdWU7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH1cbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLl9kaXNhYmxlZCA/IHRoaXMucGFydHMuZGlzYWJsZSgpIDogdGhpcy5wYXJ0cy5lbmFibGUoKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogTXlUZWwgfCBudWxsIHtcbiAgICBjb25zdCB7dmFsdWU6IHthcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcn19ID0gdGhpcy5wYXJ0cztcbiAgICBpZiAoYXJlYS5sZW5ndGggPT09IDMgJiYgZXhjaGFuZ2UubGVuZ3RoID09PSAzICYmIHN1YnNjcmliZXIubGVuZ3RoID09PSA0KSB7XG4gICAgICByZXR1cm4gbmV3IE15VGVsKGFyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgc2V0IHZhbHVlKHRlbDogTXlUZWwgfCBudWxsKSB7XG4gICAgY29uc3Qge2FyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyfSA9IHRlbCB8fCBuZXcgTXlUZWwoJycsICcnLCAnJyk7XG4gICAgdGhpcy5wYXJ0cy5zZXRWYWx1ZSh7YXJlYSwgZXhjaGFuZ2UsIHN1YnNjcmliZXJ9KTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBfZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wpIHtcblxuICAgIHRoaXMucGFydHMgPSBmb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBhcmVhOiAnJyxcbiAgICAgIGV4Y2hhbmdlOiAnJyxcbiAgICAgIHN1YnNjcmliZXI6ICcnLFxuICAgIH0pO1xuXG4gICAgX2ZvY3VzTW9uaXRvci5tb25pdG9yKF9lbGVtZW50UmVmLCB0cnVlKS5zdWJzY3JpYmUob3JpZ2luID0+IHtcbiAgICAgIGlmICh0aGlzLmZvY3VzZWQgJiYgIW9yaWdpbikge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5mb2N1c2VkID0gISFvcmlnaW47XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgIT0gbnVsbCkge1xuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgICB0aGlzLl9mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5fZWxlbWVudFJlZik7XG4gIH1cblxuICBzZXREZXNjcmliZWRCeUlkcyhpZHM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5kZXNjcmliZWRCeSA9IGlkcy5qb2luKCcgJyk7XG4gIH1cblxuICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKChldmVudC50YXJnZXQgYXMgRWxlbWVudCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9ICdpbnB1dCcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpIS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodGVsOiBNeVRlbCB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdGVsO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIF9oYW5kbGVJbnB1dCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMucGFydHMudmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBib29sZWFuIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JlcXVpcmVkOiBib29sZWFuIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPGV4YW1wbGUtdGVsLWlucHV0IHBsYWNlaG9sZGVyPVwiUGhvbmUgbnVtYmVyXCIgcmVxdWlyZWQ+PC9leGFtcGxlLXRlbC1pbnB1dD5cbiAgPG1hdC1pY29uIG1hdFN1ZmZpeD5waG9uZTwvbWF0LWljb24+XG4gIDxtYXQtaGludD5JbmNsdWRlIGFyZWEgY29kZTwvbWF0LWhpbnQ+XG48L21hdC1mb3JtLWZpZWxkPlxuIiwiPGRpdiBbZm9ybUdyb3VwXT1cInBhcnRzXCIgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1jb250YWluZXJcIj5cbiAgPGlucHV0IGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtZWxlbWVudFwiIGZvcm1Db250cm9sTmFtZT1cImFyZWFcIiBzaXplPVwiM1wiIGFyaWEtbGFiZWw9XCJBcmVhIGNvZGVcIiAoaW5wdXQpPVwiX2hhbmRsZUlucHV0KClcIj5cbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1zcGFjZXJcIj4mbmRhc2g7PC9zcGFuPlxuICA8aW5wdXQgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1lbGVtZW50XCIgZm9ybUNvbnRyb2xOYW1lPVwiZXhjaGFuZ2VcIiBzaXplPVwiM1wiIGFyaWEtbGFiZWw9XCJFeGNoYW5nZSBjb2RlXCIgKGlucHV0KT1cIl9oYW5kbGVJbnB1dCgpXCI+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtc3BhY2VyXCI+Jm5kYXNoOzwvc3Bhbj5cbiAgPGlucHV0IGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtZWxlbWVudFwiIGZvcm1Db250cm9sTmFtZT1cInN1YnNjcmliZXJcIiBzaXplPVwiNFwiIGFyaWEtbGFiZWw9XCJTdWJzY3JpYmVyIG51bWJlclwiIChpbnB1dCk9XCJfaGFuZGxlSW5wdXQoKVwiPlxuPC9kaXY+XG4iXX0=