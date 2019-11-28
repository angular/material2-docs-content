/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/datepicker/datepicker-min-max/datepicker-min-max-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/**
 * \@title Datepicker with min & max validation
 */
export class DatepickerMinMaxExample {
    constructor() {
        // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
        /** @type {?} */
        const currentYear = new Date().getFullYear();
        this.minDate = new Date(currentYear - 20, 0, 1);
        this.maxDate = new Date(currentYear + 1, 11, 31);
    }
}
DatepickerMinMaxExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-min-max-example',
                templateUrl: 'datepicker-min-max-example.html',
                styleUrls: ['datepicker-min-max-example.css'],
            },] },
];
/** @nocollapse */
DatepickerMinMaxExample.ctorParameters = () => [];
/** @nocollapse */ DatepickerMinMaxExample.ɵfac = function DatepickerMinMaxExample_Factory(t) { return new (t || DatepickerMinMaxExample)(); };
/** @nocollapse */ DatepickerMinMaxExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerMinMaxExample, selectors: [["datepicker-min-max-example"]], decls: 5, vars: 4, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerMinMaxExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelement(1, "input", 1);
        i0.ɵɵelement(2, "mat-datepicker-toggle", 2);
        i0.ɵɵelement(3, "mat-datepicker", null, 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r16 = i0.ɵɵreference(4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r16);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r16);
    } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerMinMaxExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-min-max-example',
                templateUrl: 'datepicker-min-max-example.html',
                styleUrls: ['datepicker-min-max-example.css'],
            }]
    }], function () { return []; }, null); })();
if (false) {
    /** @type {?} */
    DatepickerMinMaxExample.prototype.minDate;
    /** @type {?} */
    DatepickerMinMaxExample.prototype.maxDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1taW4tbWF4LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItbWluLW1heC9kYXRlcGlja2VyLW1pbi1tYXgtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1taW4tbWF4L2RhdGVwaWNrZXItbWluLW1heC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVF4QyxNQUFNLE9BQU8sdUJBQXVCO0lBSWxDOzs7Y0FFUSxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5Qzs7Ozs4RkFDWSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ1JwQyx5Q0FDRTtRQUFBLDJCQUNBO1FBQUEsMkNBQXdFO1FBQ3hFLDBDQUF5QztRQUMzQyxpQkFBaUI7OztRQUhDLGVBQWU7UUFBZixpQ0FBZSxvQkFBQSx1QkFBQTtRQUNFLGVBQWM7UUFBZCwwQkFBYzs7a0RETXBDLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUM7Ozs7SUFFQywwQ0FBYzs7SUFDZCwwQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggbWluICYgbWF4IHZhbGlkYXRpb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItbWluLW1heC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLW1pbi1tYXgtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItbWluLW1heC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyTWluTWF4RXhhbXBsZSB7XG4gIG1pbkRhdGU6IERhdGU7XG4gIG1heERhdGU6IERhdGU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gU2V0IHRoZSBtaW5pbXVtIHRvIEphbnVhcnkgMXN0IDIwIHllYXJzIGluIHRoZSBwYXN0IGFuZCBEZWNlbWJlciAzMXN0IGEgeWVhciBpbiB0aGUgZnV0dXJlLlxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIHRoaXMubWluRGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRZZWFyIC0gMjAsIDAsIDEpO1xuICAgIHRoaXMubWF4RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRZZWFyICsgMSwgMTEsIDMxKTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWluXT1cIm1pbkRhdGVcIiBbbWF4XT1cIm1heERhdGVcIiBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBwbGFjZWhvbGRlcj1cIkNob29zZSBhIGRhdGVcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=