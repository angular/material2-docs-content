/**
 * @fileoverview added by tsickle
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
/*@__PURE__*/ i0.ɵsetClassMetadata(InputClearableExample, [{
        type: Component,
        args: [{
                selector: 'input-clearable-example',
                templateUrl: './input-clearable-example.html',
                styleUrls: ['./input-clearable-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    InputClearableExample.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1jbGVhcmFibGUvaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1jbGVhcmFibGUvaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztJQ0V0QyxpQ0FDRTtJQUQ0RSwwTEFBZSxFQUFFLElBQUM7SUFDOUYsZ0NBQVU7SUFBQSxxQkFBSztJQUFBLGlCQUFXO0lBQzVCLGlCQUFTOzs7OztBRE1YLE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFNRSxVQUFLLEdBQUcsVUFBVSxDQUFDO0tBQ3BCOzs7WUFQQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7OzBGQUNZLHFCQUFxQjswREFBckIscUJBQXFCO1FDVmxDLHlDQUNFO1FBQUEsZ0NBQ0E7UUFEMEQsNklBQW1CO1FBQTdFLGlCQUNBO1FBQUEsNEVBQ0U7UUFFSixpQkFBaUI7O1FBSjJDLGVBQW1CO1FBQW5CLG1DQUFtQjtRQUMxRCxlQUFhO1FBQWIsZ0NBQWE7O21DRFFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOzs7O0lBRUMsc0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBJbnB1dCB3aXRoIGEgY2xlYXIgYnV0dG9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWNsZWFyYWJsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWNsZWFyYWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1jbGVhcmFibGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDbGVhcmFibGVFeGFtcGxlIHtcbiAgdmFsdWUgPSAnQ2xlYXIgbWUnO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mb3JtLWZpZWxkXCI+XG4gIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ2xlYXJhYmxlIGlucHV0XCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiPlxuICA8YnV0dG9uIG1hdC1idXR0b24gKm5nSWY9XCJ2YWx1ZVwiIG1hdFN1ZmZpeCBtYXQtaWNvbi1idXR0b24gYXJpYS1sYWJlbD1cIkNsZWFyXCIgKGNsaWNrKT1cInZhbHVlPScnXCI+XG4gICAgPG1hdC1pY29uPmNsb3NlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19