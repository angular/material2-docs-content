/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/input/input-clearable/input-clearable-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
function InputClearableExample_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function InputClearableExample_button_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.value = ""; });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
/**
 * \@title Input with a clear button
 */
export class InputClearableExample {
    constructor() {
        this.value = 'Clear me';
    }
}
InputClearableExample.decorators = [
    { type: Component, args: [{
                selector: 'input-clearable-example',
                templateUrl: './input-clearable-example.html',
                styleUrls: ['./input-clearable-example.css'],
            },] },
];
/** @nocollapse */ InputClearableExample.ɵfac = function InputClearableExample_Factory(t) { return new (t || InputClearableExample)(); };
/** @nocollapse */ InputClearableExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputClearableExample, selectors: [["input-clearable-example"]], decls: 3, vars: 2, consts: [[1, "example-form-field"], ["matInput", "", "type", "text", "placeholder", "Clearable input", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]], template: function InputClearableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "input", 1);
        i0.ɵɵlistener("ngModelChange", function InputClearableExample_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, InputClearableExample_button_2_Template, 3, 0, "button", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.value);
    } }, directives: [i1.MatFormField, i2.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.NgIf, i5.MatButton, i1.MatSuffix, i6.MatIcon], styles: [".example-form-field[_ngcontent-%COMP%] {\n  width: 200px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputClearableExample, [{
        type: Component,
        args: [{
                selector: 'input-clearable-example',
                templateUrl: './input-clearable-example.html',
                styleUrls: ['./input-clearable-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    InputClearableExample.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1jbGVhcmFibGUvaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1jbGVhcmFibGUvaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7SUNFdEMsaUNBQ0U7SUFENEUsMExBQWUsRUFBRSxJQUFDO0lBQzlGLGdDQUFVO0lBQUEscUJBQUs7SUFBQSxpQkFBVztJQUM1QixpQkFBUzs7Ozs7QURNWCxNQUFNLE9BQU8scUJBQXFCO0lBTGxDO1FBTUUsVUFBSyxHQUFHLFVBQVUsQ0FBQztLQUNwQjs7O1lBUEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOzswRkFDWSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ1ZsQyx5Q0FDRTtRQUFBLGdDQUNBO1FBRDBELDZJQUFtQjtRQUE3RSxpQkFDQTtRQUFBLDRFQUNFO1FBRUosaUJBQWlCOztRQUoyQyxlQUFtQjtRQUFuQixtQ0FBbUI7UUFDMUQsZUFBYTtRQUFiLGdDQUFhOztrRERRckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3Qzs7OztJQUVDLHNDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgSW5wdXQgd2l0aCBhIGNsZWFyIGJ1dHRvblxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1jbGVhcmFibGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1jbGVhcmFibGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q2xlYXJhYmxlRXhhbXBsZSB7XG4gIHZhbHVlID0gJ0NsZWFyIG1lJztcbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZm9ybS1maWVsZFwiPlxuICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNsZWFyYWJsZSBpbnB1dFwiIFsobmdNb2RlbCldPVwidmFsdWVcIj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uICpuZ0lmPVwidmFsdWVcIiBtYXRTdWZmaXggbWF0LWljb24tYnV0dG9uIGFyaWEtbGFiZWw9XCJDbGVhclwiIChjbGljayk9XCJ2YWx1ZT0nJ1wiPlxuICAgIDxtYXQtaWNvbj5jbG9zZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==