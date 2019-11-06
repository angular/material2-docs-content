/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
const _c0 = ["picker", ""];
/**
 * \@title Datepicker with custom date classes
 */
export class DatepickerDateClassExample {
    constructor() {
        this.dateClass = (/**
         * @param {?} d
         * @return {?}
         */
        (d) => {
            /** @type {?} */
            const date = d.getDate();
            // Highlight the 1st and 20th day of each month.
            return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
        });
    }
}
DatepickerDateClassExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-date-class-example',
                templateUrl: 'datepicker-date-class-example.html',
                styleUrls: ['datepicker-date-class-example.css'],
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */ DatepickerDateClassExample.ɵfac = function DatepickerDateClassExample_Factory(t) { return new (t || DatepickerDateClassExample)(); };
/** @nocollapse */ DatepickerDateClassExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerDateClassExample, selectors: [["datepicker-date-class-example"]], decls: 5, vars: 3, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [3, "dateClass"]], template: function DatepickerDateClassExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelement(1, "input", 1);
        i0.ɵɵelement(2, "mat-datepicker-toggle", 2);
        i0.ɵɵelement(3, "mat-datepicker", 3, _c0);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r6 = i0.ɵɵreference(4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matDatepicker", _r6);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r6);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dateClass", ctx.dateClass);
    } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [".example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"], encapsulation: 2 });
/*@__PURE__*/ i0.ɵsetClassMetadata(DatepickerDateClassExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-date-class-example',
                templateUrl: 'datepicker-date-class-example.html',
                styleUrls: ['datepicker-date-class-example.css'],
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    DatepickerDateClassExample.prototype.dateClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kYXRlLWNsYXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItZGF0ZS1jbGFzcy9kYXRlcGlja2VyLWRhdGUtY2xhc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1kYXRlLWNsYXNzL2RhdGVwaWNrZXItZGF0ZS1jbGFzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztBQVUzRCxNQUFNLE9BQU8sMEJBQTBCO0lBTnZDO1FBT0UsY0FBUzs7OztRQUFHLENBQUMsQ0FBTyxFQUE2QixFQUFFOztrQkFDM0MsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFFeEIsZ0RBQWdEO1lBQ2hELE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN4RSxDQUFDLEVBQUE7S0FDRjs7O1lBYkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2dCQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7b0dBQ1ksMEJBQTBCOytEQUExQiwwQkFBMEI7UUNWdkMseUNBQ0U7UUFBQSwyQkFDQTtRQUFBLDJDQUF3RTtRQUN4RSx5Q0FBaUU7UUFDbkUsaUJBQWlCOzs7UUFIQyxlQUF3QjtRQUF4QixtQ0FBd0I7UUFDUCxlQUFjO1FBQWQseUJBQWM7UUFDL0IsZUFBdUI7UUFBdkIseUNBQXVCOzttQ0RPNUIsMEJBQTBCO2NBTnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztnQkFDaEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7SUFFQywrQ0FLQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdENhbGVuZGFyQ2VsbENzc0NsYXNzZXN9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgd2l0aCBjdXN0b20gZGF0ZSBjbGFzc2VzICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWRhdGUtY2xhc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1kYXRlLWNsYXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLWRhdGUtY2xhc3MtZXhhbXBsZS5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckRhdGVDbGFzc0V4YW1wbGUge1xuICBkYXRlQ2xhc3MgPSAoZDogRGF0ZSk6IE1hdENhbGVuZGFyQ2VsbENzc0NsYXNzZXMgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBkLmdldERhdGUoKTtcblxuICAgIC8vIEhpZ2hsaWdodCB0aGUgMXN0IGFuZCAyMHRoIGRheSBvZiBlYWNoIG1vbnRoLlxuICAgIHJldHVybiAoZGF0ZSA9PT0gMSB8fCBkYXRlID09PSAyMCkgPyAnZXhhbXBsZS1jdXN0b20tZGF0ZS1jbGFzcycgOiAnJztcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBwbGFjZWhvbGRlcj1cIkNob29zZSBhIGRhdGVcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyIFtkYXRlQ2xhc3NdPVwiZGF0ZUNsYXNzXCIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==