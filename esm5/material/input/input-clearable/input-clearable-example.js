import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
function InputClearableExample_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function InputClearableExample_button_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r2); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.value = ""; });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
/**
 * @title Input with a clear button
 */
var InputClearableExample = /** @class */ (function () {
    function InputClearableExample() {
        this.value = 'Clear me';
    }
    InputClearableExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-clearable-example',
                    templateUrl: './input-clearable-example.html',
                    styleUrls: ['./input-clearable-example.css'],
                },] },
    ];
    InputClearableExample.ɵfac = function InputClearableExample_Factory(t) { return new (t || InputClearableExample)(); };
    InputClearableExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputClearableExample, selectors: [["input-clearable-example"]], decls: 3, vars: 2, consts: [[1, "example-form-field"], ["matInput", "", "type", "text", "placeholder", "Clearable input", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]], template: function InputClearableExample_Template(rf, ctx) { if (rf & 1) {
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
    return InputClearableExample;
}());
export { InputClearableExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputClearableExample, [{
        type: Component,
        args: [{
                selector: 'input-clearable-example',
                templateUrl: './input-clearable-example.html',
                styleUrls: ['./input-clearable-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1jbGVhcmFibGUvaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1jbGVhcmFibGUvaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0lDRXRDLGlDQUNFO0lBRDRFLHdMQUFlLEVBQUUsSUFBQztJQUM5RixnQ0FBVTtJQUFBLHFCQUFLO0lBQUEsaUJBQVc7SUFDNUIsaUJBQVM7O0FERlg7O0dBRUc7QUFDSDtJQUFBO1FBTUUsVUFBSyxHQUFHLFVBQVUsQ0FBQztLQUNwQjs7Z0JBUEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFdBQVcsRUFBRSxnQ0FBZ0M7b0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2lCQUM3Qzs7OEZBQ1kscUJBQXFCOzhEQUFyQixxQkFBcUI7WUNWbEMseUNBQ0U7WUFBQSxnQ0FDQTtZQUQwRCw2SUFBbUI7WUFBN0UsaUJBQ0E7WUFBQSw0RUFDRTtZQUVKLGlCQUFpQjs7WUFKMkMsZUFBbUI7WUFBbkIsbUNBQW1CO1lBQzFELGVBQWE7WUFBYixnQ0FBYTs7Z0NERmxDO0NBWUMsQUFQRCxJQU9DO1NBRlkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBJbnB1dCB3aXRoIGEgY2xlYXIgYnV0dG9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWNsZWFyYWJsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWNsZWFyYWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1jbGVhcmFibGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDbGVhcmFibGVFeGFtcGxlIHtcbiAgdmFsdWUgPSAnQ2xlYXIgbWUnO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mb3JtLWZpZWxkXCI+XG4gIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ2xlYXJhYmxlIGlucHV0XCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiPlxuICA8YnV0dG9uIG1hdC1idXR0b24gKm5nSWY9XCJ2YWx1ZVwiIG1hdFN1ZmZpeCBtYXQtaWNvbi1idXR0b24gYXJpYS1sYWJlbD1cIkNsZWFyXCIgKGNsaWNrKT1cInZhbHVlPScnXCI+XG4gICAgPG1hdC1pY29uPmNsb3NlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19