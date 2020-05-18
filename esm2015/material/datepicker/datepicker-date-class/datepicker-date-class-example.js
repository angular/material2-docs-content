/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/datepicker/datepicker-date-class/datepicker-date-class-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/**
 * \@title Datepicker with custom date classes
 */
let DatepickerDateClassExample = /** @class */ (() => {
    /**
     * \@title Datepicker with custom date classes
     */
    class DatepickerDateClassExample {
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
    /** @nocollapse */ DatepickerDateClassExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerDateClassExample, selectors: [["datepicker-date-class-example"]], decls: 7, vars: 3, consts: [[1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [3, "dateClass"], ["picker", ""]], template: function DatepickerDateClassExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Choose a date");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "input", 1);
            i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
            i0.ɵɵelement(5, "mat-datepicker", 3, 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(6);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("matDatepicker", _r0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("dateClass", ctx.dateClass);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [".example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"], encapsulation: 2 });
    return DatepickerDateClassExample;
})();
export { DatepickerDateClassExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerDateClassExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-date-class-example',
                templateUrl: 'datepicker-date-class-example.html',
                styleUrls: ['datepicker-date-class-example.css'],
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DatepickerDateClassExample.prototype.dateClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kYXRlLWNsYXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItZGF0ZS1jbGFzcy9kYXRlcGlja2VyLWRhdGUtY2xhc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1kYXRlLWNsYXNzL2RhdGVwaWNrZXItZGF0ZS1jbGFzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQUkzRDs7OztJQUFBLE1BTWEsMEJBQTBCO1FBTnZDO1lBT0UsY0FBUzs7OztZQUFHLENBQUMsQ0FBTyxFQUE2QixFQUFFOztzQkFDM0MsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBRXhCLGdEQUFnRDtnQkFDaEQsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3hFLENBQUMsRUFBQTtTQUNGOzs7Z0JBYkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7b0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO29CQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7OzJIQUNZLDBCQUEwQjtzRkFBMUIsMEJBQTBCO1lDVnZDLHlDQUNFO1lBQUEsaUNBQVc7WUFBQSw2QkFBYTtZQUFBLGlCQUFZO1lBQ3BDLDJCQUNBO1lBQUEsMkNBQXdFO1lBQ3hFLHVDQUFpRTtZQUNuRSxpQkFBaUI7OztZQUhDLGVBQXdCO1lBQXhCLG1DQUF3QjtZQUNQLGVBQWM7WUFBZCx5QkFBYztZQUMvQixlQUF1QjtZQUF2Qix5Q0FBdUI7O3FDREp6QztLQWlCQztTQVBZLDBCQUEwQjtrREFBMUIsMEJBQTBCO2NBTnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztnQkFDaEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7SUFFQywrQ0FLQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdENhbGVuZGFyQ2VsbENzc0NsYXNzZXN9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgd2l0aCBjdXN0b20gZGF0ZSBjbGFzc2VzICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWRhdGUtY2xhc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1kYXRlLWNsYXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLWRhdGUtY2xhc3MtZXhhbXBsZS5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckRhdGVDbGFzc0V4YW1wbGUge1xuICBkYXRlQ2xhc3MgPSAoZDogRGF0ZSk6IE1hdENhbGVuZGFyQ2VsbENzc0NsYXNzZXMgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBkLmdldERhdGUoKTtcblxuICAgIC8vIEhpZ2hsaWdodCB0aGUgMXN0IGFuZCAyMHRoIGRheSBvZiBlYWNoIG1vbnRoLlxuICAgIHJldHVybiAoZGF0ZSA9PT0gMSB8fCBkYXRlID09PSAyMCkgPyAnZXhhbXBsZS1jdXN0b20tZGF0ZS1jbGFzcycgOiAnJztcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gIDxtYXQtbGFiZWw+Q2hvb3NlIGEgZGF0ZTwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciBbZGF0ZUNsYXNzXT1cImRhdGVDbGFzc1wiICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=