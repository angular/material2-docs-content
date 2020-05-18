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
function InputClearableExample_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function InputClearableExample_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.value = ""; });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
/**
 * \@title Input with a clear button
 */
let InputClearableExample = /** @class */ (() => {
    /**
     * \@title Input with a clear button
     */
    class InputClearableExample {
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
    /** @nocollapse */ InputClearableExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputClearableExample, selectors: [["input-clearable-example"]], decls: 5, vars: 2, consts: [[1, "example-form-field"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]], template: function InputClearableExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Clearable input");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function InputClearableExample_Template_input_ngModelChange_3_listener($event) { return ctx.value = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, InputClearableExample_button_4_Template, 3, 0, "button", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.value);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.value);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.NgIf, i5.MatButton, i1.MatSuffix, i6.MatIcon], styles: [".example-form-field[_ngcontent-%COMP%] {\n  width: 200px;\n}"] });
    return InputClearableExample;
})();
export { InputClearableExample };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1jbGVhcmFibGUvaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1jbGVhcmFibGUvaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7SUNHdEMsaUNBQ0U7SUFENEUsb0xBQWUsRUFBRSxJQUFDO0lBQzlGLGdDQUFVO0lBQUEscUJBQUs7SUFBQSxpQkFBVztJQUM1QixpQkFBUzs7Ozs7QURBWDs7OztJQUFBLE1BS2EscUJBQXFCO1FBTGxDO1lBTUUsVUFBSyxHQUFHLFVBQVUsQ0FBQztTQUNwQjs7O2dCQVBBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxXQUFXLEVBQUUsZ0NBQWdDO29CQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztpQkFDN0M7O2lIQUNZLHFCQUFxQjtpRkFBckIscUJBQXFCO1lDVmxDLHlDQUNFO1lBQUEsaUNBQVc7WUFBQSwrQkFBZTtZQUFBLGlCQUFZO1lBQ3RDLGdDQUNBO1lBRDRCLDZJQUFtQjtZQUEvQyxpQkFDQTtZQUFBLDRFQUNFO1lBRUosaUJBQWlCOztZQUphLGVBQW1CO1lBQW5CLG1DQUFtQjtZQUM1QixlQUFhO1lBQWIsZ0NBQWE7O2dDREhsQztLQVlDO1NBRlkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOzs7O0lBRUMsc0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBJbnB1dCB3aXRoIGEgY2xlYXIgYnV0dG9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWNsZWFyYWJsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWNsZWFyYWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1jbGVhcmFibGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDbGVhcmFibGVFeGFtcGxlIHtcbiAgdmFsdWUgPSAnQ2xlYXIgbWUnO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mb3JtLWZpZWxkXCI+XG4gIDxtYXQtbGFiZWw+Q2xlYXJhYmxlIGlucHV0PC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwidmFsdWVcIj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uICpuZ0lmPVwidmFsdWVcIiBtYXRTdWZmaXggbWF0LWljb24tYnV0dG9uIGFyaWEtbGFiZWw9XCJDbGVhclwiIChjbGljayk9XCJ2YWx1ZT0nJ1wiPlxuICAgIDxtYXQtaWNvbj5jbG9zZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==